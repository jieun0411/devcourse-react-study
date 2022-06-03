import styled from "@emotion/styled";
import { useRef, useState } from "react";

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({
  children,
  droppable,
  name,
  accept,
  value,
  onChange,
  ...props
}) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const changedFile = files[0]; // 선택된 여러 파일 중 첫번째만 받도록
    setFile(changedFile);
    onChange && onChange(changedFile); // upload 컴포넌트에서도 파일 상태를 받도록
  };

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  // 드래그를 통해 컴포넌트 내부로 들어왔을 때
  const handleDragEnter = (e) => {
    if (!droppable) return; // prop이 false or 없을 때 return

    e.preventDefault(); // 브라우저 기본 이벤트를 막습니다.
    e.stopPropagation(); // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막습니다.

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true); // 파일이 컴포넌트 안으로 들어오면 true
    }
  };

  // 드래그 하다가 컴포넌트 외부로 나갔을 때
  const handleDragLeave = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  const handleDragOver = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };

  // 파일을 컴포넌트 위에 두었을 때
  const handleFileDrop = (e) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === "function" ? children(file, dragging) : children}
      {/* 자식 컴포넌트에도 prop을 넘기도록, JSX를 넘겨줍니다. */}
    </UploadContainer>
  );
};

export default Upload;

import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues); // 상태
  const [errors, setErrors] = useState({}); // submit시 에러처리
  const [isLoading, setIsLoading] = useState(false); // submit 동안의 로딩

  const handleChange = (e) => {
    const { name, value } = e.target; // event target으로부터 name, value 받기
    setValues({ ...values, [name]: value }); // name에 해당하는 value 업데이트
  };

  const handleSubmit = async (e) => {
    setIsLoading(true); // 로딩 시작
    e.preventDefault();
    const newErrors = validate(values); // 에러 체크
    if (Object.keys(newErrors).length === 0) {
      // 에러가 없으면 onSubmit
      await onSubmit;
    }
    setErrors(newErrors); // 에러있으면 에러 처리
    setIsLoading(false); // 로딩 종료
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

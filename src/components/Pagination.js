import { useState } from "react";

// defaultPage: 맨 처음 선택될 페이지
// limit: 한 페이지 당 보여줄 article 갯수
// total: 전체 article 갯수
// onChange: 하위 -> 상위 컴포넌트로 페이지가 바뀜을 알려주는 함수
const Pagination = ({ defaultPage, limit, total, onChange }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    onChange(newPage); // 페이지네이션 값의 변화를 App 컴포넌트에 전달 위한 prop
    setPage(newPage);
    // 1. 이전, 다음 버튼 누르면 페이지 버튼 옮기도록
    // 2. 페이지 버튼 번호 눌렀을 때 해당 페이지 버튼으로 옮겨지도록
  };

  return (
    <div>
      <button onClick={() => page !== 0 && handleChangePage(page - 1)}>
        이전
      </button>
      {Array.from(new Array(totalPage), (_, i) => i)
        // filter 사용하여 페이지 버튼 갯수 조정 (앞 뒤로 2개씩 보이도록) (+예외처리)
        .filter((i) => {
          if (page < 3) {
            return i < 5;
          } else if (page > totalPage - 3) {
            return i >= totalPage - 5;
          }
          return i >= page - 2 && i <= page + 2;
        })
        .map((i) => (
          <button
            key={i}
            onClick={() => handleChangePage(i)}
            style={{ backgroundColor: page === i ? "gray" : undefined }}
          >
            {i + 1}
          </button>
        ))}
      <button
        onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;

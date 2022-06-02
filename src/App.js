import { useState } from "react";
import Board from "./components/Board";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(0);
  // dummy data
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }));

  const limit = 6; // 페이지 당 보여지는 게시물 갯수
  const offset = page * limit;

  return (
    <div>
      <Pagination
        defaultPage={0}
        limit={10}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;

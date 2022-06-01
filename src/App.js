// 요구사항
// 1. Emoji 리스트를 보여준다.
// 2. 검색을 통해 필터링한다.
// 3. Emoji를 클릭하면 복사한다.

import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import emojiJson from "./data/emoji.json";
import EmojiList from "./components/EmojiList";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;

import styled from "@emotion/styled";
import EmojiListItem from "../EmojiListItem";

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis
        .filter(
          // 검색기능
          (emoji) =>
            emoji.title.indexOf(keyword) >= 0 ||
            emoji.keywords.indexOf(keyword) >= 0
        )
        .slice(0, 10) // 0~10 자르기
        .map((emoji) => (
          <EmojiListItem key={emoji.title} emoji={emoji} />
        ))}
    </Container>
  );
};

export default EmojiList;

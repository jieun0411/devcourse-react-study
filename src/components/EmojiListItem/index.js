import styled from "@emotion/styled";

const ListItem = styled.li`
  display: flex;
  align-itmes: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Symbol = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Title = styled.div`
  width: 200px;
`;

const Keywords = styled.div`
  flex: 1;
`;

const EmojiListItem = ({ emoji }) => {
  return (
    //   클릭시 복사 기능
    <ListItem onClick={() => navigator.clipboard.writeText(emoji.symbol)}>
      <Symbol>{emoji.symbol}</Symbol>
      <Title>{emoji.title}</Title>
      <Keywords>{emoji.Keywords}</Keywords>
    </ListItem>
  );
};

export default EmojiListItem;

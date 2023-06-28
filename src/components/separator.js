import { styled } from "styled-components";

const SeparatorStyled = styled.div`
  border-block-end: 1px solid var(--grey-1);
  margin-block: 1.5rem;

  @media screen and (max-width: 414px) {
    margin-block: 0;
  }
`;

function Separator() {
  return <SeparatorStyled></SeparatorStyled>;
}

export default Separator;

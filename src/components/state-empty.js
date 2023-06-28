import { styled } from "styled-components";

const StateEmptyStyled = styled.div`
  font: var(--headline2-semi-bold);
  color: var(--grey-1);
  text-align: center;
  padding-top: 4rem;
`;

function StateEmpty() {
  return <StateEmptyStyled>No hay repositorios</StateEmptyStyled>;
}

export default StateEmpty;

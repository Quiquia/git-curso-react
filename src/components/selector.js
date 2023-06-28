import { styled } from "styled-components";

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  border-radius: 0.5rem;
  padding-block: 0.5rem;

  @media screen and (prefers-color-scheme: light) {
    border: 1px solid var(--grey-1);
  }

  @media screen and (max-width: 414px) {
    padding-inline: 0.5rem;
  }
`;

function Selector({ children, onChange, name }) {
  return (
    <SelectorStyled onChange={onChange} name={name}>
      {children}
    </SelectorStyled>
  );
}

export default Selector;

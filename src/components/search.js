import styled from "styled-components";
import { ButtonRounded } from "./button";
import Icon from "./icon";

const SearchStyled = styled.div`
  position: fixed;
  /* z-index: 1; */
  inset-inline-end: 1rem;
  inset-block-end: 1.5rem;
`;

function Search({ setModal }) {
  function handleClick() {
    setModal(true);
  }

  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded
        icon={<Icon name="search" size={24} color={"var(--grey-1)"} />}
      />
    </SearchStyled>
  );
}

export default Search;

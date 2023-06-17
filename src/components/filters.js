import styled from "styled-components";
import Icon from "./icon";
import ModalContent from "../modal";

const FilterStyle = styled.div`
  grid-area: filters;
  background-color: blue;
`;

function Filters() {
  return (
    <FilterStyle>
      <ModalContent />
      <h1>Icon</h1>
      <Icon name="arrow-down" />
      <Icon name="book" />
      <Icon name="branch" />
      <Icon name="cancel" />
      <Icon name="check" />
      <Icon name="github" />
      <Icon name="heart" />
      <Icon name="home" />
      <Icon name="link" />
      <Icon name="location" />
      <Icon name="search" />
      <Icon name="star" />
      <Icon name="twitter" />
      <Icon name="user" />
      <br />
      asado
    </FilterStyle>
  );
}

export default Filters;

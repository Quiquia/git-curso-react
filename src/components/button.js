import { isValidElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: var(--buttonBG);
  font: var(--button);
  color: var(--white);
  border: 1px solid var(--grey-1);
  min-inline-size: 135px;
  border-radius: 0.5rem;
  padding-block: 0.25rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    background-color: var(--white);
    color: var(--button);
  }
`;

function Button({ text, link, className, icon }) {
  const component = link ? "a" : "button";
  let IconComponent = null;

  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }

  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export default Button;

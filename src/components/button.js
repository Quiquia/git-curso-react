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
  flex: 1;

  &:hover {
    background-color: var(--white);
    color: var(--buttonBG);
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

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonBG);

  &:hover {
    background: var(--buttonBG);
    color: var(--white);
  }
`;

export const ButtonRounded = styled(Button)`
  border: 2px solid var(--grey-1);
  min-inline-size: initial;
  border-radius: 50%;
  padding: 0.75rem;

  &:hover {
    background: var(--buttonBG);
    transform: scale(1.1);
  }
`;
export default Button;

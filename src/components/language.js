import styled from "styled-components";

const LanguajeStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${({ color }) => color};
  }
`;

const languages = {
  html: {
    color: "blue",
  },
  ruby: {
    color: "red",
  },
  css: {
    color: "green",
  },
  javascript: {
    color: "yellow",
  },
};

function Language({ name }) {
  const formatedName = name.toLowerCase();
  const color = languages[formatedName]
    ? languages[formatedName].color
    : "white";

  return <LanguajeStyled color={color}>{name}</LanguajeStyled>;
}

export default Language;

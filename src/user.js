// Element.addEventListner("click", () => {}); Esto es vanila JSX

import { useState } from "react";
// import style from "./user.module.css";
// import "./user.scss";
import styled from "styled-components";

const Avatar = styled.img`
  border: 10px solid yellow;
  border: 1px solid blue;
`;

console.log("maria");

function User({ color, name, avatar, counter }) {
  // console.log(useState(name));

  const [calculatedName, setCalculatedName] = useState(name);

  const newName = `${calculatedName} es maravillosa`;

  function onClick() {
    setCalculatedName("Pikachu");
    console.log(`Hola ${name}, este es un click`);
  }

  return (
    <div
      // style={{
      //   borderBottom: `10px solid ${color}`,
      //   borderLeft: "50px solid green",
      // }}
      className="User"
      onClick={onClick}
    >
      <Avatar className="avatar" src={avatar} alt={name} title={name} />
      <p>
        Hemos dado click en {newName} por {counter}
      </p>
    </div>
  );
}

export default User;

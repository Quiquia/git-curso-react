import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Overlay from "./overlay";
import { ButtonContrast } from "./components/button";
import InputTextStyled from "./components/input-text";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

/*class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.name = "mmmmmmm";
  }

  state = {
    a: "Miguel",
  };

  componentDidUpdate() {
    console.log("el componente se actualizo");
  }

  componentWillUnmount() {
    console.log("el componente esta apunto de desaparecer");
    debugger;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: "Leo",
        b: this.name,
      });
    }, 5000);

    // this.setState({
    //   b: "",
    // });
  }

  render() {
    return (
      <div>
        {this.state.a}
        {this.state.b}
        Hola Mundo
      </div>
    );
  } 

 
  
}*/

const modalRoot = document.getElementById("portal");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default function Modal({ isActive, setModal }) {
  if (isActive) {
    return (
      <ModalPortal>
        <ModalContent setModal={setModal} />
      </ModalPortal>
    );
  }

  return null;
}

const ModalContentStyled = styled.form`
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  inset-inline-start: 50%;
  background: var(--buttonBG);
  color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  inline-size: 24rem;

  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
  @media screen and (max-width: 414px) {
    inline-size: 20rem;
  }
`;

function ModalContent({ setModal }) {
  const form = useRef(null);
  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form.current);
    // console.log(formData.get("username"));
    navigator(`/${formData.get("username")}`);
    setModal(false);
  }
  return (
    <Overlay>
      <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
        <h2 className="title">Buscar a tu usuario favorito</h2>
        <InputTextStyled type="text" name="username" placeholder="Username" />
        <ButtonContrast text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  );
}

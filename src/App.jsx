import { useState } from "react";
import styled from "styled-components";
import cartItems from "./constants/cartItem";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Cart></Cart>
    </Container>
  );
}

export default App;

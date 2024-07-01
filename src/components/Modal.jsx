import React from "react";
import styled from "styled-components";
import { open, close } from "../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  border-radius: 2%;
`;
const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 30%;
  background: white;
  border: 1px solid blue;
  border-radius: 10%;
  cursor: pointer;
`;
const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        담아두신 모든 음반을 삭제하시겠습니까?
        <ButtonWrapper>
          <Button
            onClick={() => {
              dispatch(clearCart());
              dispatch(close());
            }}
          >
            네
          </Button>
          <Button onClick={() => dispatch(close())}>아니요</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Modal;

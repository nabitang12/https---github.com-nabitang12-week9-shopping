import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { CartIcon } from "../constants/icons";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/cartSlice";
import { ChevronDown, ChevronUp } from "../constants/icons";
import { open, close } from "../redux/modalSlice";
import Modal from "./Modal";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 70%;
  padding-bottom: 5%;
  border-bottom: 1px solid blue;
  margin-top: 2%;
`;
const CartWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;
const CartImage = styled.img`
  width: 7%;
  height: 7%;
`;
const CartBackground = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const CartContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const CartTitle = styled.div`
  font-weight: bold;
`;
const CartPrice = styled.div`
  color: grey;
`;
const PriceContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
const PriceContent = styled.div`
  font-size: 1rem;
  font-weight: bolder;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: green;
  color: white;
  padding: 2%;
  margin-bottom: 6%;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 5%;
`;
const Count = styled.div`
  width: 5%;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;
const Button = styled.button`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 1%;
  cursor: pointer;
`;
const EmptyContent = styled.div`
  padding: 30px;
`;
const CartAmount = styled.div``;
const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  let value = 0;
  carts.map((cart) => (value += parseInt(cart.price)));
  const [price, setPrice] = useState(value);
  const [count, setCount] = useState(carts.length);

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  const priceIncrement = (value) => {
    setPrice(price + parseInt(value));
  };
  const priceDecrement = (value) => {
    setPrice(price - value);
  };

  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <Title>UMC PlayList</Title>
          <IconWrapper>
            <CartIcon />
            {carts.length > 0 ? <Count>{count}</Count> : null}
          </IconWrapper>
        </Wrapper>
      </HeaderContainer>
      <Title>당신이 선택한 음반</Title>
      {carts.length === 0 ? (
        <EmptyContent>고객님이 좋아하는 음반을 담아보세요~!</EmptyContent>
      ) : (
        <>
          <Container>
            {carts.map((cart) => (
              <CartWrapper key={cart.id}>
                <CartImage src={cart.img} />
                <CartBackground>
                  <CartContent>
                    <CartTitle>{cart.title}</CartTitle>
                    <CartPrice>&#8361; {cart.price}</CartPrice>
                  </CartContent>
                  <CartButton>
                    <SlArrowUp
                      color="blue"
                      onClick={() => {
                        priceIncrement(cart.price);
                        handleIncrement(cart.id);
                        setCount(count + 1);
                      }}
                    />
                    <CartAmount>{cart.amount}</CartAmount>
                    <SlArrowDown
                      color="blue"
                      onClick={() => {
                        cart.amount > 0 ? priceDecrement(cart.price) : null;
                        handleDecrement(cart.id);
                        setCount(count - 1);
                      }}
                    />
                  </CartButton>
                </CartBackground>
              </CartWrapper>
            ))}
          </Container>
          <PriceContainer>
            <PriceContent>총 가격</PriceContent>
            <PriceContent>&#8361; {price}</PriceContent>
          </PriceContainer>
          <Button
            onClick={() => {
              dispatch(open());
            }}
          >
            장바구니 초기화
          </Button>
          {isOpen ? <Modal></Modal> : null}
        </>
      )}
    </>
  );
};

export default Cart;

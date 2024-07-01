import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CartIcon } from "../constants/icons";
import { useSelector } from "react-redux";

const headerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: yellow;
  padding: 2%;
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
const Header = () => {
  const carts = useSelector((state) => state.cart);
  const [count, setCount] = useState(carts.length);
  return (
    <headerContainerContainer>
      <Wrapper>
        <Title>UMC PlayList</Title>
        <IconWrapper>
          <CartIcon />
          {carts.length > 0 ? <Count>{count}</Count> : null}
        </IconWrapper>
      </Wrapper>
    </headerContainerContainer>
  );
};

export default Header;

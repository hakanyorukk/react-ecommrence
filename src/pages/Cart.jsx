import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import OrderButton from "../ui/OrderButton";
import CartDetail from "../features/cart/CartDetail";

const StyledCart = styled.main``;

const OrderButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 8rem;
  width: 90%;
  height: 100vh;
`;

function Cart() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();
  console.log(isAuthenticated);

  return (
    <StyledCart>
      <CartDetail />
      <OrderButtonDiv>
        {isAuthenticated ? (
          <OrderButton onClick={() => navigate("/order")}>
            Order products
          </OrderButton>
        ) : (
          <OrderButton onClick={() => navigate("/login")}>Log In</OrderButton>
        )}
      </OrderButtonDiv>
    </StyledCart>
  );
}

export default Cart;

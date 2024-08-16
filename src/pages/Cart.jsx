import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import OrderButton from "../ui/OrderButton";
import CartDetail from "../features/cart/CartDetail";
import { useCarts } from "../features/cart/useCarts";

const StyledCart = styled.main`
  max-width: 125rem;
  margin: 0 auto;
`;

const OrderButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5rem;
  //margin: 2rem 1rem;

  //width: 10%;
  //height: 100vh;
`;

function Cart() {
  const navigate = useNavigate();
  const { data, error } = useCarts();
  const cartLength = data?.length;
  console.log(cartLength);
  const { isAuthenticated, isLoading } = useUser();

  return (
    <StyledCart>
      <CartDetail />
      <OrderButtonDiv>
        {isAuthenticated ? (
          cartLength <= 0 ? (
            <OrderButton onClick={() => navigate("/")}>
              <p>Add product</p>
            </OrderButton>
          ) : (
            <OrderButton onClick={() => navigate("/order")}>
              <p>Checkout</p>
            </OrderButton>
          )
        ) : (
          <OrderButton onClick={() => navigate("/login")}>
            <p>Log In</p>
          </OrderButton>
        )}
      </OrderButtonDiv>
    </StyledCart>
  );
}

export default Cart;

import styled from "styled-components";
import OrderForm from "../features/order/OrderForm";

const StyledOrder = styled.div`
  height: 100vh;
`;

function Order() {
  return (
    <StyledOrder>
      <OrderForm />
    </StyledOrder>
  );
}

export default Order;

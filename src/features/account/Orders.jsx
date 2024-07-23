import styled from "styled-components";
import { useGetOrder } from "../order/useGetOrder";
import OrderDetail from "./OrderDetail";
import Spinner from "../../ui/Spinner";

const StyledOrders = styled.div`
  width: 70%;
  margin: 3rem auto;
  min-height: 60rem;
  display: flex;
  flex-direction: column;

  h2 {
    padding: 1rem;
  }
`;

function Orders() {
  const { isLoading, data } = useGetOrder();
  console.log(data);

  if (isLoading) return <Spinner />;
  return (
    <StyledOrders>
      {data.length > 0 ? (
        <>
          <h2>Orders</h2>
          {data
            ?.slice()
            .reverse()
            .map((orderItem) => (
              <OrderDetail orderItem={orderItem} key={orderItem.id} />
            ))}
        </>
      ) : (
        <h2>You have not order anything yet.</h2>
      )}
    </StyledOrders>
  );
}

export default Orders;

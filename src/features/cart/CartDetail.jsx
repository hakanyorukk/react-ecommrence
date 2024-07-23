import styled from "styled-components";
import { useCarts } from "./useCarts";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

import CartItem from "./CartItem";
import DeleteAllItem from "./DeleteAllItem";
import FullPage from "../../ui/FullPage";
import { ScaleLoader } from "react-spinners";

const StyledCart = styled.div`
  padding: 1rem 8rem;
  width: 78%;
  margin: 1rem auto;
  background-color: var(--color-grey-100);
  border-radius: 2rem;
`;

const TotalPriceInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function CartDetail() {
  const { isLoading, data, error } = useCarts();

  const totalQuantity = data
    ?.map((product) => product.quantity)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const totalProductsPrice = data
    ?.map((product) => product.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const allIds = data?.map((i) => i.id) || [];
  console.log([249, 250]);

  if (isLoading || !data)
    return (
      <FullPage>
        <ScaleLoader
          height={55}
          width={6}
          margin={6}
          color="var(--color-brand-600)"
          loading={true}
          speedMultiplier={1.5}
        />
      </FullPage>
    );
  return (
    <StyledCart>
      <h1>My Cart</h1>
      <DeleteAllItem allIds={allIds} />
      {data.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <TotalPriceInfo>
        <h3>
          Total Price ({totalQuantity}) product:{" "}
          {Math.floor(totalProductsPrice * 10) / 10}$
        </h3>
      </TotalPriceInfo>
    </StyledCart>
  );
}

export default CartDetail;

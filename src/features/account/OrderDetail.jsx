import styled from "styled-components";

const StyledOrderDetail = styled.div`
  border: 2px solid var(--color-grey-400);
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
  background-color: var(--color-grey-100);
  border-radius: 1rem;
`;

const OrderTitle = styled.div`
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-items: center;
  border-bottom: 2px solid var(--color-grey-400);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ProductItem = styled.div`
  display: flex;
  margin: 1.5rem 3rem;
  border-bottom: 2px solid var(--color-grey-400);
`;

const Images = styled.div`
  width: 18%;

  img {
    margin: 1rem;
    width: 80%;
    height: 12rem;
  }
`;

const Titles = styled.div`
  width: 70%;

  h1 {
    padding: 2rem 2rem;
    height: 15rem;
  }
`;

function OrderDetail({ orderItem }) {
  //const { isLoading, product } = useProduct(orderItem.id);
  //console.log(product);
  const date = new Date(orderItem.created_at);
  //const jsonImages = orderItem.images;
  //const parsedImages = JSON.parse(jsonImages);
  // const allImages = parsedImages.reduce((acc, cur) => {
  //   return acc.concat(cur.image);
  // }, []);
  // console.log(parsedImages?.[0].image);

  //const newOrderItem = orderItem.map((product)=>)
  console.log(orderItem);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      {orderItem.totalAllPrice !== null && (
        <StyledOrderDetail>
          <OrderTitle>
            <h3>Date</h3>
            <h3>TotalPrice</h3>
            <h3>Status</h3>
            <h3>Order id</h3>
            <h4>
              {formattedDate} {formattedTime}
            </h4>
            <h4>{Math.round(orderItem.totalAllPrice)}$</h4>
            <h4>{orderItem.status}</h4>
            <h4>{orderItem?.orderId}</h4>
          </OrderTitle>

          <ProductItem>
            <Images>
              {orderItem?.images?.map((i, index) => (
                <img key={index} src={JSON.parse(i.image)[0]} />
              ))}
            </Images>
            <Titles>
              {orderItem?.titles?.map((i, index) => (
                <h1 key={index}>{i.title}</h1>
              ))}
            </Titles>
          </ProductItem>
        </StyledOrderDetail>
      )}
    </>
  );
}

export default OrderDetail;

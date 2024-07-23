import { LuTrash2 } from "react-icons/lu";
import styled, { keyframes } from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon";
import { useDeleteCart } from "./useDeleteCart";
import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { ClipLoader } from "react-spinners";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
const StyledSideCart = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: sticky;
  top: 0;

  //overflow: hidden;
  height: 100vh;
  overflow: scroll;
  //position: relative;
  width: 12rem;
  border-left: 1px solid black;

  animation: ${(props) => (props.isOpen ? slideOut : slideIn)} 0.5s forwards;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TotalPrice = styled.div`
  display: grid;
  text-align: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid black;
  background-color: var(--color-grey-300);
  position: grid;
  z-index: 100;
  top: 0;
  position: sticky;

  p {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const CartButton = styled.button`
  justify-content: space-around;
  align-items: center;
  display: flex;
  //border: 2px solid var(--color-grey-50);
  background-color: var(--color-yellow-100);
  border-radius: 1.6rem;
  //padding: 0.4rem 0.6rem;
`;

const Product = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 4rem; */
  border-bottom: 1px solid black;
  //height: 50%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  cursor: pointer;

  img {
    //border: 2px solid red;
    height: 90%;
  }
  h5 {
    padding: 0.1rem;
    font-size: 1.5rem;
    //border: 3px solid green;
    display: flex;
  }
`;

const ProductAddDelete = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  //margin-bottom: 0.6rem;
  padding: 0.8rem 0;

  select {
    border-radius: 1rem;
    padding: 3px 2px;
    background-color: var(--color-grey-200);
    width: 40%;
  }
`;

function SideCart({ data, isLoading }) {
  const { isDeleting, deleteCart } = useDeleteCart();
  const navigate = useNavigate();
  const totatlPrices = data
    ?.map((product) => product.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <StyledSideCart>
      <TotalPrice>
        <h4>Total Price</h4>
        <p>{Math.floor(totatlPrices * 10) / 10}$</p>
        <CartButton onClick={() => navigate("/cart")}>Go To Cart</CartButton>
      </TotalPrice>
      {data.map((i, index) => {
        // Parse the image URL string as JSON to get the first URL
        const imageUrl = JSON.parse(i.image)[0];
        return (
          <Product key={index}>
            <ProductInfo onClick={() => navigate(`/products/${i.productId}`)}>
              <img src={imageUrl} alt="" />
              <h5>{i.title}</h5>
              <h5>{i.price}$</h5>
            </ProductInfo>
            <ProductAddDelete>
              <select value={i.quantity}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <ButtonIcon
                onClick={() => deleteCart(i.id)}
                disabled={isDeleting}
              >
                {isDeleting ? <ClipLoader size={18} /> : <LuTrash2 />}
              </ButtonIcon>
            </ProductAddDelete>
          </Product>
        );
      })}
    </StyledSideCart>
  );
}

export default SideCart;

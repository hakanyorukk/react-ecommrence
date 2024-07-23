import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteCart } from "./useDeleteCart";
import { IoBagCheckOutline } from "react-icons/io5";

const StyledCartItem = styled.div`
  border-bottom: 2px solid var(--color-grey-300);
  display: flex;
  cursor: pointer;
  height: 20rem;

  img {
    width: 18%;
  }
`;

const ProductInfoRow = styled.div`
  width: 82%;
  display: flex;
  flex-direction: column;
`;

const ProductTitleRow = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const ProductStock = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 3rem;
  gap: 0.4rem;
  color: var(--color-green-700);
`;

const ProductInfoOperation = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-top: 3.5rem;

  padding: 1rem 2rem;
  gap: 1.5rem;

  select {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    border: 1px solid var(--color-grey-500);
  }

  button {
    border: none;
    background: none;
    font-size: 2rem;
    color: var(--color-brand-500);
  }
`;

function CartItem({ product }) {
  console.log(product);
  const { isDeleting1, deleteCart } = useDeleteCart();
  const navigate = useNavigate();
  return (
    <StyledCartItem onClick={() => navigate(`/products/${product.productId}`)}>
      <img src={JSON.parse(product.image)[0]} />
      <ProductInfoRow>
        <ProductTitleRow>
          <h2>{product.title}</h2>
          <h3>{product.price}$</h3>
        </ProductTitleRow>
        <ProductStock>
          <IoBagCheckOutline />
          <p>In stock</p>
        </ProductStock>
        <ProductInfoOperation>
          <select>
            <option value={product.quantity}>{product.quantity}</option>
            {Array.from({ length: product.stock }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>{" "}
          &#124;
          <button disabled={isDeleting1} onClick={() => deleteCart(product.id)}>
            Delete
          </button>
        </ProductInfoOperation>
      </ProductInfoRow>
    </StyledCartItem>
  );
}

export default CartItem;

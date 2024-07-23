import styled from "styled-components";
import { useAddToCart } from "../cart/useAddToCart";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ButtonIcon from "../../ui/ButtonIcon";
import { BiCartAdd } from "react-icons/bi";

import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { IoBagCheckOutline, IoShieldCheckmark } from "react-icons/io5";
import { ClipLoader, SyncLoader } from "react-spinners";

const StyledProductPreview = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ProductTitle = styled.h1`
  padding: 3.5rem 2rem 1rem;
`;

const PriceRate = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem 15rem;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: bold;

  p & {
    font-size: 4rem;
    font-weight: bold;
  }
`;
const ProductShip = styled.div`
  text-align: center;
  align-items: center;
  padding: 2rem 0 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5rem 5rem;
  p {
    font-weight: 500;
    font-size: 2rem;
    gap: 0.4rem;
    //margin: 0.8rem 6rem;
    display: flex;
    align-items: center;
  }

  .status {
    font-weight: 600;
    color: var(--color-green-700);
  }

  .fast-ship {
    font-weight: 600;
    color: var(--color-yellow-700);
  }

  .warranty {
    font-weight: 600;
    color: var(--color-brand-600);
  }

  .returnPolicy {
    font-weight: 600;
    color: var(--color-blue-700);
  }
`;

const ProductDescription = styled.div`
  padding: 1rem 3rem;
  font-size: 2rem;
  height: 40%;
`;

const AddCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem;
  justify-content: space-between;
  padding: 2rem 2rem;
`;

const Stock = styled.div`
  display: flex;
  align-items: center;
  // border: 2px solid red;

  h4 {
    border-radius: 2rem;
    padding: 1rem 2rem;
    background-color: var(--color-green-100);
  }
`;

const AddCartButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonAdj = styled.button`
  display: flex;
  align-items: center;
  //padding: 0.5rem 0;
  //border: 3px solid red;
  background-color: var(--color-brand-100);
  border-radius: 1.5rem;
  height: 70%;
  border: none;
  margin: 0 1rem;
  border: 1px solid var(--color-grey-400);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    width: 100%;
    border-radius: 1rem;
    //padding: 0.6rem;
    margin: 0.6rem;
    height: 100%;
    border: none;
    font-size: 1.5rem;
    //border: 1px solid var(--color-grey-400);
  }

  p {
    font-size: 3rem;
  }

  input {
    font-weight: bold;
    font-size: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    background: none;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

function ProductPreview({ product }) {
  const { isAdding, addCart } = useAddToCart();
  const [quantity, setQuantity] = useState(1);

  const {
    id: productId,
    images: image,
    price,
    shippingInformation,
    title,
  } = product;
  return (
    <StyledProductPreview>
      <ProductTitle>{title}</ProductTitle>
      <PriceRate>
        <h1>{price}$</h1>
        <p>{product.rating}</p>
        <ReactStars
          value={product.rating}
          size={30}
          count={5}
          edit={false}
          isHalf={true}
        />
      </PriceRate>

      <ProductShip>
        <p className="status">
          <IoBagCheckOutline />
          {product.availabilityStatus}
        </p>
        <p className="fast-ship">
          <FaShippingFast />
          {shippingInformation}
        </p>
        <p className="warranty">
          <IoShieldCheckmark />
          {product.warrantyInformation}
        </p>
        <p className="returnPolicy">
          <TbTruckReturn />
          {product.returnPolicy}
        </p>
      </ProductShip>

      <ProductDescription>
        <h4>Description</h4>
        {product.description}
      </ProductDescription>

      <AddCart>
        <Stock>
          <h4>Stocks: {product.stock}</h4>
        </Stock>
        <AddCartButtons>
          <ButtonAdj>
            <button
              disabled={isAdding || quantity <= 1}
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            >
              <p>-</p>
            </button>
            <input
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button
              disabled={isAdding || quantity >= product.stock}
              onClick={() => {
                if (quantity < product.stock) {
                  setQuantity(quantity + 1); // Only increment quantity if it's less than product.stock
                }
              }}
            >
              <p>+</p>
            </button>
          </ButtonAdj>

          <ButtonIcon
            disabled={isAdding}
            size="large"
            onClick={() =>
              addCart({
                productId,
                image,
                price: price,
                shippingInformation,
                title,
                quantity,
                totalPrice: price * quantity,
                stock: product.stock,
              })
            }
          >
            {isAdding ? <ClipLoader /> : <BiCartAdd />}
          </ButtonIcon>
        </AddCartButtons>
      </AddCart>
    </StyledProductPreview>
  );
}

export default ProductPreview;

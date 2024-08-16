import styled from "styled-components";
import { useAddToCart } from "../cart/useAddToCart";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ButtonIcon from "../../ui/ButtonIcon";
import { BiCartAdd } from "react-icons/bi";

import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { IoBagCheckOutline, IoShieldCheckmark } from "react-icons/io5";
import { SyncLoader } from "react-spinners";

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
  display: flex;

  //grid-template-columns: 1fr 40rem;
  justify-content: space-between;
  padding: 2rem 2rem;
`;

const Stock = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  // border: 2px solid red;

  h4 {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-color: var(--color-grey-100);
  }
`;

const AddCartButtons = styled.div`
  display: flex;
  align-items: center;
  //width: 40rem;
  justify-content: space-between;
`;

const ButtonAdj = styled.button`
  display: flex;
  align-items: center;
  height: 80%;
  border: none;
  border: 1px solid var(--color-grey-400);
  width: 15rem;
  margin: 0.6rem 1rem;
  border-radius: 0.4rem;
  overflow: hidden;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-grey-100);
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.5rem;
  }

  p {
    font-size: 3rem;
  }

  input {
    font-weight: bold;
    font-size: 2rem;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    border: none;
    width: 100%;
    background: var(--color-grey-0);
  }
`;

function ProductPreview({ product }) {
  const { isLoading, addCart } = useAddToCart();
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
        <h4>Overview</h4>
        {product.description}
      </ProductDescription>

      <AddCart>
        <Stock>
          <h4>Stocks: {product.stock}</h4>
        </Stock>
        <AddCartButtons>
          <ButtonAdj>
            <button
              disabled={isLoading || quantity <= 1}
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
              disabled={isLoading || quantity >= product.stock}
              onClick={() => {
                if (quantity < product.stock) {
                  setQuantity(quantity + 1); // Only increment quantity if it's less than product.stock
                }
              }}
            >
              <p>+</p>
            </button>
          </ButtonAdj>
          {isLoading ? (
            <ButtonIcon size="largeload">
              <SyncLoader size={16} margin={5} color="var(--color-grey-600)" />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              disabled={isLoading}
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
              <p>Add to cart</p>
              <BiCartAdd />
            </ButtonIcon>
          )}
        </AddCartButtons>
      </AddCart>
    </StyledProductPreview>
  );
}

export default ProductPreview;

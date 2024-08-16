/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../../ui/Heading";
import ReactStars from "react-rating-stars-component";
import { BiCartAdd } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const StyledProductRow = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 1.4rem;

  background-color: var(--color-grey-50);
  width: 24rem;
  height: 40rem;
  //justify-content: space-between;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-grey-0);
  }
`;

const ProductImage = styled.img`
  height: 25rem;
  margin: 0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0;

  & p {
    font-weight: bold;
    color: var(--color-grey-900);
  }
`;

const PriceIcon = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

const Icon = styled.button`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  background: none;
  border: 2px solid var(--color-grey-300);

  background-color: var(--color-yellow-300);

  &:hover {
    box-shadow: var(--shadow-lg);

    background-color: var(--color-grey-300);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const Star = styled.div`
  position: absolute;
  bottom: 1.2rem;
`;

function ProductRow({ product: { images, title, price, rating, id } }) {
  const navigate = useNavigate();
  const productId = id;
  const image_path = images[0];

  // console.log(isLoading);
  // if (isLoading) return <ClipLoader />;
  // const image = image_path.replace(/[[\]"]/g, "");

  return (
    <StyledProductRow onClick={() => navigate(`/products/${productId}`)}>
      {/* {isLoading && <ClipLoader />} */}
      {/* <LazyLoadImage effect="blur"  src={image_path} /> */}

      <ProductImage src={image_path} />
      <ProductInfo>
        <PriceIcon>
          <p>{price}$</p>
          <Icon>
            <BiCartAdd />
          </Icon>
        </PriceIcon>
        <Heading as="h3">{title}</Heading>
        <Star>
          <ReactStars
            size={20}
            value={rating}
            isHalf={true}
            edit={false}
            color={"var(--color-grey-300)"}
            activeColor={"var(--color-grey-700)"}
          />
        </Star>
      </ProductInfo>
    </StyledProductRow>
  );
}

export default ProductRow;

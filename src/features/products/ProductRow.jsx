/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../../ui/Heading";
import ReactStars from "react-rating-stars-component";
import { BiCartAdd } from "react-icons/bi";
import ButtonIcon from "../../ui/ButtonIcon";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
// eslint-disable-next-line react/prop-types
const StyledProductRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-grey-50);
  width: 190px;
  max-height: 40rem;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-grey-0);
  }
`;

const ProductImage = styled.img`
  height: 20rem;
  margin: 0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: start;
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0;
  height: 14rem;

  & p {
    font-weight: bold;
    color: var(--color-grey-900);
  }
`;

const Icon = styled.button`
  position: relative;
  padding: 0;
  width: 30%;
  bottom: 0.5rem;
  background: none;
  border: 2px solid var(--color-grey-300);
  border-radius: 2rem;
  transition: box-shadow 0.3s ease;
  margin-left: 1rem;
  background-color: var(--color-yellow-100);

  /* margin-bottom: -1rem;
  margin-left: 0; // Removed since we're using absolute positioning
  height: 10%;
  left: 12rem; */

  &:hover {
    box-shadow: var(--shadow-lg);
    border-radius: 2rem;
    background-color: var(--color-grey-300);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }
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
      <ProductImage src={image_path} />
      <ProductInfo>
        <p>{price}$</p>
        <Icon>
          <BiCartAdd />
        </Icon>
        <ReactStars
          size={25}
          value={rating}
          isHalf={true}
          edit={false}
          // color={"var(--color-grey-400)"}
          //activeColor={"var(--color-red-700)"}
        />
        <Heading as="h3">{title}</Heading>
      </ProductInfo>
    </StyledProductRow>
  );
}

export default ProductRow;

import styled from "styled-components";
import Empty from "../../ui/Empty";
import useProduct from "./useProduct";

import { HiChevronRight } from "react-icons/hi2";

import { useNavigate, useSearchParams } from "react-router-dom";
import ProductImages from "../../ui/ProductImages";

import ProductComments from "./ProductComments";
import ProductPreview from "./ProductPreview";
import FullPage from "../../ui/FullPage";
import { ScaleLoader } from "react-spinners";

const StyledProductDetail = styled.div`
  display: grid;
  grid-template-rows: 4rem 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
`;

const CategoryInfo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  gap: 0.5rem;
  font-size: 1.8rem;

  border-bottom: 2px solid black;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

function ProductDetail() {
  // get single product from an api whith matched this productId
  const { isLoading, product } = useProduct();
  console.log(product);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(product);
  if (isLoading)
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
  if (!product || product === undefined)
    return <Empty resourceName={product} />;

  const category = product.category.split("-");
  const formattedCategory = category
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");

  function clickCategory(category) {
    searchParams.set("category", category);
    navigate(`/products?${searchParams}`);
    //setSearchParams(searchParams);
  }

  return (
    <StyledProductDetail>
      <CategoryInfo onClick={() => clickCategory(product.category)}>
        <HiChevronRight />
        <p>{formattedCategory}</p>
      </CategoryInfo>

      <ProductInfo>
        <ProductImages image={product.images} />
        <ProductPreview product={product} />
      </ProductInfo>
      <ProductComments product={product} />
    </StyledProductDetail>
  );
}

export default ProductDetail;

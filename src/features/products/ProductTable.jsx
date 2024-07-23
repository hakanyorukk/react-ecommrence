import styled from "styled-components";
import useProducts from "./useProducts";
import ProductRow from "./ProductRow";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { BeatLoader } from "react-spinners";

const StyledProductTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  flex-shrink: 60rem;
  gap: 1rem;
  justify-content: center;
`;

function ProductTable({ products }) {
  //console.log(isLoading);
  //console.log(products);

  // if (isLoading) return <BeatLoader />;
  // if (isLoading || products === undefined || products === null) {
  //   // Handle the case where products is undefined or null
  //   //return <Empty resourceName={"products"} />;
  //   return <BeatLoader />;
  // }

  return (
    <StyledProductTable>
      {products.products.map((product) => (
        <ProductRow product={product} key={product.id} />
      ))}
    </StyledProductTable>
  );
}

export default ProductTable;

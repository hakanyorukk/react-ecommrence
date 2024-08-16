import styled from "styled-components";

import ProductRow from "./ProductRow";

const StyledProductTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0 auto;
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

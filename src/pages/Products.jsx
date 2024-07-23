import styled from "styled-components";
import Heading from "../ui/Heading";
import ProductTable from "../features/products/ProductTable";
import ProductTableOperations from "../features/products/ProductTableOperations";
import useProducts from "../features/products/useProducts";
import { BounceLoader, DotLoader, ScaleLoader } from "react-spinners";
import FullPage from "../ui/FullPage";

// export default Products;

const StyledProducts = styled.div``;

const Row = styled.div`
  display: grid;
  padding: 2rem 4rem;
  grid-template-columns: 24rem 1fr;
`;

function Products() {
  const { products, isLoading } = useProducts();
  if (isLoading || !products)
    return (
      <FullPage>
        <ScaleLoader
          height={50}
          width={6}
          margin={6}
          color="var(--color-brand-600)"
          loading={true}
          speedMultiplier={1.5}
        />
      </FullPage>
    );

  return (
    <StyledProducts>
      <Heading as="h1">Products</Heading>
      <Row>
        <ProductTableOperations />
        <ProductTable products={products} />
      </Row>
    </StyledProducts>
  );
}

export default Products;

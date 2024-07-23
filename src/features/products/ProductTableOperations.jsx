import styled from "styled-components";
import useCategories from "./useCategories";
import Heading from "../../ui/Heading";
import CategoryRow from "./CategoryRow";

//import Category from "../../ui/Category";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: auto;
  padding: 2.2rem;
  background-color: var(--color-brand-200);
  border-radius: 2rem;
`;

function ProductTableOperations() {
  const { categories, isLoading } = useCategories();

  if (!categories) {
    // Handle the case where products is undefined or null
    return <div>No categories</div>;
  }

  return (
    <StyledSideBar>
      <Heading as="h1">Categories</Heading>
      {/* <Category
        filterField="category"
        options={[{ value: "all", label: "All" }]}
      /> */}
      <CategoryRow label={"All"} value={"all"} filteredField="category" />
      {categories.map((category) => (
        <CategoryRow
          // category={category}
          active={category.slug}
          label={category.name}
          value={category.slug}
          key={category}
          filteredField="category"
        />
      ))}
    </StyledSideBar>
  );
}

export default ProductTableOperations;

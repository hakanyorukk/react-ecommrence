import styled from "styled-components";
import Button from "../../ui/Button";
import { HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledCategoryRow = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

function CategoryRow({ filteredField, value, label }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filteredField);
  //console.log(currentFilter);

  function handleClick(value) {
    searchParams.set(filteredField, value);
    if (searchParams.get("search")) searchParams.set("search", "null");
    setSearchParams(searchParams);
    //console.log(value);
  }
  //console.log(category);
  // console.log(categoryId, categoryName);
  return (
    <StyledCategoryRow>
      <li>
        <Button
          size="medium"
          onClick={() => handleClick(value)}
          currentFilter={currentFilter}
          value={value}
          disabled={currentFilter === value}
          active={currentFilter === value}
        >
          <p>{label}</p>
          <HiChevronRight />
        </Button>
      </li>
    </StyledCategoryRow>
  );
}

export default CategoryRow;

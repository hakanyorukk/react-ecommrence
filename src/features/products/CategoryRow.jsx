import styled, { css } from "styled-components";

import { HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledCategoryRow = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const CategoryButton = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: none;
  border-radius: 0.8rem;
  border: none;
  align-items: center;

  /* &:hover {
    background-color: var(--color-grey-50);
  } */

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-50);
      cursor: not-allowed;
    `}

  p {
    z-index: 5;
  }
  & svg {
    z-index: 5;
  }

  &::after {
    border-radius: 0.8rem;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* height: 0.175rem; */
    color: black;
    left: 0;
    bottom: 0;
    background-color: var(--color-grey-50);
    transform: scale(0, 1);
    transform-origin: 100% 0%;
    transition: transform 0.4s ease 0.2s;
  }

  &:hover::after {
    transform: scale(1, 1);
    transform-origin: 0% 100%;
  }
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
        <CategoryButton
          size="medium"
          onClick={() => handleClick(value)}
          currentFilter={currentFilter}
          value={value}
          disabled={currentFilter === value}
          active={currentFilter === value}
        >
          <p>{label}</p>
          <HiChevronRight />
        </CategoryButton>
      </li>
    </StyledCategoryRow>
  );
}

export default CategoryRow;

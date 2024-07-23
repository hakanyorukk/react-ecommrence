import styled from "styled-components";
import Button from "./Button";

const StyledFilter = styled.div``;

function Category() {
  return (
    <StyledFilter>
      {options.map((option) => (
        <Button></Button>
      ))}
    </StyledFilter>
  );
}

export default Category;

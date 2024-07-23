import styled from "styled-components";
import { useDeleteAllCart } from "./useDeleteCart";

const StyledDeleteButton = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-grey-300);
  padding: 0.6rem 2.2rem;

  button {
    background: none;
    border: none;
    color: var(--color-brand-500);
    font-size: 2rem;
  }
`;

function DeleteAllItem({ allIds }) {
  const { isDeleting2, deleteAllCart } = useDeleteAllCart();
  return (
    <StyledDeleteButton>
      {" "}
      <button disabled={isDeleting2} onClick={() => deleteAllCart([allIds])}>
        Delete All
      </button>
      <h3>Price</h3>
    </StyledDeleteButton>
  );
}

export default DeleteAllItem;

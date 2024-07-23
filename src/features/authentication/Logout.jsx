import styled from "styled-components";
import { useLogout } from "./useLogout";

const StyledLogout = styled.div`
  display: flex;
  height: 100%;

  button {
    background: none;
    border: none;
  }

  & svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--color-grey-50);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function Logout({ children }) {
  const { logout, isLoading } = useLogout();
  return (
    <StyledLogout>
      <button disabled={isLoading} onClick={logout}>
        {children}
      </button>
    </StyledLogout>
  );
}

export default Logout;

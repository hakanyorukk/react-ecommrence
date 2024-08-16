import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import AppLogo from "./AppLogo";

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 3;
  color: var(--color-grey-50);
  background-color: var(--color-grey-800);
  padding: 0.4rem 8rem;

  gap: 2.4rem;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <AppLogo />
      <SearchBar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

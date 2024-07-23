import styled from "styled-components";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import { MdFavoriteBorder } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.5rem;
  color: var(--color-grey-50);
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0 0.4rem;
    color: var(--color-grey-50);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 1.4rem;
    transition: all 0.3s;
    //border: 2px solid red;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-500);
    background: none;
    border-radius: 2rem;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-50);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-500);
  }

  &.shopping-cart {
    //border: 2px solid red;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-yellow-100);
      background: none;
      border-radius: 2rem;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-yellow-100);
    }
  }
`;

function HeaderMenu() {
  const { isAuthenticated, isLoading } = useUser();

  return (
    <NavList>
      <li>
        <StyledNavLink to="products">
          Wishlist
          <MdFavoriteBorder />
          {/* //
          <HiOutlineHeart /> */}
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/cart" className="shopping-cart">
          Shopping Cart
          <HiOutlineShoppingCart />
        </StyledNavLink>
      </li>
      {!isAuthenticated ? (
        <li>
          <StyledNavLink to="login">
            Log In
            <IoLogInOutline />
          </StyledNavLink>
        </li>
      ) : (
        <>
          <li>
            <StyledNavLink to="account">
              Account
              <HiOutlineUser />
            </StyledNavLink>
          </li>
          <li>
            <Logout>
              <IoLogOutOutline />
            </Logout>
          </li>
        </>
      )}
    </NavList>
  );
}

export default HeaderMenu;

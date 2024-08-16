import styled from "styled-components";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import { MdFavoriteBorder } from "react-icons/md";
import { useCarts } from "../features/cart/useCarts";

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
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 1rem 1.6rem;
    color: var(--color-grey-50);
    font-size: 1.6rem;
    font-weight: 600;
    // padding: 1rem 1.4rem;
    transition: all 0.3s;
    //border: 2px solid red;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-yellow-100);
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
    color: var(--color-yellow-100);
  }

  &::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: -3px;
    width: 90%;
    margin: 0 auto;
    height: 0.175rem;
    transform: scale(0.1);
    background-color: var(--color-yellow-100);
    transition: all 0.5s ease;
  }

  &:hover::after,
  &:active::after,
  &.active:link::after,
  &.active:visited::after {
    transform: scale(1.1);
  }
`;

const Shopping = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    position: absolute;
    align-items: center;
    text-align: center;
    display: flex;
    top: -1rem; /* Adjust as needed */
    left: 1.4rem;
    padding: 0.2rem 0.5rem; /* Example styling */
    border-radius: 50%;
    background-color: var(--color-yellow-400);
    color: black;
    font-size: 1.5rem;
    height: 2rem;
    border-radius: 50%;
  }
`;

function HeaderMenu() {
  const { isAuthenticated, isLoading } = useUser();
  const carts = useCarts();
  // console.log(carts?.data.length);

  return (
    <NavList>
      <li>
        <StyledNavLink to="products">
          Wishlist
          <MdFavoriteBorder />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/cart">
          Shopping Cart
          <Shopping>
            {carts?.data?.length > 0 && (
              <p className="notify">{carts?.data?.length}</p>
            )}
            <HiOutlineShoppingCart />
          </Shopping>
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

import styled from "styled-components";

const OrderButton = styled.button`
  position: relative;
  background-color: var(--color-yellow-300);
  color: var(--color-grey-900);
  font-size: 2.2rem;
  font-weight: 500;
  height: 6rem;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-grey-300);

  p {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-color: var(--color-yellow-100);
    transform: scale(1, 0);
    transform-origin: 0% 100%;
    transition: transform 0.3s ease 0.2s;
  }

  &:hover::after {
    transform: scale(1, 1);
    transform-origin: 100% 0%;
  }
`;

export default OrderButton;

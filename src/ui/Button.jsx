import styled, { css } from "styled-components";
const Button = styled.button`
  display: flex;
  background: none;
  padding: 1rem;
  border: none;

  margin: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  text-align: left;
  display: flex;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-50);
      cursor: not-allowed;
    `}

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    transition: all 0.3s;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;

    display: flex;
  }

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

export default Button;

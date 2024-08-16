import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.4rem 0.8rem;
    text-align: center;
    display: flex;
    background: none;
    border: none;
    align-items: center;
    border-radius: var(--border-radius-sm);
    & svg {
      width: 3.2rem;
      height: 2.2rem;
    }
  `,
  medium: css`
    font-size: 1.4rem;
    font-weight: 500;
    background: none;
    border-radius: var(--border-radius-lg);
    border: 2px solid var(--color-grey-400);
    & svg {
      width: 3.5rem;
      height: 3rem;
    }
  `,
  large: css`
    display: flex;
    height: 100%;
    width: 20rem;
    align-items: center;
    justify-content: space-between;
    font-size: 2.2rem;
    font-weight: 500;
    padding: 0.2rem 1.6rem;
    border-radius: 0.6rem;
    border: 2px solid var(--color-grey-300);
    background-color: var(--color-yellow-300);
    transition: all 0.3s ease 0.2s;

    & svg {
      width: 4.5rem;
      height: 4rem;
    }

    &:hover {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
      transform: translateY(-5px);
    }

    &:active {
      transform: translateY(0);
    }
  `,
  largeload: css`
    display: flex;
    height: 100%;
    width: 20rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 2px solid var(--color-grey-300);
    background-color: var(--color-yellow-100);
  `,
};

const ButtonIcon = styled.button`
  transition: all 0.2s;
  ${(props) => sizes[props.size]}/* &:hover {
    background-color: var(--color-grey-100);
  } */
`;

ButtonIcon.defaultProps = {
  size: "small",
};

export default ButtonIcon;

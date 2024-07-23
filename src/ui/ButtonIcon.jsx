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
    font-size: 1.6rem;
    font-weight: 500;

    padding: 0.5rem 1.6rem;
    border-radius: 2.2rem;
    border: 2px solid var(--color-grey-300);
    background-color: var(--color-yellow-100);
    & svg {
      width: 4.5rem;
      height: 4rem;
    }
  `,
};

const ButtonIcon = styled.button`
  gap: 0.6rem;
  padding: 0.6rem;
  transition: all 0.2s;
  ${(props) => sizes[props.size]}/* &:hover {
    background-color: var(--color-grey-100);
  } */
`;

ButtonIcon.defaultProps = {
  size: "small",
};

export default ButtonIcon;

import { AiOutlineGithub } from "react-icons/ai";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";

const StyledFooter = styled.div`
  color: var(--color-grey-50);
  background-color: var(--color-grey-800);
  padding: 2.4rem 6rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  //position: sticky;
  width: 100%;
  //z-index: 100;
  //bottom: 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2024 </p> |
      <a
        href="https://github.com/hakanyorukk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonIcon>
          <AiOutlineGithub />
          hakanyorukk
        </ButtonIcon>
      </a>
    </StyledFooter>
  );
}

export default Footer;

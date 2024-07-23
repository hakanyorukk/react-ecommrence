import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.button`
  background: none;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

function AppLogo() {
  const navigate = useNavigate();
  return (
    <StyledLogo onClick={() => navigate("/")}>
      <h2>App Logo</h2>
    </StyledLogo>
  );
}

export default AppLogo;

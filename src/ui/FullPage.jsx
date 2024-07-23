import styled from "styled-components";

const StyledFullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 80vh;
  //background-color: var(--color-brand-600);
  backdrop-filter: blur(20px);
  // background-color: rgba(0, 0, 0, 0.4);
  //height: 100%;
`;

function FullPage({ children }) {
  return <StyledFullPage>{children}</StyledFullPage>;
}

export default FullPage;

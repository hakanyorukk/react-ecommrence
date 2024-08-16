import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../features/authentication/useLogin";
import FullPage from "../ui/FullPage";
import { MoonLoader, ScaleLoader } from "react-spinners";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;

const ViewButton = styled.div`
  display: flex;
  //border: 2px solid green;

  button {
    color: var(--color-brand-500);
    font-size: 2.2rem;
    background: none;
    border: none;
    border-bottom: 2px solid var(--color-brand-500);
  }
`;

function Login() {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <FullPage>
        {/* <ScaleLoader
          height={55}
          width={6}
          margin={6}
          color="var(--color-brand-600)"
          loading={true}
          speedMultiplier={1.5}
        /> */}
        <MoonLoader
          size={70}
          speedMultiplier={1.5}
          color="var(--color-brand-600)"
        />
      </FullPage>
    );
  return (
    <LoginLayout>
      <h1>Login into your account</h1>
      <LoginForm login={login} isLoading={isLoading} />
      <ViewButton>
        <button onClick={() => navigate("/")}>View Products</button>
      </ViewButton>
    </LoginLayout>
  );
}

export default Login;

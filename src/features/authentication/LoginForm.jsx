import { useState } from "react";
import { useLogin } from "./useLogin";

import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import styled from "styled-components";
import FullPage from "../../ui/FullPage";
import { ScaleLoader } from "react-spinners";

const LoginButton = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40rem;

  button {
    padding: 0.6rem;
    border: 2px solid var(--color-grey-200);
    font-size: 2rem;
    color: var(--color-grey-50);
    background-color: var(--color-brand-500);
    border-radius: 3rem;
    width: 100%;
    border: 3px solid blue;
  }
`;
function LoginForm({ login, isLoading }) {
  const [email, setEmail] = useState("hakan@yoruk.com");
  const [password, setPassword] = useState("testpass");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <LoginButton>
          <button size="large">{!isLoading ? "Log in" : "wait"}</button>
        </LoginButton>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

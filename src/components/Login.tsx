import React, { ReactElement } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import amazon from "../__images__/amazon.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 6.25rem;
  background: white;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px gray;
  text-align: center;
  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: sans-serif;
  }
`;

const AmazonLogo = styled.img`
  width: 15rem;
`;

const LoginButton = styled.button`
  margin-top: 3rem;
  background: #f0c14b;
  border-radius: 0.25rem;
  border: 0.125rem solid #a88734;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

const Login = ({
  setUser,
}: {
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string | null;
      email: string | null;
      photo: string | null;
    } | null>
  >;
}): ReactElement => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const { user } = result;

        if (user) {
          const newUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          };
          localStorage.setItem("user", JSON.stringify(newUser));
          setUser(newUser);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src={amazon} />
        <h1>Sign into Amazon</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
};

export default Login;

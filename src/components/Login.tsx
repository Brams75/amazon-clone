import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

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
`;

const AmazonLogo = styled.img`
  height: 6.25rem;
  margin-bottom: 2.3rem;
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

const Login = ({ setUser }: any): JSX.Element => {
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
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png" />
        <h1>Sign into Amazon</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
};

export default Login;

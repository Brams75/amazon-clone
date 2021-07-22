import React, { ReactElement } from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";
import amazon from "../../__images__/amazon.png";
import LoginContent from "./LoginContent";
import LoginButton from "./LoginButton";
import AmazonLogo from "./AmazonLogo";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

interface SetUser {
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string | null;
      email: string | null;
      photo: string | null;
    } | null>
  >;
}

const Login: React.FC<SetUser> = ({ setUser }): ReactElement => {
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
      <LoginContent>
        <AmazonLogo src={amazon} />
        <h1>Sign into Amazon</h1>
        <LoginButton onClick={signIn} data-testid="login-button">
          Sign in with Google
        </LoginButton>
      </LoginContent>
    </Container>
  );
};

export default Login;

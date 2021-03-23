import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { Image } from "../components";
import images from "../utils/images";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;
const URL =
  "https://firebasestorage.googleapis.com/v0/b/react-native-simple-chat-3dc07.appspot.com/o/logo.png?alt=media";
const Login = ({ navigation }) => {
  return (
    <Container>
      <Image url={URL} imageStyle={{ borderRadius: 8 }} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </Container>
  );
};

export default Login;

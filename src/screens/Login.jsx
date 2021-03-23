import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Button, Keyboard } from "react-native";
import { Image, Input } from "../components";
import images from "../utils/images";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({  theme  }) => theme.background};
  padding: 20px;
`;
const URL =
  "https://firebasestorage.googleapis.com/v0/b/react-native-simple-chat-3dc07.appspot.com/o/logo.png?alt=media";
const Login=({navigation}) => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const passwordRef=useRef();
  

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1}}
      extraScrollHeight={20}
    >
    <Container>
      <Image url={URL} imageStyle={{borderRadius: 8}} />
      <Input
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        onSubmitEditing={() => {}}
        placeholder="Password"
        returnKeyType="done"
        isPassword
      />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </Container>
      </KeyboardAwareScrollView>
  );
};

export default Login;

import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Keyboard } from "react-native";
import { Image, Input, Button } from "../components";
import images from "../utils/images";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({  theme  }) => theme.background};
  padding: 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const URL =
  "https://firebasestorage.googleapis.com/v0/b/react-native-simple-chat-3dc07.appspot.com/o/logo.png?alt=media";


const Login=({navigation}) => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const passwordRef=useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "Please verify your email."
    );
  };
  const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
  };

  const _handleLoginButtonPress=() => {};

  
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
        onChangeText={_handleEmailChange}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={_handlePasswordChange}
        onSubmitEditing={_handleLoginButtonPress}
        placeholder="Password"
        returnKeyType="done"
        isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="Login" onPress={_handleLoginButtonPress} />
        <Button
          title="Sign up with Email"
          onPress={() => navigation.navigate('Signup')}
          isFilled={false}
        />
      </Container>
      </KeyboardAwareScrollView>
  );
};

export default Login;
//<Button title="Signup" onPress={() => navigation.navigate("Signup")} />
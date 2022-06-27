import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "../styles.js";
import SwitchSelector from "react-native-switch-selector";
import Business from '../../objects/Business.js';
import Product from '../../objects/Product.js';

export default function App({navigation}) { // Passing the screen the navigation container so it can naigate to other screens.
  const selectorOptions =[
    {label: "Sello", value: "sello"},
    {label: "Business", value: "business"},
  ]
  const[userType, setUserType] = useState(selectorOptions[0].value); // This is an async task, the value may not be updated right away.
  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the text input border on web. Cannot be in a stylesheet.
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[loginValid, setLoginValid] = useState(true); // if false, then tell user login is invalid

  const keypress = e => {
    if (e.keyCode === 13) {
      login();
    }
  };

  async function login() {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    };

    const response = await fetch("http://selloapi.com/login", options);
    if (response.ok) {
      // - - - - MOCK DATA, REMOVE ONCE ACCOUNT GET IS COMPLETE - - - -
      let prodList = [];
      for (let i = 0; i < 10; i++) {
        let prodObj = new Product("Prod Test" + i, "Bus", ["f"], "Test of product", "https://reactnative.dev/img/tiny_logo.png", Date.now(), Date.now());
        prodList[i] = prodObj;
      }
      let businessObj = new Business("Test", "Handle", "Addr", email, "https://reactnative.dev/img/tiny_logo.png", Date.now(), Date.now(), 5, prodList, "???");
      // - - - - END OF MOCK DATA - - - -
      navigation.navigate("Profile", {userType, businessObj});
      
    } else {
      setLoginValid(false);
      setPassword('');
    }
	}

  return (
    <View style={forms.container}>
      <Text style={styles.title}>Sello</Text>
      <View style={styles.login}>
        <View style={forms.slider}>
          <Text>What type of user are you?</Text>
          <SwitchSelector
            options={selectorOptions}
            inital={0}
            onPress={value => setUserType(value)}
            buttonColor={"#AAA"}
            borderColor={"#000"}
            style={{width:200, paddingTop: 10}}
            hasPadding
          />
        </View>
        { !loginValid && (
          <View style={forms.slider}>
            <Text style={{color: "red"}}>Invalid email or password. Please try again.</Text>
          </View>
        )}
        <View style={forms.input}>
          <TextInput
            placeholder="Email"
            style={textInputStyle}
            onChangeText={val => setEmail(val)}
            onKeyPress={keypress}
          />
        </View>
        <View style={forms.input}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={textInputStyle}
            onChangeText={val => setPassword(val)}
            onKeyPress={keypress}
          />
        </View>
      </View>
      <View style={[forms.button, {marginBottom: 40}]}>
        <Button
          title="Login"
          onPress={() => login()}
        />
      </View>
      <View>
        <Text>Don't have an account?</Text>
        <View style={forms.button}>
          <Button
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

/*
TODO: Fix this function not working

validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    this.setState({ email: text })
    return false;
  }
  else {
    this.setState({ email: text })
    console.log("Email is Correct");
  }
}*/
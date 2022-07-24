import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "../styles.js";
import SwitchSelector from "react-native-switch-selector";
import { url } from '../../components/request.js';
import * as SecureStore from 'expo-secure-store';

export default function App({navigation}) { // Passing the screen the navigation container so it can naigate to other screens.
  const selectorOptions =[
    {label: "Sello", value: "sello"},
    {label: "Business", value: "business"},
  ]
  const[userType, setUserType] = useState(selectorOptions[0].value); // This is an async task, the value may not be updated right away.
  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the text input border on web. Cannot be in a stylesheet.
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[loginValid, setLoginValid] = useState(true); // if false, then tell user login is invalid
  const isAutoLogging = useRef(true); // Is the program in the process of trying to auto log user

  // Attempt to auto login
  useEffect(() => {
    if (Platform.OS !== 'web') {
      autoLogin("acc_creds");
    } else {
      isAutoLogging.current = false;
    }
  }, []);

  // Starts attempting to automatically login with email and password filled
  // This function will be called 3 times before finally calling LoginEvent()
  // because it's calling while in empty state, email state, and password state
  useEffect(() => {
    if (isAutoLogging.current) {
      if (email == "" || password == "") {
        return;
      } else {
        isAutoLogging.current = false;
      }
      LoginEvent();
    }
  }, [email, password]);

  // Detect 'Enter' keypress to login
  const keypress = e => {
    if (e.keyCode === 13) {
      LoginEvent();
    }
  };

  // Attempts to login automatically if login info exists locally
  async function autoLogin(key) {
    let result = await getCredentials(key);
    if (result) {
      let json = JSON.parse(result);
      setEmail(json['email']);
      setPassword(json['password']);
    } else {
      // No credentials found, don't continue auto logging
      isAutoLogging.current = false;
    }
  };

  // Stores the account credentials in the user's storage locally and is encrypted
  async function saveCredentials(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  // Removes the account credentials from the user's storage locally
  async function removeCredentials(key) {
    await SecureStore.deleteItemAsync(key);
  }

  async function getCredentials(key) {
    return SecureStore.getItemAsync(key);
  }

  async function LoginEvent() {
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

    fetch(url + "login", options)
      .then(response => response.json())
      .then(data => {
        if (data['error']) {
          // Unsuccessful login
          setLoginValid(false);
          setPassword('');
        } else {
          // Successful login
          const authToken = data['token'];
          const account = data['data'];
          
          if (Platform.OS !== 'web') {
            // Save login credentials automatically
            // if using iOS or android
            let credJson = JSON.stringify({
              email: email,
              password: password
            });
            saveCredentials("acc_creds", credJson);
            //removeCredentials("acc_creds");
          }
          navigation.navigate("Profile", {userType, authToken, account});
        }
      })
      .catch((error) => {
        setLoginValid(false);
        setPassword('');
        console.log(error);
      });
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
          onPress={() => LoginEvent()}
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
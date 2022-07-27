import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from "react";
import { Platform, Text, View, TextInput, Button } from 'react-native';
import { styles, forms } from "../styles.js";
import { url } from '../../components/request.js';
import { saveCredentials, removeCredentials, getCredentials } from '../../components/localStorage.js';

export default function App({navigation}) { // Passing the screen the navigation container so it can navigate to other screens.
  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the text input border on web. Cannot be in a stylesheet.
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[loginValid, setLoginValid] = useState(true); // if false, then tell user login is invalid
  const isAutoLogging = useRef(true); // Is the program in the process of trying to auto log user

  // Attempt to auto login if device is not web
  // TODO: Figure out auto logging for web browser using cookies
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
          navigation.navigate("Profile", {authToken, account});
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
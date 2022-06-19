import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "./styles.js";
import SwitchSelector from "react-native-switch-selector"

export default function App({route, navigation}) { // Passing the screen the navigation container so it can naigate to other screens.

  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the textinput border on web. Cannot be in a stylesheet.
  const[password, setPassword] = useState();

  async function ResetEvent(){
    const data = {
        password:password,
    };
    const options = {
        method: 'POST',
        mode: 'cors',
        cache:'no-cache',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log(options.body)
    const response = await fetch("http://selloapi.com/resetpassword", options);
    if(response.ok){
        let json = await response.json();
        alert(response.status);
    }
    else{
        alert("HTTP-Error: " + response.status);
    }
  }

  return (
  <View style={forms.container}>
    <Text style={styles.title}>Reset Password</Text>
    <View style={forms.input}>
        <TextInput
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={val => setPassword(val)}
            secureTextEntry={true}
            style={textInputStyle}
        />
    </View>
    <View style={forms.button}>
        <Button
          title="Reset"
          onPress={() => ResetEvent()}
        />
    </View>
    <View style={forms.button}>
        <Button
          title="Log in"
          onPress={() => navigation.navigate("Login")}
        />
    </View>
    <StatusBar style="auto" />
  </View>
  );
}
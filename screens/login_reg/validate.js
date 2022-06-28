import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "../styles.js";

export default function App({navigation}) { // Passing the screen the navigation container so it can naigate to other screens.

  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the textinput border on web. Cannot be in a stylesheet.
  const[key, setKey] = useState(); 

  async function test(){
    const data = {
        key: key,
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
    const response = await fetch("http://selloapi.com/validatetoken", options);
    if(response.ok){
        let json = await response.json();
        navigation.navigate("Reset", data);
    }
    else{
        alert("HTTP-Error: " + response.status);
    }
  }

  return (
  <View style={forms.container}>
    <Text style={styles.title}>Enter Token</Text>
    <View style={forms.input}>
        <TextInput
          placeholder="0,1,2,a,b,c..."
          style={textInputStyle}
          onChangeText={val => setKey(val)}
        />
    </View>
    <View style={forms.button}>
        <Button
          title="Validate"
          onPress={() => test()}
        />
    </View>
    <StatusBar style="auto" />
  </View>
  );
}
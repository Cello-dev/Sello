import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "../styles.js";
import SwitchSelector from "react-native-switch-selector"

export default function App({navigation}) { // Passing the screen the navigation container so it can naigate to other screens.
  const selectorOptions =[
    {label: "Sello", value: "sello"},
    {label: "Business", value: "business"},
  ]
  const[email, setEmail] = useState();
	const[password, setPassword] = useState();
  const[userType, setUserType] = useState(selectorOptions[0].value); // This is an asych task, the value may not be updated right away.

  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the textinput border on web. Cannot be in a stylesheet.

  async function LoginEvent(){
		const data = {
			email:email,
			password:password
		};
		const options = {
			method: 'POST',
			cache:'no-cache',
			headers: {
        'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body: JSON.stringify(data)
		};
		const response = await fetch("http://selloapi.com/login", options);
		if(response.ok){
			let json = await response.json();
      if(response.ok){
        navigation.navigate("Home", json)
      }
      else{
        alert("HTTP-Error: " + response.status);
      }
		}
		else{
			alert("HTTP-Error: " + response.status);
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
      <View style={forms.input}>
        <TextInput
          placeholder="Email"
          style={textInputStyle}
          onChangeText={val => setEmail(val)}
        />
      </View>
      <View style={forms.input}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={textInputStyle}
          onChangeText={val => setPassword(val)}
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
    <View>
      <Text>Forgot your password?</Text>
      <View style={forms.button}>
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate("Forgot")}
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
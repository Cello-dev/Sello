import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "../styles.js";

export default function App() {
  const[isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={forms.container}>
      <Text style={styles.title}>Sello</Text>
        <Text>Sello Business</Text>
          <Switch 
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        <View style={styles.login}>
          <View style={forms.input}>
            <TextInput
              placeholder="Email"
            />
          </View>
          <View style={forms.input}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
         
        </View>
        <View style={[forms.button, {marginBottom: 40}]}>
          <Button
            title="Login"
            onPress={() => Alert.alert('OOPS! Login User Not Implemented Yet')}
          />
        </View>
        <View>
          <Text>Don't have an account?</Text>
          <View style={forms.button}>
            <Button
              title="Register"
              onPress={() => Alert.alert('OOPS! Register User Not Implemented Yet')}
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
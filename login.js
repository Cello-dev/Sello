import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

export default function App() {
  const[isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Sello</Text>
        <Text>Sello Business</Text>
          <Switch 
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        <View style = {styles.login}>
          <View style = {styles.input}>
            <TextInput
              placeholder = "Email"
            />
          </View>
          <View style = {styles.input}>
            <TextInput
              placeholder = "Password" secureTextEntry={true}
            />
          </View>
         
        </View>
        <View style ={styles.enterButtons}>
          <Button
          title="Login"
          onPress={() => Alert.alert('OOPS! Login User Not Implemented Yet')}
            />
      
          <Button
            title="Register"
            onPress={() => Alert.alert('OOPS! Register User Not Implemented Yet')}
          />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    padding : 10,
    marginTop: 15,
    paddingHorizontal:70,
    backgroundColor: "#bbb",
    width: Dimensions.get("window").width
  },
  title: {
    fontWeight: 'bold',
    fontSize: 68,
    paddingBottom:120 ,
  },
  input: {
    paddingBottom: 10,
    paddingTop:10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  enterButtons: {
    paddingTop: 10,
    paddingBottom:15,
    paddingHorizontal:20,
  },

});

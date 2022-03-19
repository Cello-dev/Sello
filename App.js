import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View} from 'react-native';
import Login from "./screens/login_reg/login";

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
    if(!isLoggedIn){
      return (    
      <View style={styles.container}>
        <Login/>
      </View>
      );
    }
    else if (isLoggedIn) {
      // bring user directly to their account dashboard
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

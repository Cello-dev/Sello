import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View} from 'react-native';
import Login from "./screens/login_reg/login";
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

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
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:"center",
  justifyContent:"center",
}
});

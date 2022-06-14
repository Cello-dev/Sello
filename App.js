import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Login from "./screens/login_reg/login";
import Register from './screens/login_reg/register';
import Home from './screens/login_reg/home';

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const Stack = createNativeStackNavigator();

  const KeyboardDismisser = () => {
    if (Platform.OS !== 'web'){
      Keyboard.dismiss()
    }
  }

    if(!isLoggedIn){
      return (
      <TouchableWithoutFeedback onPress={() => KeyboardDismisser()}>
          <View style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ title: '' }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{ title: '' }}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ title: '' }}
                />
              </Stack.Navigator>
            </NavigationContainer>  
          </View>
        </TouchableWithoutFeedback>
      );
    }
    else if (isLoggedIn) {
      // bring user directly to their account dashboard
    }
}
// Removed alignItems: "center" because it interferes with rendering of the Stack.container.
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
  }
});

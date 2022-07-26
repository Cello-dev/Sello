import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StyleSheet, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Login from "./screens/login_reg/Login";
import Register from './screens/login_reg/Register';
import Profile from './screens/profile/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  const KeyboardDismisser = () => {
    if (Platform.OS !== 'web'){
      Keyboard.dismiss()
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => KeyboardDismisser()}>
      <View style={style.container}>
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
              name="Profile"
              component={Profile}
              options={{ title: '' }}
            />
          </Stack.Navigator>
        </NavigationContainer>  
      </View>
    </TouchableWithoutFeedback>
  );
}

// Removed alignItems: "center" because it interferes with rendering of the Stack.container.
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
  }
});

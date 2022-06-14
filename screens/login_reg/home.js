import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Switch, TextInput, Button, Alert, Dimensions} from 'react-native';
import { styles, forms } from "./styles.js";
import SwitchSelector from "react-native-switch-selector"

export default function App({route, navigation}) { // Passing the screen the navigation container so it can naigate to other screens.
  const selectorOptions =[
    {label: "Sello", value: "sello"},
    {label: "Business", value: "business"},
  ]
 
  const textInputStyle = {...Platform.select({web:{outline:'none'}})}// // This hides the textinput border on web. Cannot be in a stylesheet.
  
  return (
  <View style={forms.container}>
    <Text style={styles.title}>Welcome to Sello {route.params["handle"]}!</Text>
    <Text>{JSON.stringify(route.params)}</Text>
    <StatusBar style="auto" />
  </View>
  );
}
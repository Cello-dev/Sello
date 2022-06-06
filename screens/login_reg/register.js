import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import { styles, forms } from "./styles.js";
import SwitchSelector from "react-native-switch-selector"

export default function Register({navigation}) { // Passing the screen the navigation container so it can naigate to other screens.
	const[email, setEmail] = useState();
	const[password, setPassword] = useState();
	const[phone, setPhone] = useState();
	const[brandName, setBrandName] = useState();
	const[brandDesc, setBrandDesc] = useState();
	const[industry, setIndustry] = useState();
	const selectorOptions =[
		{label: "Sello", value: "sello"},
		{label: "Business", value: "business"},
	  ]
	const[userType, setUserType] = useState(selectorOptions[0].value); // This is an asych task, the value may not be updated right away.

	return (
		<View style={forms.container}>
			<Text style={styles.title}>Register</Text>
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
						autoCapitalize="none"
						onChangeText={val => setEmail(val)}
						multiline={false}
					/>
				</View>
				<View style={forms.input}>
					<TextInput
						placeholder="Password"
						autoCapitalize="none"
						onChangeText={val => setPassword(val)}
						secureTextEntry={true}
					/>
				</View>
				<View style={forms.input}>
					<TextInput
						placeholder="Phone Number"
						autoCapitalize="none"
						onChangeText={val => setPhone(val)}
					/>
				</View>
				<View style={forms.input}>
					<TextInput
						placeholder="Brand Name"
						autoCapitalize="none"
						onChangeText={val => setBrandName(val)}
					/>
				</View>
				<View style={forms.input}>
					<TextInput
						placeholder="Brand Description"
						autoCapitalize="none"
						onChangeText={val => setBrandDesc(val)}
					/>
				</View>
				<View style={forms.input}>
					<TextInput
						placeholder="Industry Type"
						autoCapitalize="none"
						onChangeText={val => setIndustry(val)}
					/>
				</View>
			</View>
			<View style={forms.submit}>
				<Button
					title="Register"
					// onPress={() => Alert.alert("Submitted reigster")}
					onPress={() => console.log(userType)}
					//when the button is pressed, we have to check to see what state the switch is in
					//based on the state, certain fields should be checked if they are
				/>
			</View>
		</View>
	);
}
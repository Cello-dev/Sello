import React, { useState } from "react";
import { Text, View } from 'react-native';
import { Alert, Button, TextInput } from "react-native-web";

export default function Register() {
	const[email, setEmail] = useState();
	const[password, setPassword] = useState();
	const[phone, setPhone] = useState();
	const[brandName, setBrandName] = useState();
	const[brandDesc, setBrandDesc] = useState();
	const[industry, setIndustry] = useState();

	return (
		<View>
			<Text>Register</Text>
			<TextInput
				placeholder="Email"
				autoCapitalize="none"
				onChangeText={val => setEmail(val)}
			/>
			<TextInput
				placeholder="Password"
				autoCapitalize="none"
				onChangeText={val => setPassword(val)}
				secureTextEntry={true}
			/>
			<TextInput
				placeholder="Phone Number"
				autoCapitalize="none"
				onChangeText={val => setPhone(val)}
			/>
			<TextInput
				placeholder="Brand Name"
				autoCapitalize="none"
				onChangeText={val => setBrandName(val)}
			/>
			<TextInput
				placeholder="Brand Description"
				autoCapitalize="none"
				onChangeText={val => setBrandDesc(val)}
			/>
			<TextInput
				placeholder="Industry Type"
				autoCapitalize="none"
				onChangeText={val => setIndustry(val)}
			/>
			<Button
				title="Register"
				onPress={() => Alert.alert("Submitted reigster")}
			/>
		</View>
	);
}
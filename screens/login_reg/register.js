import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import { styles, forms } from "../styles.js";

export default function Register() {
	const[email, setEmail] = useState();
	const[password, setPassword] = useState();
	const[phone, setPhone] = useState();
	const[brandName, setBrandName] = useState();
	const[brandDesc, setBrandDesc] = useState();
	const[industry, setIndustry] = useState();

	return (
		<View>
			<Text style={styles.title}>Register</Text>
			<View style={styles.login}>
				<View style={forms.input}>
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						onChangeText={val => setEmail(val)}
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
					onPress={() => Alert.alert("Submitted reigster")}
				/>
			</View>
		</View>
	);
}
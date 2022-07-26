import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { styles } from "../styles.js";
import Business from "../../objects/Business.js";
import { url } from "../../components/request.js";
import { ProductComponent } from "../../components/product.js";

export default function Profile({route, navigation}) {
	const userType = route.params['userType'];
	const authToken = route.params['authToken'];
	const account = route.params['account'];

	const [businessObj, setBusinessObj] = useState();
	const [isLoading, setLoading] = useState(true); // Keeps page in loading state until the account data is retrieved

	// Calls this function once on load time
	// Without useEffect and empty array, AccountEvent() would
	// be calling infintiely because of useState
	useEffect(() => {
		AccountEvent();
	}, []);

	// Gets the account passed in by the route params
	// Requires: auth token and account
	async function AccountEvent() {
		const options = {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': "Token " + authToken
			}
		}

		fetch(url + "account/" + account['id'], options)
			.then(response => response.json())
			.then(data => {
				let obj = new Business(data['name'], data['handle'], 'Address', data['email'], data['avatar_url'], data['date_joined'], data['date_joined'], 0, []);
				setBusinessObj(obj);
				setLoading(false);
			})
			.catch((error) => {
				// TODO: Tell user there is a problem getting this account
				console.log(error);
			});

	}

	return (
		<View style={styles.container}>
			{ isLoading && <Text>Loading...</Text> }
			{ typeof businessObj != "undefined" && (
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Image
							style={styles.logo}
							source={
								{uri: businessObj.getAvatar}
							}
						/>
						<Text style={s.businessName}>{businessObj.getName}</Text>
						<Text style={s.businessTag}>{businessObj.getHandle}</Text>
						<FlatList
							contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
							data={businessObj.getProductList}
							numColumns={2}
							renderItem={ProductComponent}
							keyExtractor={(item) => item['name']}
						/>
					</View>
			)}
		</View>
	);
}

const s = StyleSheet.create({
	businessName: {
		fontSize: 40,
		padding: 10,
		margin: 5
	},
	businessImage: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	businessTag: {
		fontSize: 18,
	}
});
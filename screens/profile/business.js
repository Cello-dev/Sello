import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { styles } from "../styles.js";
const Product = require("../../objects/Product");

export default function Business() {

	// MOCK DATA - Remove after fetch api is complete
	let productArr = [];
	let item;
	for (let i = 0; i < 8; i++) {
		item = {
			"name": "Product-" + i,
			"business": "Business-" + i,
			"tag": "Tag-" + i,
			"desc": "Desc-" + i,
			"img": "https://reactnative.dev/img/tiny_logo.png"
		};
		productArr.push(item);
	}
	// end of MOCK DATA

	// Keeps page in loading state until fetch api is complete
	// TODO: Change useState from false to true after fetch api is added
	const [isLoading, setLoading] = useState(false);
	// TODO: Fetch API to get business data and display on screen
	const [data, setData] = useState(productArr);

	//function productComponent(name, business, tag, desc, img) {
	function productComponent({item}) {
		const product = new Product(item['name'], item['business'], item['tag'], item['desc'], item['img']);
		return (
			<View key={product.getName} style={s.item}>
				<Text>{product.getName}</Text>
				<Image
					style={s.image}
					source={
						{uri: product.getimgURL}
					}
				/>
			</View>
		)
	}

	return (
		<View>
			{ isLoading && <Text>Loading...</Text> }
			{ data.length > 0 && (
					<View style={styles.container}>
						<Image
							style={styles.logo}
							source={
								{uri: "https://reactnative.dev/img/tiny_logo.png"}
							}
						/>
						<Text style={s.name}>Business Name</Text>
						<FlatList
							data={data}
							numColumns={2}
							renderItem={productComponent}
							keyExtractor={(item) => item['name']}	
						/>
					</View>
			)}
		</View>
	);
}

const s = StyleSheet.create({
	name: {
		fontSize: 40,
		padding: 10,
		margin: 20
	},
	image: {
		width: 50,
		height: 50
	},
	item: {
		margin: 5
	}
});
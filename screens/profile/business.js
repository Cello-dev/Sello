import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { styles } from "../styles.js";
const Product = require("../../objects/Product");

export default function Business() {

	// - - - - - -  MOCK DATA - Remove after fetch api is implemented
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
	// - - - - - - end of MOCK DATA - - - - - -

	// Keeps page in loading state until fetch api is complete
	// TODO: Change useState from false to true after fetch api is added
	const [isLoading, setLoading] = useState(false);
	// TODO: Fetch API to get business data and display on screen
	const [data, setData] = useState(productArr);

	function productComponent({item}) {
		const product = new Product(item['name'], item['business'], item['tag'], item['desc'], item['img']);
		return (
			<View key={product.getName} style={s.item}>
				<Text style={s.productName}>{product.getName}</Text>
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
		<View style={styles.container}>
			{ isLoading && <Text>Loading...</Text> }
			{ data.length > 0 && (
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Image
							style={styles.logo}
							source={
								{uri: "https://reactnative.dev/img/tiny_logo.png"}
							}
						/>
						<Text style={s.businessName}>Business Name</Text>
						<Text style={s.businessTag}>Business Tag</Text>
						<FlatList
							contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
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
	},
	productName: {
		fontSize: 20,
		textAlign: 'center'
	},
	image: {
		width: 100,
		height: 100
	},
	item: {
		margin: 20
	}
});
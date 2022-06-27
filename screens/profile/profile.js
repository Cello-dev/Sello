import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { styles } from "../styles.js";
const Product = require("../../objects/Product");

export default function Profile({route, navigation}) {
	const businessObj = route.params['businessObj'];
	const userType = route.params['userType'];
	// Keeps page in loading state until fetch api is complete
	// TODO: Change useState from false to true after fetch api is added
	const [isLoading, setLoading] = useState(false);

	// create product component for each item
	function productComponent({item}) {
		return (
			<View key={item.getName} style={s.item}>
				<Text style={s.productName}>{item.getName}</Text>
				<Image
					style={s.image}
					source={
						{uri: item.getImgUrl}
					}
				/>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			{ isLoading && <Text>Loading...</Text> }
			{ typeof businessObj != "undefined" && (
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Image
							style={styles.logo}
							source={
								{uri: businessObj.getImgUrl}
							}
						/>
						<Text style={s.businessName}>{businessObj.getName}</Text>
						<Text style={s.businessTag}>{businessObj.getHandle}</Text>
						<FlatList
							contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
							data={businessObj.getProductList}
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
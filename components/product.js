import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProductComponent({item}) {
  return (
    <View key={item.getName} style={style.item}>
      <Text style={style.name}>{item.getName}</Text>
      <Image
        style={style.image}
        source={
          {uri: item.getImgUrl}
				}
      />
    </View>
  )
}

const style = StyleSheet.create({
  name: {
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

export { ProductComponent }
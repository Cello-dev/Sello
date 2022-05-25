import { StyleSheet } from "react-native";

const forms = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  },
  submit: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginHorizontal: 75
  }
});

const styles = StyleSheet.create({
  login: {
    padding : 10,
    marginTop: 15,
    paddingHorizontal:70,
    //backgroundColor: "#bbb",
    //width: Dimensions.get("window").width
  },
  title: {
    fontWeight: 'bold',
    fontSize: 68,
    paddingBottom: 40,
    textAlign: 'center'
  },
});

export { forms, styles }
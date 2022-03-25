import { StyleSheet } from "react-native";

const forms = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingHorizontal: 20
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
  logo: {
    width: 66,
    height: 58
  }
});

export { forms, styles }
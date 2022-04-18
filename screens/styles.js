import { StyleSheet } from "react-native";

const forms = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 68,
    paddingBottom: 40,
    textAlign: 'center'
  },
  logo: {
    width: 100,//66,
    height: 100, //58,
    borderRadius: 50,
    margin: 20
  }
});

export { forms, styles }
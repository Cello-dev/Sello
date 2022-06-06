import { StyleSheet } from "react-native";

const forms = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  submit: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginHorizontal: 75
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
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
    textAlign: 'center'
  },
});

export { forms, styles }
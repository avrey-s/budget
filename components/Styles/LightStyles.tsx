import { StyleSheet } from "react-native";

const LightStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  inputContainer: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: 300,
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonred: {
    marginTop: 20,
    width: 300,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonblue: {
    marginTop: 20,
    width: 300,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  registerButton: {
    marginTop: 10,
    width: 150,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
  },
  sectionContainer: {
    marginBottom: 5,
  },
  transactionContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },

  newTransactionContainer: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dateBox: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  newTransaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "40%",
  },

  costBox: {
    width: "60%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  posNegBox: {
    width: "40%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  descriptionBox: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default LightStyles;

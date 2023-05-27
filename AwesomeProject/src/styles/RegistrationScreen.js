import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    position: "relative",
  },
  registrationContainer: {
    flex: 1,
    position: "absolute",
    transform: [{ translateX: -200 }, { translateY: 210 }],
    width: 400,
    height: 600,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ translateX: 140 }, { translateY: -60 }],
    width: 120,
    height: 120,
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addImgPng: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  registerTitle: {
    fontFamily: "RobotoMedium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    width: 343,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    alignSelf: "center",
    fontFamily: "RobotoRegular",
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  gap: {
    height: 16,
  },
  passwordInputContainer: {
    position: "relative",
  },
  showButton: {
    position: "absolute",
    top: 21,
    right: 25,
  },
  showButtonText: {
    fontFamily: "RobotoRegular",
    color: "#1B4371",
  },
  button: {
    width: 344,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  textNavRegister: {
    fontFamily: "RobotoRegular",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  textRvegister: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});

export default styles;

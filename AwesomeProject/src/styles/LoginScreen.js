import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formBox: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 315,
    width: 400,
    height: 548,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 432,
    height: 932,
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  formTitle: {
    marginBottom: 32,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#212121",
    letterSpacing: 0.3,
  },
  gap: {
    height: 16,
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
  passwordInputContainer: {
    position: "relative",
    marginBottom: 48,
  },
  showButton: {
    position: "absolute",
    top: 21,
    right: 20,
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

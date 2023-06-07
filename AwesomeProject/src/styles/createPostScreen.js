import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: "solid",
    borderTopWidth: 1,

    backgroundColor: "#FFFFFF",
    borderTopColor: "#EEE",
  },
  scrollContainer: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  camera: {
    position: "relative",
    height: 240,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F6F6F6",
  },

  pictureContainer: {
    height: 240,
    width: "100%",
    borderRadius: 8,

    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },

  addPictureBtn: {
    position: "absolute",
    top: 90,
    left: "42%",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 1,

    backgroundColor: "#FFFFFF",
  },
  addPictureBtnTr: {
    position: "absolute",
    top: 90,
    left: "42%",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 1,

    backgroundColor: " rgba(255, 255, 255, 0.3);",
  },

  editPicture: {
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 48,
  },

  inputName: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 32,
  },

  inputPlace: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingLeft: 28,
    marginBottom: 32,
  },

  placeIcon: {
    position: "absolute",
    top: 3,
  },

  removeContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 62,
  },

  removeBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
  },

  buttonPost: {
    alignItems: "center",
    padding: 16,
    width: "100%",
    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  buttonActive: {
    alignItems: "center",
    padding: 16,
    width: "100%",
    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
  },

  textPost: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  textActive: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

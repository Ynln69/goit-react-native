import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  scrollContainer: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userPictureContainer: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  addedPicture: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  addPictureBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
  },
  addPictureBtnTr: {
    position: "absolute",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,

    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  editPicturePrg: {
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 48,
  },
  placeNameInput: {
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 32,

    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },
  placeInput: {
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingLeft: 28,
    marginBottom: 32,

    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },
  placeIcon: {
    position: "absolute",
    top: 3,
  },
  removeContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  removeBtn: {
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,

    backgroundColor: "#F6F6F6",
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  photoView: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "transparent",
  },
  flipContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 15,
  },
});

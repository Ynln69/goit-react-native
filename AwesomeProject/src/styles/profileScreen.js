import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  formContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: 600,
    marginTop: 147,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 92,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",

    backgroundColor: "#ffffff",
  },
  exit: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  imgContainer: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,

    position: "absolute",
    top: -60,
  },
  addPhoto: {
    position: "absolute",
    right: -13,
    bottom: 14,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,

    backgroundColor: "#fff",
  },
  formText: {
    backgroundColor: "#fff",
  },
  titleName: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },
  pictureContainer: {
    marginBottom: 32,
    width: "100%",
  },
  addedPicture: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  nameImg: {
    marginTop: 8,
    marginBottom: 10,

    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 16,
    fontWeight: "700",
  },
  numberComments: {
    marginLeft: 5,
    marginRight: 25,

    fontSize: 16,
    color: "#212121",
  },
  desc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments: {
    display: "flex",
    flexDirection: "row",
  },
  place: {
    display: "flex",
    flexDirection: "row",
  },
});

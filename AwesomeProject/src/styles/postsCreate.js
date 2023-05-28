import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 32,
  },
  userPhotoBox: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  userNameBox: {
    justifyContent: "center",
  },
  userName: {
    fontFamily: "RobotoMedium",
    fontSize: 16,
    fontWeight: "700",
    color: "#212121",
  },
  userEmail: {
    fontFamily: "RobotoRegular",
    fontSize: 13,
    color: "#212121",
    fontWeight: "400",
  },
  userPictureBox: {
    marginBottom: 32,
  },
  addPicture: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  pictureName: {
    fontFamily: "RobotoMedium",
    fontSize: 16,
    fontWeight: "700",
    color: "#212121",

    marginTop: 8,
    marginBottom: 10,
  },
  comments: {
    color: "#BDBDBD",
  },
  descriptionImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsImg: {
    display: "flex",
    flexDirection: "row",
  },
  placeImg: {
    display: "flex",
    flexDirection: "row",
  },
});

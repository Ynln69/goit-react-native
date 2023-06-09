import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    borderStyle: "solid",
    borderTopColor: "#EEE",
    borderTopWidth: 1,

    backgroundColor: "#FFFFFF",
  },
  container: {
    display: "flex",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "flex-end",
  },
  userImgContainer: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  userPicture: {
    width: "100%",
    height: "100%",
    borderRadius: 8,

    backgroundColor: "#E8E8E8",
  },
  userCommentIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 16,
  },
  commentsBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  accountText: {
    width: "100%",
    flexShrink: 1,
    padding: 16,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,

    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  commentIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 16,
  },
  commentsText: {
    flexShrink: 1,
    width: "100%",
    padding: 16,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,

    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  userMessage: {
    marginBottom: 8,

    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },
  dateMessage: {
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
  },
  commentInput: {
    width: "100%",
    height: 50,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 32,
    padding: 16,

    backgroundColor: "#F6F6F6",
  },
  sendBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FF6C00",
  },
});

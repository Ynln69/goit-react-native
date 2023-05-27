import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
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
});

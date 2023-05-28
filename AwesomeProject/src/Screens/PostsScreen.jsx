import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/postsCreate";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userPhotoBox}>
          <Image
            source={require("../../assets/images/user.jpg")}
            style={styles.userPhoto}
          />
        </View>
        <View style={styles.userNameBox}>
          <Text style={styles.userName}>Name</Text>
          <Text style={styles.userEmail}>Email</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default PostsScreen;

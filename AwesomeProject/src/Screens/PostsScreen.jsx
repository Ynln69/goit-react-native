import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/PostsScreen";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const PostsScreen = ({ photo }) => {
  const navigation = useNavigation();
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

      <View style={styles.userPictureContainer}>
        <Image style={styles.userAddedPicture} source={photo} />
        <View>
          <Text style={styles.pictureName}>Forest</Text>
          <View style={styles.pictureDescription}>
            <View style={styles.pictureComments}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Коментарі");
                }}
              >
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={styles.numberComments}>15</Text>
            </View>
            <TouchableOpacity
              style={styles.picturePlace}
              onPress={() => {
                navigation.navigate("Map");
              }}
            >
              <MaterialIcons name="place" size={24} color="#BDBDBD" />
              <Text>Ukraine</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PostsScreen;

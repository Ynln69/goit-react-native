import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectUser, selectPosts } from "../redux/selectors";
import { styles } from "../styles/postsScreen";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const PostsScreen = () => {
  const navigation = useNavigation();
  const { name, email } = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  const navigateToComments = (post) => {
    navigation.navigate("Коментарі", { post });
  };

  const navigateToMap = (geo) => {
    navigation.navigate("Map", { geo });
  };

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
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>
      {posts.map((post, index) => (
        <View
          style={styles.userPictureContainer}
          key={`${post.picture}-${index}`}
        >
          <Image
            style={styles.userAddedPicture}
            source={{ uri: post.picture }}
          />
          <View>
            <Text style={styles.pictureName}>{post.title}</Text>
            <View style={styles.pictureDescription}>
              <View style={styles.pictureComments}>
                <TouchableOpacity onPress={() => navigateToComments(post)}>
                  <EvilIcons name="comment" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <Text style={styles.numberComments}>
                  {post.comments.length}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.picturePlace}
                onPress={() => navigateToMap(post.geo)}
              >
                <MaterialIcons name="place" size={24} color="#BDBDBD" />
                <Text>{post.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default PostsScreen;

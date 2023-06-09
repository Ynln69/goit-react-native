import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, selectPosts } from "../redux/selectors";
import { logOut } from "../redux/operations";

import { styles } from "../styles/profileScreen";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  const handleExit = () => {
    dispatch(logOut()).then(() => navigation.navigate("Login"));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/photo-bg.jpg")}
        style={styles.bgImage}
      >
        <ScrollView>
          <View style={styles.formContainer}>
            <TouchableOpacity style={styles.exit} onPress={() => handleExit()}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <View style={styles.imgContainer}>
              <Image source={require("../../assets/images/profileImg.png")} />
              <TouchableOpacity style={styles.addPhoto}>
                <AntDesign name="close" size={18} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleName}>{user.name}</Text>

            {posts.length !== 0 &&
              posts.map((post, index) => {
                return (
                  <View
                    key={`${post.picture}-${index}`}
                    style={styles.pictureContainer}
                  >
                    <Image
                      source={{ uri: post.picture }}
                      style={styles.addedPicture}
                    />
                    <View>
                      <Text style={styles.nameImg}>{post.title}</Text>
                      <View style={styles.desc}>
                        <View style={styles.comments}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate("Коментарі", {
                                post,
                              });
                            }}
                          >
                            <FontAwesome
                              name="comment"
                              size={18}
                              color="#FF6C00"
                            />
                          </TouchableOpacity>
                          <Text style={styles.numberComments}>
                            {post.comments.length}
                          </Text>
                          <TouchableOpacity>
                            <AntDesign name="like1" size={20} color="#FF6C00" />
                          </TouchableOpacity>
                          <Text style={styles.numberComments}>0</Text>
                        </View>
                        <TouchableOpacity
                          style={styles.place}
                          onPress={() => {
                            navigation.navigate("Map", { geo: post.geo });
                          }}
                        >
                          <MaterialIcons
                            name="place"
                            size={24}
                            color="#BDBDBD"
                          />
                          <Text>{post.place}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

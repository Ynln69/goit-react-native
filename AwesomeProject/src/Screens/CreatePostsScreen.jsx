import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { addUserPost } from "../redux/operations";
import SumbitButton from "../Commponents/SubmitButton";
import { styles } from "../styles/createPostScreen";

const CreatePostsScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [post, setPost] = useState({
    picture: "",
    title: "",
    place: "",
    geo: null,
    comments: [],
    likes: 0,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    hendleGeoLocation();
  }, []);

  const hendleGeoLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setPost((prevPost) => {
      return {
        ...post,
        geo: coords,
      };
    });
  };

  const handleSubmitAddPost = async () => {
    try {
      await dispatch(addUserPost(post));

      setPost((prevState) => {
        return {
          picture: "",
          title: "",
          place: "",
          geo: null,
          comments: [],
          likes: 0,
        };
      });
      navigation.navigate("Публікації");
    } catch (error) {}
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "padding" : ""}
      >
        <ScrollView style={styles.scrollContainer}>
          {hasPermission === null || hasPermission === false ? (
            <View style={styles.userPictureContainer}>
              <Image style={styles.addedPicture} />
              <TouchableOpacity
                style={
                  post.picture ? styles.addPictureBtnTr : styles.addPictureBtn
                }
              >
                <MaterialIcons
                  name="photo-camera"
                  size={20}
                  color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
          ) : post.picture ? (
            <View style={styles.userPictureContainer}>
              <Image
                source={{ uri: post.picture }}
                style={styles.addedPicture}
              />
              <TouchableOpacity
                style={
                  post.picture ? styles.addPictureBtnTr : styles.addPictureBtn
                }
                onPress={() => {
                  setPost((prevPost) => {
                    return {
                      ...post,
                      picture: "",
                    };
                  });
                }}
              >
                <MaterialIcons
                  name="photo-camera"
                  size={20}
                  color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.userPictureContainer}>
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={
                      post.picture
                        ? styles.addPictureBtnTr
                        : styles.addPictureBtn
                    }
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        console.debug(uri);

                        setPost((prevPost) => {
                          return {
                            ...post,
                            picture: uri,
                          };
                        });
                      }
                    }}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={20}
                      color={post.picture ? "#FFFFFF" : "#BDBDBD"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <AntDesign name="retweet" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          )}
          <Text style={styles.editPicturePrg}>
            {post.picture ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <TextInput
            style={styles.placeNameInput}
            placeholder="Назва..."
            value={post.title}
            onChangeText={(e) => {
              setPost((prevPost) => {
                return {
                  ...post,
                  title: e,
                };
              });
            }}
          />
          <View>
            <TextInput
              style={styles.placeInput}
              placeholder="Місцевість..."
              value={post.place}
              onChangeText={(e) => {
                setPost((prevPost) => {
                  return {
                    ...post,
                    place: e,
                  };
                });
              }}
            />
            <MaterialIcons
              name="place"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
          </View>
          {post.picture && post.title && post.place ? (
            <SumbitButton
              title="Опубліковати"
              onPress={() => {
                handleSubmitAddPost();
              }}
            />
          ) : (
            <SumbitButton
              bgColor="#F6F6F6"
              textColor="#BDBDBD"
              title="Опубліковати"
              onPress={() => {
                Alert.alert("Заполніть усі поля");
              }}
            />
          )}
          <View style={styles.removeContainer}>
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => {
                setPost((prevPost) => {
                  return {
                    picture: "",
                    title: "",
                    place: "",
                  };
                });
              }}
            >
              <Feather name="trash-2" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

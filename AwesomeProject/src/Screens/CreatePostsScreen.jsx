import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
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
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { Permissions } from "expo-permissions";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "../styles/createPostScreen";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [postName, setPostName] = useState("");
  const [postPlace, setPostPlace] = useState("");
  const [location, setLocation] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPhoto(photo.uri);
  };

  const handlePublish = async () => {
    if (photo) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
      const post = {
        photo: photo,
        name: postName,
        place: postPlace,
        location: location,
      };
      console.log("Publishing post:", post);
      navigation.navigate("Публікації");
    } else {
      console.log("Error: No photo available.");
    }
  };

  const getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== "granted") {
      console.log("Error: Camera permission not granted");
    }
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "padding" : ""}
      >
        <ScrollView style={styles.scrollContainer}>
          <Camera style={styles.camera} ref={setCamera}>
            {photo && (
              <View style={styles.pictureContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 240, width: "100%" }}
                />
              </View>
            )}
            <TouchableOpacity
              style={photo ? styles.addPictureBtnTr : styles.addPictureBtn}
              onPress={takePhoto}
            >
              <MaterialIcons
                name="photo-camera"
                size={20}
                color={photo ? "#FFFFFF" : "#BDBDBD"}
              />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.editPicture}>
            {photo ? "Редагувати фото" : "Завантажити фото"}
          </Text>
          <TextInput
            style={styles.inputName}
            placeholder="Назва..."
            value={postName}
            onChangeText={setPostName}
          />
          <View>
            <TextInput
              style={styles.inputPlace}
              placeholder="Місцевість..."
              value={postPlace}
              onChangeText={setPostPlace}
            />
            <MaterialIcons
              name="place"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
          </View>
          <TouchableOpacity
            style={photo ? styles.buttonActive : styles.buttonPost}
            onPress={handlePublish}
          >
            <Text style={photo ? styles.textActive : styles.textPost}>
              Опубліковати
            </Text>
          </TouchableOpacity>
          <View style={styles.removeContainer}>
            <TouchableOpacity style={styles.removeBtn}>
              <Feather
                name="trash-2"
                size={24}
                color="#DADADA"
                onPress={() => {
                  setPhoto(null);
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

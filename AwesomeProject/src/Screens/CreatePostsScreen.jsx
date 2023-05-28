import { useNavigation } from "@react-navigation/native";
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
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "../styles/createPostScreen";

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "android" ? "padding" : ""}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.pictureContainer}>
            <Image style={styles.addPicture} />
            <TouchableOpacity style={styles.addPictureBtn}>
              <MaterialIcons name="photo-camera" size={20} color={"#FFFFFF"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.editPicture}>"Завантажити фото"</Text>
          <TextInput style={styles.inputPlaceName} placeholder="Назва..." />
          <View>
            <TextInput style={styles.inputPlace} placeholder="Місцевість..." />
            <MaterialIcons
              name="place"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
          </View>
          <TouchableOpacity style={styles.buttonPost}>
            <Text style={styles.text}>Опубліковати</Text>
          </TouchableOpacity>
          <View style={styles.removeContainer}>
            <TouchableOpacity style={styles.removeBtn}>
              <Feather name="trash-2" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

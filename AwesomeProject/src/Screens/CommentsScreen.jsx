import { useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectPosts } from "../redux/selectors";
import { addCommentToPost } from "../redux/operations";

import { styles } from "../styles/commentsScreen";

const CommentsScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { post } = route.params;

  const [commentText, setCommentText] = useState("");
  const user = useSelector(selectUser);
  const allPosts = useSelector(selectPosts);

  const handleSubmitComment = () => {
    const newComment = {
      postId: post.id,
      comment: {
        userName: user.name,
        text: commentText,
      },
    };
    dispatch(addCommentToPost(newComment));
    setCommentText("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View>
            <View style={styles.userImgContainer}>
              <Image
                source={{ uri: post.picture }}
                style={styles.userPicture}
              />
            </View>
          </View>
          {post.comments !== 0 &&
            post.comments.map(({ date, text, userName }) => {
              if (user.name === userName) {
                return (
                  <View style={styles.commentsBox} key={date}>
                    <View style={styles.accountText}>
                      <Text style={styles.userMessage}>{text}</Text>
                      <Text style={styles.dateMessage}>{date}</Text>
                    </View>
                    <Image
                      source={require("../../assets/images/commentIcon.png")}
                      style={styles.userCommentIcon}
                    />
                  </View>
                );
              }
            })}
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "android" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.select({
                ios: -150,
                android: 0,
              })}
              style={{ flex: 1 }}
            >
              <TextInput
                style={styles.commentInput}
                placeholder="Коментувати..."
                value={commentText}
                onChangeText={(text) => setCommentText(text)}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              style={styles.sendBtn}
              onPress={handleSubmitComment}
            >
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default CommentsScreen;

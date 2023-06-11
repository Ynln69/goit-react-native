import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { register } from "../redux/operations";
import { reducer } from "../redux/reduserRegistLog";

import SubmitButton from "../Commponents/SubmitButton";
import styles from "../styles/registrationScreen";

const RegisterScreen = () => {
  const dispatchRedax = useDispatch();

  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });

  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
    setIsFocused3(false);
  };
  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
    setIsFocused3(false);
  };
  const handleFocus3 = () => {
    setIsFocused1(false);
    setIsFocused2(false);
    setIsFocused3(true);
  };
  const handleShow = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleFormSubmit = () => {
    try {
      dispatchRedax(
        register({
          name: state.name,
          email: state.email,
          password: state.password,
        })
      ).then((registerResult) => {
        if (registerResult.payload) {
          db.collection("users")
            .doc(registerResult.payload.uid)
            .set({
              name: state.name,
              email: state.email,
              posts: [],
            })
            .then(() => {
              dispatch({ type: "reset" });
              navigation.navigate("Login");
            })
            .catch((error) => {
              console.error("Помилка збереження даних користувача:", error);
              Alert.alert("Помилка збереження даних, спробуйте ще раз");
            });
        } else {
          Alert.alert("Такий email вже зареєстрований");
        }
      });
    } catch (error) {
      console.error("Error during registration:", error);
      Alert.alert("Something went wrong, please try again");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={0}
        behavior={Platform.OS === "android" ? "padding" : ""}
      >
        <ImageBackground
          source={require("../../assets/images/photo-bg.jpg")}
          style={styles.image}
        />
        <View style={styles.registrationContainer}>
          <View style={styles.photoContainer}>
            <Image
              source={require("../../assets/images/add.png")}
              style={styles.addImgPng}
            ></Image>
          </View>
          <Text style={styles.registerTitle}>Реєстрація</Text>
          <TextInput
            value={state.name}
            onChangeText={(e) => {
              dispatch({
                type: "name",
                newName: e,
              });
            }}
            placeholder="Логін"
            style={[styles.input, isFocused1 && styles.focusedInput]}
            onFocus={handleFocus1}
          />
          <View style={styles.gap} />
          <TextInput
            value={state.email}
            onChangeText={(e) => {
              dispatch({
                type: "email",
                newEmail: e,
              });
            }}
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            style={[styles.input, isFocused2 && styles.focusedInput]}
            onFocus={handleFocus2}
          />
          <View style={styles.gap} />
          <View style={styles.passwordInputContainer}>
            <TextInput
              value={state.password}
              onChangeText={(e) => {
                dispatch({
                  type: "password",
                  newPassword: e,
                });
              }}
              placeholder="Пароль"
              style={[styles.input, isFocused3 && styles.focusedInput]}
              onFocus={handleFocus3}
              secureTextEntry={!isShowPassword}
            />
            <TouchableOpacity style={styles.showButton} onPress={handleShow}>
              <Text style={styles.showButtonText}>
                {!isShowPassword ? "Показати" : "Скрити"}
              </Text>
            </TouchableOpacity>
          </View>
          <SubmitButton
            title={"Зареєстуватися"}
            onPress={() => {
              handleFormSubmit();
            }}
          ></SubmitButton>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textNavRegister}>
              Вже є акаунт?
              <Text style={styles.textRvegister}> Увійти</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

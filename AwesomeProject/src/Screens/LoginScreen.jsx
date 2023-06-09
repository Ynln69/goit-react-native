import { useState, useReducer } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { reducer } from "../redux/reduserRegistLog";
import { logIn } from "../redux/operations";
import SubmitButton from "../Commponents/SubmitButton";
import { styles } from "../styles/loginScreen";

const LoginScreen = () => {
  const dispatchRedax = useDispatch();
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShow = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
  };
  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
  };

  const handleFormSubmit = () => {
    try {
      console.debug(
        `Hello, your email: ${state.email}, password: ${state.password}`
      );
      dispatchRedax(
        logIn({
          email: state.email,
          password: state.password,
        })
      ).then((registrationResult) => {
        if (registrationResult.payload) {
          dispatch({ type: "reset" });
          navigation.navigate("Home");
        } else {
          Alert.alert("LogIn failed", "Passwords or email entered incorrectly");
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
        <View style={styles.formBox}>
          <Text style={styles.formTitle}>Увійти</Text>
          <View style={styles.containerInput}>
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
              style={[styles.input, isFocused1 && styles.focusedInput]}
              onFocus={handleFocus1}
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
                autoComplete="password"
                placeholder="Пароль"
                style={[styles.input, isFocused2 && styles.focusedInput]}
                onFocus={handleFocus2}
                secureTextEntry={!isShowPassword}
              />
              <TouchableOpacity style={styles.showButton} onPress={handleShow}>
                <Text style={styles.showButtonText}>
                  {!isShowPassword ? "Показати" : "Скрити"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <SubmitButton
            title={"Увійти"}
            onPress={() => {
              handleFormSubmit();
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.textNavRegister}>
              Немає акаунту?{" "}
              <Text style={styles.textRvegister}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

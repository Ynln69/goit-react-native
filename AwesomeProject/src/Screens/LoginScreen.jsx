import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import { styles } from "../styles/LoginScreen";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigation = useNavigation();

  const onLogin = () => {
    if (!state.email || !state.password) {
      Alert.alert("All fields must be filled");
      return;
    }
    navigation.navigate("Home");
    console.log(state);
    setState(initialState);
  };

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
              onChangeText={(text) =>
                setState({ ...state, email: text.trim() })
              }
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              style={[styles.input, isFocused1 && styles.focusedInput]}
              onFocus={handleFocus1}
            />
            <View style={styles.gap} />
            <View style={styles.passwordInputContainer}>
              <TextInput
                value={state.password}
                onChangeText={(text) =>
                  setState({ ...state, password: text.trim() })
                }
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
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
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

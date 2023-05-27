import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../styles/RegistrationScreen";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const RegisterScreen = () => {
  const [state, setState] = useState(initialState);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onLogin = () => {
    if (!state.userName || !state.email || !state.password) {
      Alert.alert("All fields must be filled");
      return;
    }
    console.log(state);
    setState(initialState);
  };

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

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View style={styles.containerForm}>
          <View style={styles.registrationContainer}>
            <View style={styles.photoContainer}>
              <Image
                source={require("../../assets/images/add.png")}
                style={styles.addImgPng}
              ></Image>
            </View>
            <Text style={styles.registerTitle}>Sing Up</Text>
            <TextInput
              onChangeText={(text) =>
                setState({ ...state, userName: text.trim() })
              }
              value={state.userName}
              placeholder="Login"
              style={[styles.input, isFocused1 && styles.focusedInput]}
              onFocus={handleFocus1}
            />
            <View style={styles.gap} />
            <TextInput
              onChangeText={(text) =>
                setState({ ...state, email: text.trim() })
              }
              value={state.email}
              keyboardType="email-address"
              placeholder="Email"
              style={[styles.input, isFocused2 && styles.focusedInput]}
              onFocus={handleFocus2}
            />
            <View style={styles.gap} />
            <View style={styles.passwordInputContainer}>
              <TextInput
                onChangeText={(text) =>
                  setState({ ...state, password: text.trim() })
                }
                value={state.password}
                placeholder="Password"
                style={[styles.input, isFocused3 && styles.focusedInput]}
                onFocus={handleFocus3}
                secureTextEntry={!isShowPassword}
              />
              <TouchableOpacity style={styles.showButton} onPress={handleShow}>
                <Text style={styles.showButtonText}>
                  {!isShowPassword ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textNavRegister}>
                Don't have an account?{" "}
                <Text style={styles.textRvegister}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

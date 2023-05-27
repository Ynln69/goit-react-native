import { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Platform,
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

const Login = () => {
  const [state, setState] = useState(initialState);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onLogin = () => {
    if (!state.email || !state.password) {
      Alert.alert("All fields must be filled");
      return;
    }
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
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <View style={styles.formBox}>
          <Text style={styles.formTitle}>Sing In</Text>
          <View style={styles.containerInput}>
            <TextInput
              value={state.email}
              onChangeText={(text) =>
                setState({ ...state, email: text.trim() })
              }
              keyboardType="email-address"
              placeholder="Email"
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
                placeholder="Password"
                style={[styles.input, isFocused2 && styles.focusedInput]}
                onFocus={handleFocus2}
                secureTextEntry={!isShowPassword}
              />
              <TouchableOpacity style={styles.showButton} onPress={handleShow}>
                <Text style={styles.showButtonText}>
                  {!isShowPassword ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Log In</Text>
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
    // </TouchableWithoutFeedback>
  );
};

export default Login;

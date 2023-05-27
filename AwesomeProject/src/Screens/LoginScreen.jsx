import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../styles/LoginScreen";

const Login = () => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
  };

  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
  };
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View style={styles.formContainer}>
          <View style={styles.formBox}>
            <Text style={styles.formTitle}>Sing In</Text>
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Email"
                style={[styles.input, isFocused1 && styles.focusedInput]}
                onFocus={handleFocus1}
              />
              <View style={styles.gap} />
              <View style={styles.passwordInputContainer}>
                <TextInput
                  placeholder="Password"
                  style={[styles.input, isFocused2 && styles.focusedInput]}
                  onFocus={handleFocus2}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={styles.showButton}>
                  <Text style={styles.showButtonText}>Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
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
    </View>
  );
};

export default Login;

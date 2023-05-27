import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../styles/RegistrationScreen";

const RegisterScreen = () => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

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

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
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
              placeholder="Login"
              style={[styles.input, isFocused1 && styles.focusedInput]}
              onFocus={handleFocus1}
            />
            <View style={styles.gap} />
            <TextInput
              placeholder="Email"
              style={[styles.input, isFocused2 && styles.focusedInput]}
              onFocus={handleFocus2}
            />
            <View style={styles.gap} />
            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Password"
                style={[styles.input, isFocused3 && styles.focusedInput]}
                onFocus={handleFocus3}
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.showButton}>
                <Text style={styles.showButtonText}>Show</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
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
  );
};

export default RegisterScreen;

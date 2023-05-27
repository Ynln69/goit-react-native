import { View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./AppStyles";
import Login from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("./assets/fonts/robotoregular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <ImageBackground
        source={require("./assets/images/photo-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
      <Login />
      {/* <RegisterScreen /> */}
    </View>
  );
}

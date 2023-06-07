import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegistrationScreen";
import Home from "./src/Screens/Home";
import { MapScreen } from "./src/Screens/MapScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("./assets/fonts/robotoregular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

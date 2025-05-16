import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash.screen";
import WelcomeScreen from "../screens/Welcome.screen";
import SignInScreen from "../screens/SignIn.screen";
import SignUpScreen from "../screens/SignUp.screen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name = "Splash" component={SplashScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Welcome" component={WelcomeScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Signin" component={SignInScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Signup" component={SignUpScreen} options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
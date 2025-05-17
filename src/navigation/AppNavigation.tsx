import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash.screen";
import WelcomeScreen from "../screens/Welcome.screen";
import SignInScreen from "../screens/SignIn.screen";
import SignUpScreen from "../screens/SignUp.screen";
import Onboarding1Screen from "../screens/OnBoard1.screen";
import Onboarding2Screen from "../screens/OnBoard2.screen";
import Onboarding3Screen from "../screens/OnBoard3.screen";
import CustomHeader from "../components/Header";
import AddHabitScreen from "../screens/AddHabit.screen";


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name = "Splash" component={SplashScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Welcome" component={WelcomeScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Signin" component={SignInScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Signup" component={SignUpScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Ad1" component={Onboarding1Screen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Ad2" component={Onboarding2Screen} options = {{headerShown: false}}/>
      <Stack.Screen name = "Ad3" component={Onboarding3Screen} options = {{headerShown: false}}/>
      <Stack.Screen name="Add" component={AddHabitScreen} options={{header: () => <CustomHeader canGoBack={false} />, headerShown: false}}/>      
    </Stack.Navigator>
  );
};

export default AppNavigation;
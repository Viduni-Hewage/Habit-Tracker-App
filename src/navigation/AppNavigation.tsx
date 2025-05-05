import React from "react";
import SplashScreen from "../screens/Splash.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Splash" component={SplashScreen} options = {{headerShown: false}}/>

        </Stack.Navigator>
    );
};

export default AppNavigation;
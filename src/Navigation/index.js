import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {
return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= "WelcomeScreen" component= {WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
);
}
export default Navigation;
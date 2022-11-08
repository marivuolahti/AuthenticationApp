import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
    
    const OnSignInFacebook = () => {
        console.warn('OnSignInFacebook');
    };
    const OnSignInGoogle = () => {
        console.warn('OnSignInGoogle');
    };
    const OnSignInApple = () => {
        console.warn('OnSignInApple');
    };
    return (
    <>
        <CustomButton text= "Sign in with Facebook" 
            onPress={OnSignInFacebook}
            bgColor= "#E7EAF4"
            fgColor="#4765A9" />

            <CustomButton text= "Sign in with Google"
             onPress={OnSignInGoogle}
             bgColor="#FAE9EA"
             fgColor="#DD4D44" />

            <CustomButton text= "Sign in with Apple"
             onPress={OnSignInApple}
             bgColor="#e3e3e3"
             fgColor="#363636" />

    </>
    );
}
export default SocialSignInButtons
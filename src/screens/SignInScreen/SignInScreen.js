import React, {useState} from "react";
import { View,Text, Image, StyleSheet,useWindowDimensions, ScrollView } from "react-native";
import Logo from '../../../assets/images/signinphoto.jpg';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const {height}= useWindowDimensions();
    const navigation = useNavigation();

    const OnSignInPressed = () => {
        navigation.navigate('HomeScreen');
    }
    const OnForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }
    
    const OnSignUpPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
           <Image 
           source={Logo} 
           style={[styles.logo, {height: height * 0.3}]}
           resizeMode="contain"
           />
           <CustomInput placeholder="Username"
            value= {username} 
            setValue={setUsername} />

           <CustomInput placeholder="Password"
            value= {password} 
            setValue={setPassword} 
            secureTextEntry= {true} />

            <CustomButton text= "Sign in" onPress={OnSignInPressed} />
            <CustomButton text= "Forgot password?"
             onPress={OnForgotPasswordPressed} 
             type="TERTIARY" />
             

            <CustomButton text= "Don't have account? Create one!"
             onPress={OnSignUpPressed}
             type= "TERTIARY" 
             />
              <SocialSignInButtons />
            
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'pink',
        
    },
    logo: {
    width: '70%',
    maxWidth:300,
    maxHeight:200,
    
    },
});
export default SignInScreen
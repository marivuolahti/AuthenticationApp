import React, {useState} from "react";
import { View,Text, StyleSheet, ScrollView, DatePickerAndroid } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState ('');
    const navigation = useNavigation();
    

    const OnRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen')
    }
    
    const OnSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
    const OnTermsOfUsedPressed = () => {
        console.warn('OnTermsOfUsedPressed');
    }

    return (
        <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>
           <CustomInput placeholder="Username"
            value= {username} 
            setValue={setUsername} />

         <CustomInput placeholder="Email"
            value= {email} 
            setValue={SetEmail} />

           <CustomInput placeholder="Password"
            value= {password} 
            setValue={setPassword} 
            secureTextEntry= {true} />

           <CustomInput placeholder="Repeat password"
            value= {passwordRepeat} 
            setValue={setPasswordRepeat} 
            secureTextEntry= {true} />

            <CustomButton text= "Register" onPress={OnRegisterPressed} />
            <Text style={styles.text}>
                By registering you confirm that you can be {''}
                <Text style={styles.link}onPress={OnTermsOfUsedPressed}>Fooled</Text>
                </Text>
                
            <SocialSignInButtons />

            <CustomButton text= "Have an account? Sign In!"
             onPress={OnSignInPressed}
             type= "TERTIARY" 
             />
            
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor:'pink',
    },
   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    },
    text: {
    color: 'gray',
    marginVertical: 10,

    },

    link: {
        color: 'red'
    }

});
export default SignUpScreen
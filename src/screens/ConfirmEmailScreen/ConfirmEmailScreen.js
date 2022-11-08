import React, {useState} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";
const ConfirmEmailScreen = () => {
    const [Code, setCode] = useState ('');
    const navigation = useNavigation();
    

    const OnConfirmPressed = () => {
        navigation.navigate('HomeScreen')
    }
    
    const OnResendPressed = () => {
        console.warn('OnResendPressed');
    }
    const OnSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>Confirm your email</Text>

           <CustomInput placeholder="Enter your confirmation code"
            value= {Code} 
            setValue={setCode} />

         <CustomButton text= "Confirm" onPress={OnConfirmPressed} />

         <CustomButton text= "Resend code"
             onPress={OnResendPressed}
             type= "SECONDARY" 
             />
           
           <CustomButton text= "Back to sign in!"
             onPress={OnSignInPressed}
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
export default ConfirmEmailScreen
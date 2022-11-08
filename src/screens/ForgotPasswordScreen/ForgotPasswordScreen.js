import React, {useState} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";

const ForgotPasswordScreen = () => {
    const [Username, setUsername] = useState ('');
    const navigation = useNavigation();
    

    const OnSendPressed = () => {
        navigation.navigate('NewPasswordScreen')
    }
    
    const OnSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>

           <CustomInput placeholder="Set your email"
            value= {Username} 
            setValue={setUsername} />

         <CustomButton text= "Send" onPress={OnSendPressed} />
           
           <CustomButton text= "Back to sign in!"
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
export default ForgotPasswordScreen
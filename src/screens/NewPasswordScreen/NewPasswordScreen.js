import React, {useState} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";

const NewPasswordScreen = () => {
    const [Code, setCode] = useState ('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();
    

    const OnSubmitPressed = () => {
        console.warn("OnSubmitPressed");
        navigation.navigate('HomeScreen')
    }
    
    const OnSignInPressed = () => {
        console.warn('OnSignInPressed');
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>

           <CustomInput placeholder="Code"
            value= {Code} 
            setValue={setCode} />

         <CustomInput placeholder="Enter your new password"
            value= {newPassword} 
            setValue={setNewPassword} />

         <CustomButton text= "Submit" onPress={OnSubmitPressed} />
           
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
export default NewPasswordScreen
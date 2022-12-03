import React, {useState} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import BackButtons from "../../components/BackButtons/BackButtons";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation();

    const OnSignInPressed = () => {
        navigation.navigate('HomeScreen');
    }
    
    const OnSignUpPressed = () => {
        navigation.navigate('SignUpScreen')
    }
    const ExitPressed = () => {
        navigation.navigate('WelcomeScreen')
    }

    return (
        <ScrollView>
        <View style={styles.root}>
        <Text style={styles.WelcomeText}>Sign in</Text>
           
           <CustomInput placeholder="Username"
            value= {username} 
            setValue={setUsername} />

           <CustomInput placeholder="Password"
            value= {password} 
            setValue={setPassword} 
            secureTextEntry= {true} />

            <CustomButton text= "Sign in" onPress={OnSignInPressed} />
           
             

            <CustomButton text= "Don't have account? Create one!"
             onPress={OnSignUpPressed}
             type= "TERTIARY" 
             />

              <BackButtons text= "←"
             onPress={ExitPressed}
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

    WelcomeText: {
        fontSize: 30,
    marginBottom: '5%',
    color: '#df9fbf'
    
    }
});
export default SignInScreen
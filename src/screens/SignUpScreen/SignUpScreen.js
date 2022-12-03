import React, {useState} from "react";
import { View,Text, StyleSheet} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import BackButtons from "../../components/BackButtons/BackButtons";


const SignUpScreen = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

    const navigation = useNavigation();
    

    const OnRegisterPressed = () => {
        navigation.navigate('HomeScreen')
    }
    
    const OnSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }
   
    const ExitPressed = () => {
        navigation.navigate('WelcomeScreen');
    }

    return (
      

        <View style={styles.root}>
          
          <Text style={styles.WelcomeText}>Create an account</Text>

         <CustomInput placeholder="Email"
            value= {email} 
            setValue={setEmail} />

           <CustomInput placeholder="Password"
            value= {password} 
            setValue={setPassword} 
            secureTextEntry= {true} />

            <CustomButton text= "Register" onPress={OnRegisterPressed} type= "PRIMARY" />
           
                
            <CustomButton text= "Have an account? Sign In!"
             onPress={OnSignInPressed}
             type= "TERTIARY" 
             />
             
            
              <BackButtons text= "←"
             onPress={ExitPressed}
             type= "TERTIARY"
             />


            
        </View>
        
    );
};
const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
        
    },
   
    text: {
    color: 'grey',
    marginVertical: 10,

    },

    link: {
        color: 'red'
    },

    WelcomeText: {
    fontSize: 30,
    marginBottom: '5%',
    color: '#df9fbf'
    }

});
export default SignUpScreen
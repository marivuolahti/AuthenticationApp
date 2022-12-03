import React from "react";
import { Text, View, StyleSheet, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/core";
import CustomButton from "../../components/CustomButton";



const WelcomeScreen = () => {
   
    const navigation = useNavigation();

    const SignInPressed = () => {
        navigation.navigate('SignInScreen');
    }
    
    const SignUpPressed = () => {
        navigation.navigate('SignUpScreen')
    }
  
  
    return (
       
      <ImageBackground
        source={require('../../../assets/images/welcomescreen.jpg')}
        style={styles.background}>
         <View style={styles.root}>
        <Text style={styles.WelcomeText}>Welcome to dailyFeelings!</Text>
        <CustomButton text= "Go to Sign in" onPress={SignInPressed} />
            <CustomButton text= "Create account" onPress={SignUpPressed} />
        </View>
            </ImageBackground>
    
    );
};
const styles = StyleSheet.create ({
    
    WelcomeText: {
    fontSize: 50,
    marginBottom: '110%',
    color: 'white',
    },
    root: {
        alignItems: 'center',
        padding: 10,
        
      
        
    },

    background: {
        
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
         
    },
    
});
export default WelcomeScreen
   
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable
         onPress={onPress} 
         style= {[
            styles.container,
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text
             style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {}
            ]}
            >
              {text}
            </Text>
        </Pressable>
    );
    
};
const styles = StyleSheet.create({
    container: {
        

        width:'100%',
        padding: 15,
        marginVertical:5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: 'violet',

    },
    container_SECONDARY: {
     borderColor: 'blue',
     borderWidth: 1.5,
    },
    container_TERTIARY: {
        
    }, text_SECONDARY: {
        color: 'black'
    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    text_TERTIARY: {
        color: 'black',
    },
});
 export default CustomButton;
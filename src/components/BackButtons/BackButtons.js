import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const BackButtons = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable
         onPress={onPress} 
         style= {[
            styles.container,
           
            ]}>
            <Text
             style={[
            styles.text,
           
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
        marginTop: 290,
        
    },
  text: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 50 

  }
});
 export default BackButtons;
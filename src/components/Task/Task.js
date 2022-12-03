import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Task = (props) => {
    return (
        <View style= {styles.item}>
        <View style= {styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>

        </View>
        <Text style={styles.delete}>Delete</Text>
    </View>
    )
}
const styles= StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'violet',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
     
    },
    itemText:{
       maxWidth: '80%',
      fontWeight: 'bold',

    },
    delete: {
     color: 'red',
    },


});
export default Task;
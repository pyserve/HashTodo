import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <FontAwesome name="list-alt" size={25} color="#000" />
                <Text style={styles.text}>HashTodos</Text>
            </View>
            {/* <View style={styles.createTodoBtn}>
                <Ionicons name='create' size={30} color='#000'/>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'gray'
    },
    flexContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        paddingHorizontal: 10
    },
    createTodoBtn: {
        
    }
})
import React from 'react';
import {StyleSheet, Image, View, Text, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <Image source={require('../../assets/hash.png')} style={styles.iconImage}/>
                <Text style={styles.text}>HashTodos</Text>
            </View>
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
        
    },
    iconImage: {
        width: 30,
        height: 30,
        borderWidth: 1, 
        borderColor: '#fff',
        borderRadius: 20
    }
})
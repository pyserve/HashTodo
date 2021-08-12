import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text,} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CustomCheckbox(props) {
	const [toggler,setToggler] = useState(false)
	return(
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={styles.container}>
			{props.checked ? 
				<MaterialIcons name="radio-button-checked" size={40} style={styles.radio}/>			
			:  <MaterialIcons name="radio-button-unchecked" size={40} style={styles.radio}/>}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 3,
	},
	radio: {
		backgroundColor: '#fff',
		borderRadius: 50,
		color: 'coral',
	}
})
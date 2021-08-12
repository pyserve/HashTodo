import React, {useState} from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, CheckBox, Dimensions, 
	Alert, SafeAreaView, ScrollView, Modal} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/actions';


export default function TodoList(props){
	const dispatch = useDispatch()

	const handleDelete = (itemId) => {
	    Alert.alert('Delete TODO','Are you sure to delete?',
	      [{text: 'OK',onPress: () => dispatch(deleteTodo(itemId))},
	       {text: 'Cancel',onPress: () => console.log('Donot delete todo')}],
	      {cancelable: true});
  	}
	return(
		<View style={styles.todoList}>
          	<ScrollView>
          	{props.todos.map((item) => {
      		return(
      			<TouchableWithoutFeedback onLongPress={() => handleDelete(item.id)} key={item.id}>
                <View style={styles.todoItem}>
                  <View style={styles.todoTextContainer}>
                    <CheckBox value={item.completed} style={styles.checkbox}
                      onValueChange={() => dispatch(toggleTodo(item.id))}/>
                    <Text style={styles.todoItemText}>{item.title}</Text>
                  </View>
                  <View style={styles.todoOptIcon}>
                    <Ionicons name='create' size={35} color='coral' 
                        onPress={() => props.navigation.navigate('editTodo', {'id': item.id})}/>
                  </View>
                </View>
                </TouchableWithoutFeedback>
      		)
          	})}
          	</ScrollView>
        </View>
	)
}

const styles = StyleSheet.create({
  todoList:{
    marginVertical: 5,
  },
  todoItem: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 3,
  },
  checkbox: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 20
  },
  todoTextContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoItemText: {
    fontSize: 15,
    color: 'coral'
  },
  todoOptIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CreateTodo from './createTodo';

export default function EditTodo(props){
	
	const todos = useSelector(s => s.todo);
	const todo = todos.filter(item => item.id == props.route.params.id)[0]

	return(
		<View>
			<CreateTodo title={todo.title} priority={todo.priority} itemId={todo.id} edit={true}
				navigation={props.navigation}/>
		</View>
	)
}
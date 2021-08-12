import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-picker/picker';

import { addTodo, editTodo } from '../store/actions';

export default function CreateTodo(props){
	const dispatch = useDispatch();
	const todo = {
	    title: props.title ? props.title : '',
	    priority: props.priority ? props.priority : 'high'
	}

	const validationSchema = yup.object({
	    title: yup.string().required('This field is required'),
	})
	
	const handleEdit = (values) => {
		dispatch(editTodo({
				id: props.itemId,
				title: values.title,
				priority: values.priority
		    })
		);
		props.navigation.navigate('home');
	}

	return(
	<View style={styles.newTodo}>
        <Formik initialValues={todo} 
            validationSchema={validationSchema}
            onSubmit={(values,actions) => {
              dispatch(addTodo({
                id: Math.random().toString(),
                title: values.title,
                completed: false,
                date: Date.now(),
                priority: values.priority
              }));
              actions.resetForm();
            }}>
            {({handleSubmit,values,handleChange,handleReset}) => {
              return(
                <View>
                  <View style={styles.inputContainer}>
                    <TextInput value={values.title} placeholder='Add a todo' 
                      onChangeText={handleChange('title')}  style={styles.textInput}/>
                    <View style={styles.pickerSelect}>
                      <Picker selectedValue={values.priority} onValueChange={handleChange('priority')}
                       style={styles.picker}>
                        <Picker.Item label='priority-high' value='high' />
                        <Picker.Item label='priority-low' value='low' />
                      </Picker>
                    </View>
                  </View>
                  {props.edit ?
                  	<Button title='Save Todo' color='orange' onPress={() => handleEdit(values)}/>
                  	: <Button title='Add Todo' color='coral' onPress={handleSubmit}/> }
                </View>
              )
            }}
        </Formik>
    </View>
	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer:{

  },
  pickerSelect: {
    marginBottom: 10,
    paddingVertical: 18,
    paddingHorizontal: 6
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'coral',
    borderRadius: 2,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  newTodo: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderBottomColor: 'coral',
    borderColor: 'lightgray',
    borderRadius: 10,
  },
});
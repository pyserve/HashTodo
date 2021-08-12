import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput, Button, Keyboard, CheckBox, FlatList,
  TouchableWithoutFeedback, ScrollView, Modal} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, Fontawesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector} from 'react-redux';
import TodoList from './todoList';
import CreateTodo from './createTodo';

export default function Home({navigation}){
  const todos = useSelector(s => s.todo);

  const completedTodos = todos.filter(item => item.completed)
  const uncompleteTodos = todos.filter(item => !item.completed)
  const highPriorityTodos = uncompleteTodos.filter(item => item.priority == 'high')
  const lowPriorityTodos = uncompleteTodos.filter(item => item.priority == 'low')

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <CreateTodo />      
        <ScrollView style={{flex: 1}}>
          
          {highPriorityTodos.length ?
          <View> 
            <Text style={styles.todoClassifyTextHeader}>High Priority Todos: </Text>
            <TodoList todos={highPriorityTodos}  navigation={navigation}/>
          </View>: null}
          
          {lowPriorityTodos.length ?
          <View> 
            <Text style={styles.todoClassifyTextHeader}>Low Priority Todos: </Text>
            <TodoList todos={lowPriorityTodos} navigation={navigation} />
          </View>: null}

          {completedTodos.length ?
          <View> 
            <Text style={styles.todoClassifyTextHeader}>Completed Todos: </Text>
            <TodoList todos={completedTodos} navigation={navigation} />
          </View>: null}

        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
  },
  todoClassifyTextHeader: {
    marginVertical: 15,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
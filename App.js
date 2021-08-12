import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import store from './store';

import Home from './components/home';
import Navbar from './components/layouts/navbar'
import EditTodo from './components/editTodo';

const Stack = createStackNavigator();

export default function App() {
  const screenOptions = {
    headerShown: true,
    headerTitle: props => <Navbar />,
    headerStyle: {
      backgroundColor: 'coral'
    },
    headerRight: () => 
      { 
        const todos = useSelector(state => state.todo)
        if(todos.length > 0) return <Text style={styles.navText}>{todos.length}</Text>;
        return null;
      }
  }
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={screenOptions} />
        <Stack.Screen name="editTodo" component={EditTodo} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  navText: {
    paddingHorizontal: 10,
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
    backgroundColor: '#fff',
    borderRadius: 20
  }
});

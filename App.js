import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store';

import Home from './components/home';
import Navbar from './components/layouts/navbar'
import EditTodo from './components/editTodo';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: true,
  headerTitle: props => <Navbar />,
  headerStyle: {
    backgroundColor: 'coral'
  },
}

export default function App() {
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
});

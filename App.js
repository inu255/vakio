import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './Page'

function FirstPage() {
  return (
    <Page navTo='Second Page' text='Next Page'/>
  );
}

function SecondPage() {
  return (
    <Page navTo='Third Page' text='Next Page'/>
  );
}

function ThirdPage() {
  return (
    <Page navTo='First Page' text='To First Page'/>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
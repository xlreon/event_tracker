import React from 'react';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Start" 
            component={StartScreen}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Details" 
            component={EventDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


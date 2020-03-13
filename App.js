import React from 'react';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails';
import TrackedEvents from './screens/TrackedEvents';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
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
          <Stack.Screen 
          name="TrackedEvents" 
          component={TrackedEvents}
        />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}


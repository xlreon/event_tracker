import React from 'react';
import StartScreen from './screens/StartScreen';
import { ThemeProvider } from 'react-native-elements';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <StartScreen/>
      </ThemeProvider>
    );
  }
}


import  React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Avatar, ThemeProvider, Text } from 'react-native-elements';
import InputWithIcon from '../components/InputWithIcon';

export default class StartScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: ""
        }
      }
    
      updateName = (name) => this.setState({name})
    
      onSubmit = () => {
        const currentName = this.state.name
        if(currentName !== "") {
            this.props.navigation.navigate('Home',{name: currentName})
        }
      }

      render() {
        return (
            <ThemeProvider>
                <View style={styles.container}>
                <View style={styles.form}>
                  <Avatar
                          size="xlarge"
                          rounded
                          source={{
                            uri:
                                'https://drive.google.com/uc?id=1SAe9myO5Cn3oyLHHlAMTHEzJrt0Sxjci',
                              }}
                          containerStyle={{height: Dimensions.get('window').width/3, width: Dimensions.get('window').width/3}}
                          activeOpacity={0.7}
                      />
                    <Text h4>
                        Welcome to Event Tracker
                    </Text>
                    <InputWithIcon
                        icon={<Icon name='user' size={24} color='black' style={{paddingRight: 10}}/>}
                        title={'Enter Your Name'}
                        onChange={this.updateName}
                        value={this.state.name}
                    />
                    <Button title="Submit" onPress={this.onSubmit} containerStyle={{width: '100%'}}/>
                </View>
                </View>
            </ThemeProvider>
        );
      }
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    form: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: 'center',
      paddingHorizontal: 20,
      flex: 1,
    }
  });
  
import  React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Header, ThemeProvider } from 'react-native-elements';
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
                    <InputWithIcon
                        icon={<Icon name='user' size={24} color='black' style={{paddingRight: 10}}/>}
                        title={'Enter Your Name'}
                        onChange={this.updateName}
                        value={this.state.name}
                    />
                    <Button title="Submit" onPress={this.onSubmit}/>
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
      justifyContent: "space-between",
      alignItems: 'stretch',
      padding: 20,
      flex: 1,
      marginTop: 350
    }
  });
  
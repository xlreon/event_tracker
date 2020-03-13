import  React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Header } from 'react-native-elements';
import InputWithIcon from '../components/InputWithIcon';
export default class StartScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: ""
        }
      }
    
      updateName = (event) => this.setState({name: event.target.value})
    
      onSubmit = () => console.log(this.state.name)

      render() {
        return (
            <View style={styles.container}>
            <Header
              centerComponent={{ text: 'Event Tracker', style: { color: '#fff' } }}
            />
              <View style={styles.form}>
                <InputWithIcon
                    icon={<Icon name='user' size={24} color='black' style={{paddingRight: 10}}/>}
                    title={'Enter Your Name'}
                    onChange={this.updateName}
                    value={this.state.name}
                />
                <Button title="Submit" onClick={this.onSubmit}/>
              </View>
            </View>
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
  
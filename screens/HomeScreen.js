import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, ButtonGroup } from 'react-native-elements';
import ListView from '../components/ListView';
import GridView from '../components/GridView';

const views = {
    0: <ListView events={'yo'}/>,
    1: <GridView events={'hey'}/>
}

export default class HomeScreen extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
      }

    updateIndex =  (selectedIndex) => this.setState({selectedIndex})
      
    render() {
        const name = this.props.route.params.name;
        const firstLetter = name[0]
        const lastName = name.split(" ") !== [] ? name.split(" ")[1][0] : ''
        const buttons = ['List', 'Grid']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
                <Avatar
                    size="xlarge"
                    rounded
                    title={firstLetter+lastName}
                    activeOpacity={0.7}
                />
                <Text h3>
                    {name}
                </Text>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}}
                />
                {views[selectedIndex]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "flex-start",
    }
})
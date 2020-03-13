import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, ButtonGroup } from 'react-native-elements';
import ListView1 from '../components/ListView';
import GridView from '../components/GridView';
import GestureRecognizer from 'react-native-swipe-gestures';

const events = 
[
    {
        key: 1,
        name: 'Metallica Concert',
        location: 'Palace Grounds',
        entryType: '(paid entry)'
    },
    {
        key: 2,
        name: 'Saree Exhibition',
        location: 'Malleswaram Grounds',
        entryType: '(free entry)'
    },
    {
        key: 3,
        name: 'Wine tasting event',
        location: 'Links Brewery',
        entryType: '(paid entry)'
    },
    {
        key: 4,
        name: 'Startups Meet',
        location: 'Kanteerava Indoor Stadium',
        entryType: '(paid entry)'
    },
    {
        key: 5,
        name: 'Summer Noon Party',
        location: 'Kumara Park',
        entryType: '(paid entry)'
    },
    {
        key: 6,
        name: 'Rock and Roll nights',
        location: 'Sarjapur Road',
        entryType: '(paid entry)'
    },
    {
        key: 7,
        name: 'Barbaque Fridays ',
        location: 'Whitefield',
        entryType: '(paid entry)'
    },
    {
        key: 8,
        name: 'Summer Workshop',
        location: 'Indiranagar',
        entryType: '(free entry)'
    },
    {
        key: 9,
        name: 'Impressions & Expressions',
        location: 'MG Road',
        entryType: '(free entry)'
    },
    {
        key: 10,
        name: 'Italian Carnival',
        location: 'Electronic City',
        entryType: '(free entry)'
    }
]

export default class HomeScreen extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
      }

    updateIndex =  (selectedIndex) => this.setState({selectedIndex})

    getView = (current) => {
        const navigation = this.props.navigation
        const views = {
            0: <ListView1 events={events} navigation={navigation}/>,
            1: <GridView events={events} navigation={navigation}/>
        }
        return views[current]
    }
      
    render() {
        const name = this.props.route.params.name;
        const firstLetter = name[0]
        const lastName = name.split(" ") !== [] ? name.split(" ")[1][0] : ''
        const buttons = ['List', 'Grid']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
            <GestureRecognizer
                onSwipeLeft={() => this.props.navigation.navigate('TrackedEvents')}
            >
                <View style={styles.userDetails}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title={firstLetter+lastName}
                        activeOpacity={0.7}
                    />
                    <Text h3>
                        {name}
                    </Text>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}}
                />
                {this.getView(selectedIndex)}
            </GestureRecognizer>
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
      alignItems: "stretch",
      justifyContent: "flex-start",
    },
    userDetails: {
        flexDirection: "column",
        alignItems: "center",
    }
})
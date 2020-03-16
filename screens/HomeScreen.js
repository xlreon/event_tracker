import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
        url: 'https://drive.google.com/uc?id=1jp5KqZ0ETDIQTgTbpjawYJvStO31kDUx',
        entryType: '(paid entry)'
    },
    {
        key: 2,
        name: 'Saree Exhibition',
        location: 'Malleswaram Grounds',
        url: 'https://drive.google.com/uc?id=1JYEcPjME9dCDyf_hciYduLqZtynVwatV',
        entryType: '(free entry)'
    },
    {
        key: 3,
        name: 'Wine tasting event',
        location: 'Links Brewery',
        url: 'https://drive.google.com/uc?id=1hfEuUZQ-B8_4hOocxRuiMFhfX5RMnHjj',
        entryType: '(paid entry)'
    },
    {
        key: 4,
        name: 'Startups Meet',
        location: 'Kanteerava Indoor Stadium',
        url: 'https://drive.google.com/uc?id=1dDi7B1gRjBZLZZ0PUBkeOuAo2kHGRcdT',
        entryType: '(paid entry)'
    },
    {
        key: 5,
        name: 'Summer Noon Party',
        location: 'Kumara Park',
        url: 'https://drive.google.com/uc?id=17JxsNSEb86hx-tCnN4HMmmwhb9MYHyLS',
        entryType: '(paid entry)'
    },
    {
        key: 6,
        name: 'Rock and Roll nights',
        location: 'Sarjapur Road',
        url: 'https://drive.google.com/uc?id=1FCZlhxAwKhnDXnrKFeLD5DBtnUhC4ija',
        entryType: '(paid entry)'
    },
    {
        key: 7,
        name: 'Barbaque Fridays ',
        location: 'Whitefield',
        url: 'https://drive.google.com/uc?id=1X2bdk0m2w3w6RsTa91XIaSl-423Wueg0',
        entryType: '(paid entry)'
    },
    {
        key: 8,
        name: 'Summer Workshop',
        location: 'Indiranagar',
        url: 'https://drive.google.com/uc?id=1mlOuon2lpCzKydIYhrJEYzoAVWfe5UDf',
        entryType: '(free entry)'
    },
    {
        key: 9,
        name: 'Impressions & Expressions',
        location: 'MG Road',
        url: 'https://drive.google.com/uc?id=w5WwAM4fekSs9OgLmS0Hb0wGc',
        entryType: '(free entry)'
    },
    {
        key: 10,
        name: 'Italian Carnival',
        location: 'Electronic City',
        url: 'https://drive.google.com/uc?id=1NlWaxk5xNS5Nmq9qWwpclW8EBYzmMGmy',
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
            <View style={{paddingTop: 30, paddingBottom: 30}}>
            <GestureRecognizer
                onSwipeLeft={() => this.props.navigation.navigate('TrackedEvents')}
            >
            <ScrollView containerStyle={styles.container}>
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
            </ScrollView>
            </GestureRecognizer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    userDetails: {
        flexDirection: "column",
        alignItems: "center",
    }
})
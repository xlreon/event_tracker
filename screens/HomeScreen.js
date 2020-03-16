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
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 2,
        name: 'Saree Exhibition',
        location: 'Malleswaram Grounds',
        url: '',
        entryType: '(free entry)'
    },
    {
        key: 3,
        name: 'Wine tasting event',
        location: 'Links Brewery',
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 4,
        name: 'Startups Meet',
        location: 'Kanteerava Indoor Stadium',
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 5,
        name: 'Summer Noon Party',
        location: 'Kumara Park',
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 6,
        name: 'Rock and Roll nights',
        location: 'Sarjapur Road',
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 7,
        name: 'Barbaque Fridays ',
        location: 'Whitefield',
        url: '',
        entryType: '(paid entry)'
    },
    {
        key: 8,
        name: 'Summer Workshop',
        location: 'Indiranagar',
        url: '',
        entryType: '(free entry)'
    },
    {
        key: 9,
        name: 'Impressions & Expressions',
        location: 'MG Road',
        url: '',
        entryType: '(free entry)'
    },
    {
        key: 10,
        name: 'Italian Carnival',
        location: 'Electronic City',
        url: '',
        entryType: '(free entry)'
    },
    {
        key: 11,
        name: 'Italian Carnival',
        location: 'Electronic City',
        url: '',
        entryType: '(free entry)'
    },
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
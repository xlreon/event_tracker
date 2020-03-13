import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

export default class EventDetails extends Component {


    onTrack = () => {

    }

    render() {
        const event = this.props.route.params.event;
        return (
            <View style={styles.container} isVisible>
                <Card style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text h3>{event.name}</Text>
                    <Text h3>{event.location}</Text>
                    <Text h3>{event.entryType}</Text>
                </Card>
                <View style={styles.trackButton}>
                    <Button  title="Track" onPress={this.onTrack}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    trackButton: {
        padding: 15,
    }
});
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text, Card, Button } from 'react-native-elements';
import { addEvent } from '../actions';
import GestureRecognizer from 'react-native-swipe-gestures';

class EventDetails extends Component {


    onTrack = () => {
        this.props.addEvent(this.props.route.params.event)
        this.props.navigation.navigate('TrackedEvents')
    }

    render() {
        const event = this.props.route.params.event;
        return (
            <GestureRecognizer
            onSwipeLeft={() => this.props.navigation.navigate('TrackedEvents')}
            style={styles.container}
            >
                <View>
                    <Card>
                        <Text h3>{event.name}</Text>
                        <Text h3>{event.location}</Text>
                        <Text h3>{event.entryType}</Text>
                    </Card>
                    <View style={styles.trackButton}>
                        <Button  title="Track" onPress={this.onTrack}/>
                    </View>
                </View>
            </GestureRecognizer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    trackButton: {
        padding: 15,
    }
});

export default connect(null, {
    addEvent
})(EventDetails);

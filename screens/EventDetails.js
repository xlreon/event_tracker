import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EventDetails extends Component {
    render() {
        const event = this.props.route.params.event;
        return (
            <View>
                <Text>{event.name}</Text>
            </View>
        );
    }
}
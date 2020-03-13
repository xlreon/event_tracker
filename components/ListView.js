import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class ListView extends Component {

    constructor(props) {
        super(props);
    }

    onPressHandler = (l) => this.props.navigation.navigate('Details',{event: l})

    render() {
        return (
            <ScrollView>
            {
                this.props.events.map((l, i) => (
                <Card>
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.location}
                        onPress={() => this.onPressHandler(l)}
                    />
                </Card>
                ))
            }
        </ScrollView>
        );
    }
}
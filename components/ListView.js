import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class ListView extends Component {

    constructor(props) {
        super(props);
    }

    onPressHandler = (l) => this.props.navigation.navigate('Details',{event: l})

    render() {
        const scrollContainerHeight  = Dimensions.get('window').height * 2
        return (
            <ScrollView contentContainerStyle={{height: scrollContainerHeight}}>
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

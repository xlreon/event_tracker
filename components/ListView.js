import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class ListView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
            {
                this.props.events.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    subtitle={l.location}
                    bottomDivider
                />
                ))
            }
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
})
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class GridView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                {
                this.props.events.map((l, i) => i < this.props.events.length/2 && (
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.location}
                        bottomDivider
                    />
                    ))
                }
                </View>
                <View style={{flex: 1}}>
                {
                this.props.events.map((l, i) => i >= this.props.events.length/2 && (
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.location}
                        bottomDivider
                    />
                    ))
                }
                </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})
import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class TrackedEvents extends Component {

    onPressHandler = action  => console.log(action)

    render() {
        return (
            <ScrollView>
            {
                this.props.events.map((l, i) => (
                <Card style={{flexDirection: 'row'}}>
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.location}
                    />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Icon name='caret-up' size={30} color='black' onPress={() => this.onPressHandler('UP')}/>
                        <Icon name='caret-down' size={30} color='black' onPress={() => this.onPressHandler('DOWN')}/>
                        <Icon name='trash-o' size={30} color='black' onPress={() => this.onPressHandler('DELETE')}/>
                    </View>
                </Card>
                ))
            }
        </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events,
    }
}

export default connect(mapStateToProps, null)(TrackedEvents);
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

class TrackedEvents extends Component {
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
                        // onPress={() => this.onPressHandler(l)}
                    />
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
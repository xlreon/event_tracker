import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { updateEvent } from '../actions';
import Swipeout from 'react-native-swipeout';

const eventTypes = {
    UP: "UP",
    DOWN: "DOWN",
    DELETE: "DELETE"
}

class TrackedEvents extends Component {

    onPressHandler = (eventType, index) => this.props.updateEvent(eventType, index)

    getEventList = events => events.map((l, i) => {

        const swipeoutBtns = [
            {
                text: 'UP',
                backgroundColor: 'blue',
                onPress: () => this.onPressHandler(eventTypes.UP, i)
            },
            {
                text: 'DOWN',
                backgroundColor: 'blue',
                onPress: () => this.onPressHandler(eventTypes.DOWN, i)
            },
            {
                text: 'DELETE',
                backgroundColor: 'red',
                onPress: () => this.onPressHandler(eventTypes.DELETE, i)
            }
        ]



        return (
            <Card>
                <Swipeout right={swipeoutBtns} autoClose={true}>
                    <Row>
                        <Col>
                        <Image
                            source={{ uri: l.url }}
                            style={{ width: '100%', height: 100}}
                        />
                        </Col>
                        <Col>
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={l.location}
                            containerStyle={{height: 100}}
                        />
                        </Col>
                    </Row>
            </Swipeout>
                </Card>
        )
    })
    
    render() {

        return (
            <ScrollView>
            {
                this.getEventList(this.props.events)
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

export default connect(mapStateToProps, {updateEvent})(TrackedEvents);
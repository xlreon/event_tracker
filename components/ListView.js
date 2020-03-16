import React, { Component } from 'react';
import { Grid, Col } from 'react-native-easy-grid';
import { ListItem, Card, Image } from 'react-native-elements';

export default class ListView extends Component {

    constructor(props) {
        super(props);
    }

    onPressHandler = (l) => this.props.navigation.navigate('Details',{event: l})

    render() {
        return (
                <Grid>
                    <Col>
            {
                this.props.events.map((l, i) => (
                <Card>
                        <Image
                            source={{ uri: l.url }}
                            style={{ width: '100%', height: 100}}
                        />
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.location}
                        onPress={() => this.onPressHandler(l)}
                    />
                </Card>
                ))
            }
                </Col>
            </Grid>
        );
    }
}

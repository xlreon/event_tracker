import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ListItem, Card, Image } from 'react-native-elements';

export default class GridView extends Component {

    constructor(props) {
        super(props);
    }

    onPressHandler = (l) => this.props.navigation.navigate('Details',{event: l})

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item, index }) => {
        if(index%2 === 0) {
            const firstItem = this.props.events[index]
            const lastItem = this.props.events[index+1]
            return (
                <Grid>
                    <Row>
                        <Col onPress={() => this.onPressHandler(firstItem)}>
                        <Card>
                            <View style={styles.gridElement}>
                                    <Image
                                    source={{ uri: firstItem.url }}
                                    style={{ width: '100%', height: 100}}
                                    />
                                <ListItem
                                    key={index}
                                    title={firstItem.name}
                                    subtitle={firstItem.location}
                                    />
                            </View>
                        </Card>
                        </Col>
                        <Col onPress={() => this.onPressHandler(lastItem)}>
                        {index+1 !== this.props.events.length && 
                        <Card>
                            <View style={styles.gridElement}>
                                <Image
                                style={{ width: '100%', height: 100}}
                                source={{ uri: lastItem.url }}
                            />
                            <ListItem
                                key={index+1}
                                title={lastItem.name}
                                subtitle={lastItem.location}
                                />
                            </View>
                        </Card>
                                }
                        </Col>
                    </Row>
                </Grid>
                ) 
        }
        else 
            return null
    }

    render() {
        return (
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.events}
                renderItem={this.renderItem}
                />

        );
    }
}


const styles = StyleSheet.create({
    gridElement: {
        height: 250
    }
})
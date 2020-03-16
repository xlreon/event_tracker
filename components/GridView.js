import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

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
                <View style={styles.gridRow}>
                    <Card>
                        <View style={styles.gridElement}>
                            <ListItem
                                key={index}
                                title={firstItem.name}
                                subtitle={firstItem.location}
                                onPress={() => this.onPressHandler(firstItem)}
                                />
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.gridElement}>
                    {index+1 !== this.props.events.length && 
                        <ListItem
                            key={index+1}
                            title={lastItem.name}
                            subtitle={lastItem.location}
                            onPress={() => this.onPressHandler(lastItem)}
                            />}
                        </View>
                    </Card>
                </View>
                ) 
        }
        else 
            return null
    }

    render() {
        const scrollContainerHeight  = Dimensions.get('window').height
        return (
            <ScrollView contentContainerStyle={{height: scrollContainerHeight}}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.events}
                renderItem={this.renderItem}
                />
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 2,
        paddingBottom: 20
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    gridElement: {
        width: Dimensions.get('window').width/2
    }
})
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

export default class HomeScreen extends Component {
    render() {
        const name = this.props.route.params.name;
        const firstLetter = name[0]
        const lastName = name.split(" ") !== [] ? name.split(" ")[1][0] : ''
        return (
            <View style={styles.container}>
                <Avatar
                    size="xlarge"
                    rounded
                    title={firstLetter+lastName}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text h3>
                    {name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "flex-start",
    }
})
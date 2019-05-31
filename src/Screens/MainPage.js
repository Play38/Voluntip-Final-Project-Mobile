import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
const stylesHome = StyleSheet.create({
    button: {
        backgroundColor: '#0598fa',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default class MainPage extends Component {
    static propTypes = {
        navigation: PropTypes.any.isRequired
    }
    static navigationOptions = {
        title: 'Main Page',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        )
    }
}

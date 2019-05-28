import React, { Component } from 'react'
import { Text, View, Alert, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { db } from '../config';
import styles from './containerStyle'

let addItem = item => {
    db.ref('/items').push({
        name: item
    });
};

export default class App extends Component {
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.name);
        Alert.alert('Item saved successfully');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={stylesTest.title}>Add Item</Text>
                <TextInput style={stylesTest.itemInput} onChange={this.handleChange} />
                <TouchableOpacity
                    style={stylesTest.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const stylesTest = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        width:'100%',
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: '#5374d6',
        backgroundColor:'green'
    },
    buttonText: {
        fontSize: 25,
        color: '#5374d6',
        alignSelf: 'center'
    },
    button: {
        color:'#5374d6',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'red',
        marginTop: 10,
        width:50,
        justifyContent: 'center'
    }
});

import React, { Component } from 'react'
import { Text, View, Alert, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { db } from '../config';
import styles from './containerStyle'


let addItem = item => {
    let flag = true
    db.ref('/items').on('value', snapshot => {
        let data = Object.values(snapshot.val())
        for (d in data){
                if(item.name === data[d].user.name){
                Alert.alert('User allready exists')
                flag = false
            }
        }
        if(flag){
            db.ref('/items').push({
                user: item
            });
            Alert.alert('Singed up successfully')
        }
    })
};

export default class App extends Component {
    state = {
        name: ''
    };

    handleChangeUserName = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleChangePass = e => {
        this.setState({
            pass: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        let user= Object()
        user.name = this.state.name
        user.password = this.state.pass
        addItem(user);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={stylesTest.title}>Add Item</Text>
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangeUserName} />
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangePass} />
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
        width:'80%',
        alignSelf: "center",
        marginBottom: 25,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: '#5374d6',
        backgroundColor:'white'
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

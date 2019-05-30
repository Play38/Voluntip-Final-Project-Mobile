import {db} from "../config";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../Screens/containerStyle";
import React, {Component} from 'react';

let addItem = item => {
    let flag = true

    db.ref('/users').on('value', snapshot => {
        let data = Object.values(snapshot.val())
        for (d in data){
            if(item.name === data[d].user.name){
                Alert.alert('User allready exists')
                flag = false
            }
        }
        if(flag){
            db.ref('/users').push({
                user: item
            });
            Alert.alert('Singed up successfully...\n Redirecting to home page')
        }
    })
};

export default class SignUp extends Component {
    state = {
        name: '',
        err_msg: ''
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
    handleChangePass2 = e => {
        this.setState({
            pass2: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        let user= Object()
        if(this.state.pass != this.state.pass2){
            this.setState({
                err_msg: "Passwords does not match"
            });
            return
        }
        if(/\s/.test(this.state.name)){
            this.setState({
                err_msg: "Username must not include spaces"
            });
            return
        }
        user.name = this.state.name
        user.password = this.state.pass
        addItem(user);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={stylesTest.title}>Sign Up</Text>
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangeUserName} />
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangePass} />
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangePass2} />
                <TouchableOpacity
                    style={stylesTest.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={stylesTest.errorMassage}>{this.state.err_msg}</Text>
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
    },
    errorMassage: {
        fontSize: 25,
        marginTop: 10,
        alignSelf: 'center'
    }
});
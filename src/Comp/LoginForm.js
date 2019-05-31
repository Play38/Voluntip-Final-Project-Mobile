import {db} from "../config";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../Screens/containerStyle";
import React, {Component} from 'react';

let goLog = 0


let LoginUser = item => {
    let flag = true
    db.ref('/users').on('value', snapshot => {
        let data = Object.values(snapshot.val())
        for (d in data){
            if(item.name === data[d].user.name){
                flag = false
            }
        }
        if(!flag){

            Alert.alert('Logged in successfully...\n Redirecting to home page')
            goLog = 1
        }
        else
        {
            Alert.alert('Password is inncorrect or not \n such user found')
        }
    })
};

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        name: '',
        err_msg: '',
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
        if(/\s/.test(this.state.name)){
            this.setState({
                err_msg: "Username must not include spaces"
            });
            return
        }
        user.name = this.state.name
        user.password = this.state.pass
        LoginUser(user);
    };

    render() {
        if(goLog)
        {
            this.props.onSelectLogin(1)
        }
        return (
            <View style={styles.container}>

                <Text style={stylesTest.title}>Login</Text>
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangeUserName} />
                <TextInput style={stylesTest.itemInput} onChange={this.handleChangePass} />
                <TouchableOpacity
                    style={stylesTest.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Login</Text>
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
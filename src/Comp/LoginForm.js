import {db} from "../config";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./Styles/containerStyle";
import React, {Component} from 'react';
import stylesTest from '../Comp/Styles/LoginStyle'




export default class LoginForm extends React.Component {

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
        let LoginUser = item => {
            let flag = true
            db.ref('/users').on('value', snapshot => {
                let data = Object.values(snapshot.val())
                for (d in data){
                    if(item.name === data[d].username){
                        flag = false
                    }
                }

                if(!flag){

                    Alert.alert('Logged in successfully...\n Redirecting to home page')
                    this.props.onSelectLogin(1)

                }
                else
                {
                    Alert.alert('Password is inncorrect or not \n such user found')
                }
            })
        };
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
    handlePress = () => {
        this.props.onSelectLogin(2)
    };

    render() {
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
                <TouchableOpacity
                    style = {stylesTest.button}
                    underlayColor="white"
                    onPress={this.handlePress}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={stylesTest.errorMassage}>{this.state.err_msg}</Text>
            </View>
        );
    }
}

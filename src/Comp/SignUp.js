import {db} from "../config";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./Styles/containerStyle";
import React, {Component} from 'react';
import stylesTest from '../Comp/Styles/LoginStyle'


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
        let LoginUser = item => {
            let flag = true

            db.ref('/users').on('value', snapshot => {
                let data = Object.values(snapshot.val())
                for (d in data){
                    if(item.name === data[d].user.name){
                        Alert.alert('User already exists')
                        flag = false
                    }
                }
                if(flag){
                    Alert.alert('Singed up successfully...\n Redirecting to home page')
                    this.props.onSelectLogin(1)
                }
            })
        };
        let user= Object()
        if(this.state.pass !== this.state.pass2){
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
        LoginUser(user);
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
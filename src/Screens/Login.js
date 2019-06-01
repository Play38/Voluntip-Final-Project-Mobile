import React, { Component } from 'react'
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../Comp/Styles/containerStyle'
import {db} from "../config";
import stylesTest from "../Comp/Styles/LoginStyle";
export default class App extends Component {
    state = {
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
            let object
            let flag = true
            db.ref('/users').on('value', snapshot => {
                let data = Object.values(snapshot.val())
                for (d in data){
                    if(item.name === data[d].username){
                        console.log(item.pass)
                        if(item.password === data[d].password ) {
                        flag = false
                            object = data[d]
                        }
                    }
                }

                if(!flag){
                    Alert.alert('Logged in successfully...\n Redirecting to home page')
                    this.props.navigation.navigate('MainPage', {
                        username: object.username,
                        userCoins: object.coins})

                }
                else
                {
                    Alert.alert('Password is inncorrect or no\n such user found')
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
        this.props.navigation.navigate('SignUp', {})
    };

    render() {
        return (
            <View style={styles.container}>

                <Text style={stylesTest.title}>Login</Text>
                <TextInput style={stylesTest.itemInput} placeholder="Username" onChange={this.handleChangeUserName} />
                <TextInput style={stylesTest.itemInput} placeholder="Password" onChange={this.handleChangePass} />
                <TouchableOpacity
                    style={stylesTest.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={stylesTest.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={stylesTest.errorMassage}>{this.state.err_msg}</Text>
                <TouchableOpacity
                    style = {stylesTest.buttonSign}
                    underlayColor="white"
                    onPress={this.handlePress}
                >
                    <Text style={stylesTest.buttonTextSign}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import SignUp from '../Comp/SignUp'
import LoginForm from '../Comp/LoginForm'
import styles from '../Comp/Styles/containerStyle'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 0
        }
    }
    handleLogin = (loginValue) => {
        this.setState({login: loginValue});
        if(loginValue === 1)
            this.props.navigation.navigate('MainPage')
        else if(loginValue === 2)
            this.setState({mode: 1})
        this.setState({login: 0});
    }
    handlePress = () => {
        this.setState({mode: 1})
    };



    render() {
        return (
            <View style={styles.container}>
                {this.state.mode === 0 &&(

                    <LoginForm onSelectLogin={this.handleLogin}/>
                )}
                {this.state.mode === 1 && (
                    <SignUp onSelectLogin={this.handleLogin}/>
                )}

            </View>
        );
    }
}
import React, { Component } from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import SignUp from '../Comp/SignUp'
import LoginForm from '../Comp/LoginForm'
import styles from './containerStyle'
let login = 0
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 0,
            login: 0
        }
    }
    handleLogin = (loginValue) => {
        //this.setState({login: loginValue});
        this.props.navigation.navigate('MainPage')
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
                {this.state.mode === 0 && (

                    <TouchableOpacity
                        style = {{bottom: 0}}
                        underlayColor="white"
                        onPress={this.handlePress}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                )}
                {this.state.mode === 1 && (
                    <SignUp/>
                )}

            </View>
        );
    }
}
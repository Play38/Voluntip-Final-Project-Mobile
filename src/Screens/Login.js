import React, { Component } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import { db } from '../config'
import stylesTest from '../Comp/Styles/LoginStyle'
export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      err_msg: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleSubmit() {
    let d
    const LoginUser = item => {
      let object
      let flag = true
      db.ref('/users').on('value', snapshot => {
        const data = Object.values(snapshot.val())
        for (d in data) {
          if (item.name === data[d].username) {
            if (item.password === data[d].password) {
              flag = false
              object = data[d]
            }
          }
        }

        if (!flag) {
          //Alert.alert('Logged in successfully...\nRedirecting to home page')
          this.props.navigation.replace('MainPage', {
            username: object.username,
            userCoins: object.coins,
            left: null
          })
        } else {
          Alert.alert('Password is inncorrect or no\nsuch user found')
        }
      })
    }
    const user = Object()
    if (/\s/.test(this.state.name)) {
      this.setState({
        err_msg: 'Username must not include spaces'
      })
      return
    }
    user.name = this.state.name
    user.password = this.state.pass

    LoginUser(user)
  }
  handlePress() {
    this.props.navigation.navigate('SignUp', {})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={stylesTest.title}>Login</Text>
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Username"
          onChangeText={text => this.setState({ name: text })}
          z
        />
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Password"
          onChangeText={text => this.setState({ pass: text })}
        />
        <TouchableOpacity
          style={stylesTest.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={stylesTest.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={stylesTest.errorMassage}>{this.state.err_msg}</Text>
        <TouchableOpacity
          style={stylesTest.buttonSign}
          underlayColor="white"
          onPress={this.handlePress}
        >
          <Text style={stylesTest.buttonTextSign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

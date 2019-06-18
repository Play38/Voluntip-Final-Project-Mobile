import db from '../config'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../Comp/Styles/containerStyle'
import React, { Component } from 'react'
import stylesTest from '../Comp/Styles/LoginStyle'
import { PropTypes } from 'prop-types'

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      err_msg: '',
      pass: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let d
    const LoginUser = item => {
      let flag = true
      let newUser = false
      db.ref('/users').on('value', snapshot => {
        const data = Object.values(snapshot.val())
        for (d in data) {
          if (item.name === data[d].username) {
            if (newUser === false) Alert.alert('User already exists')
            flag = false
          }
        }
        if (flag) {
          newUser = true
          db.ref('/users').push({
            username: item.name,
            password: item.password,
            coins: item.coins
          })
          Alert.alert('Signed up successfully...\n Redirecting to home page')
          this.props.navigation.replace('MainPage', {
            username: item.username,
            userCoins: item.coins
          })
        }
      })
    }

    const user = Object()
    if (this.state.pass === '' || this.state.name === '') {
      this.setState({
        err_msg: 'Fields cannot be empty'
      })
      return
    }
    if (this.state.pass !== this.state.pass2) {
      this.setState({
        err_msg: 'Passwords does not match'
      })
      return
    }
    if (/\s/.test(this.state.name)) {
      this.setState({
        err_msg: 'Username must not include spaces'
      })
      return
    }
    user.coins = 0
    user.name = this.state.name
    user.password = this.state.pass
    LoginUser(user)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={stylesTest.title}>Sign Up</Text>
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Username"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Password"
          onChangeText={pass => this.setState({ pass })}
        />
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Enter password again"
          onChangeText={pass2 => this.setState({ pass2 })}
        />
        <TouchableOpacity
          style={stylesTest.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={stylesTest.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={stylesTest.errorMassage}>{this.state.err_msg}</Text>
      </View>
    )
  }
}

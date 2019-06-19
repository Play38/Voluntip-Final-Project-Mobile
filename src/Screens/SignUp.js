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
    let d, once, object
    const LoginUser = item => {
      let flag = true
      let newUser = false
      db.ref('/users').on('value', snapshot => {
        const data = Object.values(snapshot.val())
        once = 1
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
          if(once) {
            once = 0
            db.ref('/users').on('value', snapshot => {
              const data = Object.values(snapshot.val())
            for (d in data) {
              if (item.name === data[d].username) {
                if (item.password === data[d].password) {
                  object = data[d]
                }
              }
            }
            this.props.navigation.replace('MainPage', {
              username: object.username,
              userCoins: object.coins
            })
            })
          }
        }
      })
    }

    const user = Object()
    if (this.state.pass === '' || this.state.name === '' || this.state.pass2 === '') {
      Alert.alert('Fields cannot be empty')
      return
    }
    if (this.state.pass !== this.state.pass2) {
      Alert.alert('Password does not match')
      return
    }
    if (/\s/.test(this.state.name)) {
      Alert.alert('Username must not include spaces')
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

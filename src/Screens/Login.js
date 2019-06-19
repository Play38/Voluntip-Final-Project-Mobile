import React, { Component } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import db from '../config'
import stylesTest from '../Comp/Styles/LoginStyle'

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleSubmit() {
    let d, once
    const LoginUser = item => {
      let object
      let flag = true
      db.ref('/users').on('value', snapshot => {
        const data = Object.values(snapshot.val())
        once = 1
        for (d in data) {
          if (item.name === data[d].username) {
            if (item.password === data[d].password) {
              flag = false
              object = data[d]
            }
          }
        }

        if (!flag) {
          this.props.navigation.replace('MainPage', {
            username: object.username,
            userCoins: object.coins,
            left: null
          })
        } else if (once) {
          once = 0
          Alert.alert(`Password is incorrect or no\nsuch user found`)
        }
      })
    }
    const user = Object()
    if (/\s/.test(this.state.name)) {
      Alert.alert(`Username must not include spaces`)
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
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          style={stylesTest.itemInput}
          placeholder="Password"
          onChangeText={pass => this.setState({ pass })}
        />
        <TouchableOpacity
          style={stylesTest.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={stylesTest.buttonText}>Login</Text>
        </TouchableOpacity>
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

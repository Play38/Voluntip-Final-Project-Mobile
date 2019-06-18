import React, { Component } from 'react'
import { Text, View, Alert, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import db from '../config'
import { PropTypes } from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  },
  greetTxt: {
    fontSize: 40
  },
  descTxt: {
    fontSize: 18,
    padding: 10,
    alignSelf: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 25,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#5374d6',
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    color: '#5374d6',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#70c9f5',
    marginTop: 10,
    width: '95%',
    justifyContent: 'center'
  },
  errorMassage: {
    fontSize: 25,
    marginTop: 10,
    alignSelf: 'center'
  }
})

export default class RedeemPage extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      err_msg: '',
      input: ''
    }

    this.handleSubmit12 = this.handleSubmit12.bind(this)
  }

  handleSubmit12() {
    if (this.state.input !== '1234') {
      this.setState({
        err_msg: 'Code is invalid'
      })
    } else {
      const ref = db.ref('/users')
      let data, key
      ref
        .orderByChild('username')
        .equalTo(this.state.id)
        .on('value', function(snapshot) {
          data = Object.values(snapshot.val())
          snapshot.forEach(function(child) {
            key = child.key
          })
        })
      db.ref('/users')
        .child(String(key))
        .update({ coins: data[0].coins + 100 })
      Alert.alert('You have been credited with 100 Coins')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greetTxt}>Hello {this.state.id}!</Text>
        <Text style={styles.descTxt}>
          Please enter the code you recived in the box bellow to redeem the reward for volunteering
        </Text>
        <TextInput
          style={styles.itemInput}
          placeholder="Enter Code"
          onChangeText={text => this.setState({ input: text })}
        />
        <TouchableOpacity style={styles.button} underlayColor="white" onPress={this.handleSubmit12}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.errorMassage}>{this.state.err_msg}</Text>
      </View>
    )
  }
}

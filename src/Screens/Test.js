import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './containerStyle'

export default class App extends Component {
    static navigationOptions = {
        title: 'Test',
    };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

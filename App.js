import React, { Component } from 'react'
import AppNavigator from './src/AppNavigator'
import { createAppContainer } from 'react-navigation'
import { YellowBox } from 'react-native'

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
YellowBox.ignoreWarnings(['Setting a timer for a long', 'Warning'])

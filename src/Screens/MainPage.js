import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { BottomNavigation } from 'react-native-paper'
import RedeemPage from './RedeemPage'
import Store from './Store'
import Map from './Map'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#87ceeb'
  }
})
export default class MyComponent extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired
  }
  static navigationOptions = {
    title: 'Voluntip'
  }
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'store', title: 'Store', icon: 'shopping-cart' },
        { key: 'code', title: 'Redeem Code', icon: 'code' }
      ]
    }
  }
  HomeRoute = () => <Map />

  StoreRoute = () => <Store id={this.props.navigation.getParam('username', 0)} />

  CodeRoute = () => <RedeemPage id={this.props.navigation.getParam('username', 0)} />

  handleIndexChange = index => this.setState({ index })

  renderScene = BottomNavigation.SceneMap({
    home: this.HomeRoute,
    store: this.StoreRoute,
    code: this.CodeRoute
  })

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        barStyle={styles.bar}
      />
    )
  }
}

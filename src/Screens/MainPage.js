import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import { BottomNavigation } from 'react-native-paper';

export default class MyComponent extends React.Component {
    static propTypes = {
        navigation: PropTypes.any.isRequired
    }
    static navigationOptions = {
        title: 'Main Page'
    };
  state = {
    index: 0,
    routes: [
      { key: 'store', title: 'Store', icon: 'shopping-cart' },
      { key: 'rewards', title: 'My Rewards', icon: 'shopping-basket' },
      { key: 'code', title: 'Enter Code', icon: 'code' },
    ],
  };
   StoreRoute = () =>  <View style={styles.container}>
   <Text>username: {this.props.navigation.getParam('username', 0)}</Text>
   <Text>coins: {this.props.navigation.getParam('userCoins', 10)}</Text>
    </View>

   RewardsRoute = () => <Text>TODO</Text>;

   CodeRoute = () => <Text>TODO</Text>;

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    store: this.StoreRoute,
    rewards: this.RewardsRoute,
    code: this.CodeRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle = {{ backgroundColor: '#87ceeb' }}
      />
    );
  }
}
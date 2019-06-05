import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import { BottomNavigation } from 'react-native-paper';
import RedeemPage from './RedeemPage'
import MapView, { Marker } from 'react-native-maps';




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          cost: `Voluntip coins ${getRandomInt(20, 100)}`
        }
      ]
    })
  }
    static propTypes = {
        navigation: PropTypes.any.isRequired
    }
    static navigationOptions = {
        title: 'Main Page'
    };
  state = {
    index: 0,
    routes: [
      { key : 'home', title: 'Home', icon: 'home'},
      { key: 'store', title: 'Store', icon: 'shopping-cart' },
      { key: 'rewards', title: 'My Rewards', icon: 'shopping-basket' },
      { key: 'code', title: 'Redeem Code', icon: 'code' },
    ],
  };
    HomeRoute= () =>  <View style={styles.container}>
    <Text>username: {this.props.navigation.getParam('username', 0)}</Text>
    <Text>coins: {this.props.navigation.getParam('userCoins', 10)}</Text>
    </View>
    StoreRoute = () => <Text>TODO</Text>

    RewardsRoute = () => <Text>TODO</Text>

    CodeRoute = () => <RedeemPage id = {this.props.navigation.getParam('username', 0)}/>

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: this.HomeRoute,
    store: this.StoreRoute,
    rewards: this.RewardsRoute,
    code: this.CodeRoute,
  });


  render() {
    return (
        <MapView
            style={stylesMap.container}
            initialRegion={{
              latitude: 32.090034,
              latitudeDelta: 0.01,
              longitude: 34.803028,
              longitudeDelta: 0
            }}
            onPress={this.handlePress}
        >
          {this.state.markers.map((marker) => {
            return (
                <Marker {...marker} >
                  <View style={stylesMap.marker}>
                    <Text style={stylesMap.text}>{marker.cost}</Text>
                  </View>
                </Marker>
            )
          })}
        </MapView>
    );
  }
}

const stylesMap = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

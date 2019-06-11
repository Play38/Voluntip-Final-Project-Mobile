import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import { BottomNavigation } from 'react-native-paper';
import RedeemPage from './RedeemPage'
import Store from './Store'
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


export default class MyComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markers: [{
        coordinate:{ latitude: 32.089015, longitude: 34.803732 },
        tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
        name: 'Lman'
      },
        {
          coordinate:{ latitude: 32.091713, longitude: 34.798789 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Lasot'
        },
        {
          coordinate:{ latitude: 32.128070, longitude: 34.800116 },
          tips: `Voluntip coins: 1`,
          name: 'Gutty'
        },
        {
          coordinate:{ latitude: 32.084535, longitude: 34.802367 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Latet'
        },
        {
          coordinate:{ latitude: 32.094707, longitude: 34.807199 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Park Help'
        },
      ],
      index: 0,
      routes: [
        { key : 'home', title: 'Home', icon: 'home'},
        { key: 'store', title: 'Store', icon: 'shopping-cart' },
        { key: 'code', title: 'Redeem Code', icon: 'code' },

      ]
    }
  }
    static propTypes = {
        navigation: PropTypes.any.isRequired
    }
    static navigationOptions = {
        title: 'Voluntip'
    };
    HomeRoute= () =>  <MapView
        style={stylesMap.container}
        initialRegion={{
          latitude: 32.090034,
          latitudeDelta: 0.01,
          longitude: 34.803028,
          longitudeDelta: 0
        }}
    >
      {this.state.markers.map((marker) => {
        return (
            <Marker {...marker} >
              <View style={stylesMap.marker}>
                <Text style={stylesMap.text}>{marker.name}{'\n'}{marker.tips}</Text>
              </View>
              <View style = {stylesMap.markIcon}>
                <Icon name="map-marker" size={30} color="#900"  />
              </View>
            </Marker>
        )
      })}
    </MapView>
    StoreRoute = () => <Store id = {this.props.navigation.getParam('username', 0)}/>

    CodeRoute = () => <RedeemPage id = {this.props.navigation.getParam('username', 0)}/>

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: this.HomeRoute,
    store: this.StoreRoute,
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
    )
  }
}

const stylesMap = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  },
  markIcon: {
    paddingLeft:52
  }
});
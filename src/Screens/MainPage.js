import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from '../Comp/Styles/containerStyle'
import { BottomNavigation } from 'react-native-paper';
import RedeemPage from './RedeemPage'
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
let once = 1
const myIcon = <Icon name="rocket" size={30} color="#900"  />;


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
  }
  componentDidMount() {
    this.setState({
      markers: [{
        coordinate:{ latitude: 32.089015, longitude: 34.803732 },
        cost: `Voluntip coins ${getRandomInt(20, 100)}`,
        name: 'Lman'
      },
        {
          coordinate:{ latitude: 32.091713, longitude: 34.798789 },
          cost: `Voluntip coins ${getRandomInt(20, 100)}`,
          name: 'Lasot'
        },
        {
          coordinate:{ latitude: 32.128070, longitude: 34.800116 },
          cost: `Voluntip coins 1`,
          name: 'Gutty'
        },
        {
          coordinate:{ latitude: 32.084535, longitude: 34.802367 },
          cost: `Voluntip coins ${getRandomInt(20, 100)}`,
          name: 'Latet'
        },
        {
          coordinate:{ latitude: 32.094707, longitude: 34.807199 },
          cost: `Voluntip coins ${getRandomInt(20, 100)}`,
          name: 'Park Help'
        },
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
//  markers: [{
//         coordinate: [32.090034,3],
//         cost: `Voluntip coins ${getRandomInt(20, 100)}`
//       }]



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
        >
          {this.state.markers.map((marker) => {
            return (
                <Marker {...marker} >
                  <View style={stylesMap.marker}>
                    <Text style={stylesMap.text}>{marker.name}{'\n'}{marker.cost}</Text>
                  </View>
                  <View style = {stylesMap.markIcon}>
                    <Icon name="map-marker" size={30} color="#900"  />
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
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  },
  markIcon: {
    paddingLeft:50
  }
});

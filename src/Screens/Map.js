import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import MapView, { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'

const stylesMap = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  markIcon: {
    paddingLeft: 52
  }
})

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default class Map extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      markers: [
        {
          coordinate: { latitude: 32.089015, longitude: 34.803732 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Lman'
        },
        {
          coordinate: { latitude: 32.091713, longitude: 34.798789 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Lasot'
        },
        {
          coordinate: { latitude: 32.12807, longitude: 34.800116 },
          tips: `Voluntip coins: 1`,
          name: 'Gutty'
        },
        {
          coordinate: { latitude: 32.084535, longitude: 34.802367 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Latet'
        },
        {
          coordinate: { latitude: 32.094707, longitude: 34.807199 },
          tips: `Voluntip coins: ${getRandomInt(20, 100)}`,
          name: 'Park Help'
        }
      ]
    }
  }

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
        {this.state.markers.map(marker => {
          return (
            <Marker {...marker} key={marker.id}>
              <View style={stylesMap.marker}>
                <Text style={stylesMap.text}>
                  {marker.name}
                  {'\n'}
                  {marker.tips}
                </Text>
              </View>
              <View style={stylesMap.markIcon}>
                <Icon name="map-marker" size={30} color="#900" />
              </View>
            </Marker>
          )
        })}
      </MapView>
    )
  }
}

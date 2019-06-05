import React, { Component } from 'react'
import {Text, View, Image , TextInput, StyleSheet,TouchableOpacity} from 'react-native'

export default class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.id,
          coins: this.props.coins,
          image: this.props.img,
          name: this.props.name,
          desc: this.props.desc
        }
    }
  render() {
    return (
    <View style= {styles.container}>
       <Image
          style={styles.img}
          source={{uri:this.state.image}}
        />
        <Text style = {styles.title}>{this.state.name}</Text>
        <Text style = {styles.desc}>{this.state.desc}</Text>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5
  },
  img:{
    width: 50, height: 50
  },
  title:{
    paddingLeft: 5,
    fontSize: 20,
  },
  desc:{
    paddingLeft: 5,
    fontSize: 10,
  }
})
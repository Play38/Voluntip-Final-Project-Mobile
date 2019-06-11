import React, { Component } from 'react'
import {Text, View, Image , Alert, StyleSheet,TouchableOpacity} from 'react-native'
import {db} from "../config"

export default class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.id,
          image: this.props.img,
          name: this.props.name,
          price: this.props.price,
          updateCoins: this.props.update
        }
    }
  makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
  handlePurchase = () =>{
    var ref = db.ref('/users')
    let data, key, price = this.state.price
    ref.orderByChild('username').equalTo(this.state.id).on("value", function(snapshot) {
        data = Object.values(snapshot.val())
        snapshot.forEach((function(child) {
         key = child.key
        })
    )})
    if(data[0].coins < this.state.price){
      Alert.alert("Not enough coins")
    }
    else{
      this.state.updateCoins(data[0].coins - price)
      db.ref('/users').child(String(key)).update({coins: data[0].coins - price})
      Alert.alert(`You Purchased ${this.state.name}\nYour code is:${this.makeid(8)}`)
    }
  }
  render() {
    return (
    <View style= {styles.container}>
       <Image
          style={styles.img}
          source={{uri:this.state.image}}
        />
        <View style={{ flex: 1, color:'#000' }} >
          <Text style = {styles.title}>{this.state.name}</Text>
          <Text style = {styles.desc}>Price: {String(this.state.price)}</Text>
        </View>
        <TouchableOpacity style = {styles.button}
        onPress = {this.handlePurchase}
        >
          <Text style = {styles.buttonText}>Purchase</Text>
        </TouchableOpacity>
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
    fontSize: 15,
  },
  button:{
    marginLeft: 'auto',
    color:'#5374d6',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#70c9f5',
    marginTop: 10,
    justifyContent: 'center',
    marginRight: 20,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
})
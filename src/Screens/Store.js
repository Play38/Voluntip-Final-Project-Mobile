import React, { Component } from 'react'
import {Text, View, Alert , ScrollView, StyleSheet,TouchableOpacity} from 'react-native'
import {db} from "../config"
import ListItem from "../Comp/ListItem"
export default class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
          id: this.props.id,
        }
    }
  componentDidMount(){
        var ref = db.ref('/users')
        let data
        ref.orderByChild('username').equalTo(this.state.id).on("value", function(snapshot) {
            data = Object.values(snapshot.val())
            snapshot.forEach((function(child) {
             key = child.key
            })
        )})
        this.setState({
            coins : data[0].coins
        })
    }
  
  render() {
    return (
    <ScrollView style= {styles.container}>
    <View style= {styles.balanceBox}>
        <Text style = {styles.balance}>Balance: {this.state.coins} coins</Text>
    </View>
    <ListItem 
    id = {this.state.id}
    coins = {this.state.coins}
    price = {100}
    name = {"AAAAAAA"}
    img = {'https://facebook.github.io/react-native/docs/assets/favicon.png'}
    />
    <ListItem 
    id = {this.state.id}
    coins = {this.state.coins}
    price = {200}
    name = {"BBBBBBB"}
    img = {'https://facebook.github.io/react-native/docs/assets/favicon.png'}
    />
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    balance: {
        fontSize: 20,
        padding: 5,
        color: '#FFF',
    },
    balanceBox:{
        backgroundColor: '#9CB7EC',
        width: '100%',
        height: 50
    },
    descTxt: {
        fontSize: 18,
        padding: 10,
        alignSelf: "center",
    },
    itemInput: {
        height: 50,
        padding: 4,
        width:'95%',
        alignSelf: "center",
        marginBottom: 25,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: '#5374d6',
        backgroundColor:'white'
    },    
    buttonText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        color:'#5374d6',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#70c9f5',
        marginTop: 10,
        width:'95%',
        justifyContent: 'center',
    },
})
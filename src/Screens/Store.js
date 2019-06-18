import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import db from '../config'
import ListItem from '../Comp/ListItem'
import { PropTypes } from 'prop-types'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  balance: {
    fontSize: 20,
    padding: 5,
    color: '#FFF'
  },
  balanceBox: {
    backgroundColor: '#9CB7EC',
    width: '100%',
    height: 50
  }
})

export default class Store extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      coins: 0,
      nom: 0
    }
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      const ref = db.ref('/users')
      let data
      ref
        .orderByChild('username')
        .equalTo(this.state.id)
        .on('value', function(snapshot) {
          data = Object.values(snapshot.val())
        })
      this.setState({
        coins: data[0].coins
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.balanceBox}>
          <Text style={styles.balance}>Balance: {this.state.coins} coins</Text>
        </View>
        <ListItem
          id={this.state.id}
          coins={this.state.coins}
          price={100}
          name={'Science camp'}
          img={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
          update={coins => this.setState({ coins })}
        />
        <ListItem
          id={this.state.id}
          coins={this.state.coins}
          price={200}
          name={'Albums'}
          img={
            'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/62100067_1702640313171655_5939079651627368448_o.jpg?_nc_cat=108&_nc_ht=scontent.ftlv6-1.fna&oh=dcf7721c85d0a96fde8e8598df0bc5bc&oe=5D9A3D29'
          }
          update={coins => this.setState({ coins })}
        />
        <ListItem
          id={this.state.id}
          coins={this.state.coins}
          price={600}
          name={'Video Game'}
          img={'https://i.pinimg.com/originals/06/71/ce/0671ce5ba3dae0f243221aba73a63e2f.png'}
          update={coins => this.setState({ coins })}
        />
      </ScrollView>
    )
  }
}

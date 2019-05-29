import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './containerStyle'
import ItemComponent from '../ItemComponent';
import { db } from '../config';

let itemsRef = db.ref('/users');

export default class App extends Component {
    static navigationOptions = {
        title: 'TestView',
    };
    state = {
        items: []
    };
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.items.length > 0 ? (
                    <ItemComponent items={this.state.items} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
        )
    }
}

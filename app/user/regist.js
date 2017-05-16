import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';



let usernameRg, passwordRg

class Regist extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./bt.jpeg')}
          >
            <Text>我是群众</Text>
          </Image>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./bt.jpeg')}
          >
            <Text>我是医生</Text>
          </Image>
        </TouchableHighlight>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


module.exports = Regist
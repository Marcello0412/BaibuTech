import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import Header from '../common/header'


class Regist extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    return (
      <View style={styles.container}>
        <Header title='注册账号' bgColor='#8FBC8F' />
        <View style={styles.body}>
          <Text>注册</Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  body:{
    flex: 1
  }
})


module.exports = Regist
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../common/header'


class Chat extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Header title='转诊消息' />
        <View style={styles.body}>

        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  body:{
    flex: 1
  }
})


module.exports = Chat
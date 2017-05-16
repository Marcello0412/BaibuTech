import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../common/header'


class Inform extends Component {
  render(){
    return(
      <View style={styles.container}>
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


module.exports = Inform
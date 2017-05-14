import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../common/header'


class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title='个人中心' />
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


module.exports = User
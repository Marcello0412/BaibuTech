import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <View style={[styles.header, {backgroundColor:this.props.bgColor || '#3CB371'}]}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#3CB371'
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '800'
  }
})

module.exports = Header;
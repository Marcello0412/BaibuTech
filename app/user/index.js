import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.avatarBox}>
            <Image
              style={styles.avatar}
              source={{uri: this.props.user.avatar}}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.certifiedBox}>
            <View style={styles.certified}>
              <Text style={styles.certifiedText}>未认证</Text>
              <Icon name="vimeo" style={styles.certifiedIcon}/>
              <Icon name="angle-right" style={styles.certifiedIcon}/>
            </View>
          </TouchableHighlight>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1
  },
  certifiedBox: {},
  certified: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 5
  }
})


module.exports = User
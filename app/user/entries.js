import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Request from '../common/request'
import Config from '../common/config'
import Regist from './regist'
import RegularLogin from './regularLogin'
import DoctorLogin from './doctorLogin'


class Entries extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={[styles.idChooseBtn, styles.btnBlue]}
            underlayColor='#26bdfd'
            activeOpacity={1}
            onPress={() => {
              this.props.navigator.push({
                title: '普通用户登录',
                component: RegularLogin,
                translucent: false,
                leftButtonTitle: '返回',
                passProps: {
                  login: this.props.login
                },
                onLeftButtonPress: () => { this.props.navigator.pop()}
              })
            }} >
            <Text style={styles.idChooseBtnText}>普通用户</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.idChooseBtn,styles.btnGreen]}
            underlayColor='#25b362'
            activeOpacity={1}
            onPress={() => {
              this.props.navigator.push({
                title: '认证医师登录',
                component: DoctorLogin,
                translucent: false,
                leftButtonTitle: '返回',
                passProps: {
                  login: this.props.login
                },
                onLeftButtonPress: () => { this.props.navigator.pop()}
              })
            }} >
            <Text style={styles.idChooseBtnText}>认证医师</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  btnContainer: {
    marginTop: 140
  },
  idChooseBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 15,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
  btnBlue: {
    backgroundColor: '#26b8f2'
  },
  btnGreen: {
    backgroundColor: '#3CC85A'
  },
  idChooseBtnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '800'
  },

  // DoctorLogin
  inputGroup: {
    marginHorizontal: 15,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  label: {
    flexBasis: 24,
    fontSize: 18, color: '#777', margin: 4,
    fontWeight: '600',
  },
  input: {
    flexBasis: 44,
    fontSize: 18,
  },
  loginBtn: {
    marginTop: 30,
    fontSize: 22,
    height: 50,
    lineHeight: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    color: '#fff'
  },
  registBtn: {
    marginTop: 20,
    marginRight: 15,
    fontSize: 16,
    color: '#555',
    alignSelf: 'flex-end'
  }

})

module.exports = Entries
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button'

import Request from '../common/request'
import Config from '../common/config'
import Regist from './regist'


class DoctorLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      readyLogin: false
    }
    this._changeText = this._changeText.bind(this)
    this._readyLoginStyle = this._readyLoginStyle.bind(this)
    this._postLogin = this._postLogin.bind(this)
    this._toRegist = this._toRegist.bind(this)
  }

  _postLogin() {
    Request.post(Config.api.base + Config.api.login, {
      username: this.state.username,
      password: this.state.password
    })
      .then(data => {
        if (data.success) {
          let user = data.data
          this.props.login({user: user, identify: 'doctor'})
        }
      })
      .catch((err) => {
        throw err
      })
  }

  _toRegist() {
    this.props.navigator.push({
      title: '注册账户',
      component: Regist,
      translucent: false,
      leftButtonTitle: '返回',
      onLeftButtonPress: () => {
        this.props.navigator.pop()
      }
    })
  }

  _changeText() {
    if (this.state.username !== '' && this.state.password !== '') {
      this.setState({
        readyLogin: true
      })
    } else {
      this.setState({
        readyLogin: false
      })
    }
  }

  _readyLoginStyle() {
    return this.state.readyLogin ? {backgroundColor: '#009000'} : {backgroundColor: '#77bb77'}
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.inputGroup, {marginTop: 80}]}>
          <Text style={styles.label}>工号</Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text)=>{
              this.setState({username:text}, () => {
                this._changeText();
              })

            }}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            keyboardType="default"
            placeholder='请输入工号'
            maxLength={16}
            clearButtonMode='while-editing'
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>密码</Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text)=>{
                this.setState({password:text}, () => {
                  this._changeText();
                })
              }}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            keyboardType="numeric"
            placeholder='密码'
            maxLength={16}
            clearButtonMode='while-editing'
          />
        </View>
        <Button
          onPress={this._postLogin}
          style={[styles.loginBtn, this._readyLoginStyle()]}
          disabled={!this.state.readyLogin}
        >登 录
        </Button>
        <Text
          onPress={this._toRegist}
          style={styles.registBtn}
        >快速注册
        </Text>
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
    backgroundColor: '#25a162'
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

module.exports = DoctorLogin
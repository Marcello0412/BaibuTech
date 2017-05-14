import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Button from 'react-native-button'

import Request from '../common/request'
import Config from '../common/config'
import Header from '../common/header'
import Regist from './regist'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goRegist: false,
      username: '',
      password: '',
      goLogin: false
    }
    this._changeText = this._changeText.bind(this)
    this._readyLoginStyle = this._readyLoginStyle.bind(this)
    this.postLogin = this.postLogin.bind(this)
    this._regist = this._regist.bind(this)
  }
  postLogin() {
    Request.post(Config.api.base + Config.api.login, {
      username: this.state.username,
      password: this.state.password
    })
      .then(data => {
        console.log(data)
        if (data.success) {
          let user = data.data
          this.props.login(user)
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  _regist() {
    this.setState({
      goRegist: true
    })
  }

  _changeText() {
    if (this.state.username !== '' && this.state.password !== '') {
      this.setState({
        goLogin: true
      })
    } else {
      this.setState({
        goLogin: false
      })
    }
  }

  _readyLoginStyle() {
    console.log(this.state.goLogin)
    return this.state.goLogin ? {backgroundColor: '#009000'} : {backgroundColor: '#90bb91'}
  }

  render() {
    if (this.state.goRegist) {
      return (
        <Regist />
      )
    }
    return (
      <View style={styles.container}>
        <Header title='登录界面' bgColor='#8FBC8F'/>
        <View style={styles.body}>
          <Text style={styles.label}>用户名</Text>
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
            placeholder='请输入用户名'
            maxLength={16}
          />
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
          />
          <Button
            onPress={this.postLogin}
            style={[styles.loginBtn, this._readyLoginStyle()]}
            disabled={!this.state.goLogin}
          >登 录
          </Button>
          <Text
            onPress={this._regist}
            style={styles.registBtn}
          >快速注册
          </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#FFF'
  },
  body: {
    flex: 1, paddingTop: 50
  },
  label: {
    fontSize: 18, color: '#777', margin: 4,
    marginLeft: 15,
    fontWeight: '600',
  },
  input: {
    height: 80,
    paddingLeft: 15,
    borderColor: 'transparent',
    borderWidth: 1,
    fontSize: 18
  },
  loginBtn: {
    marginTop: 20,
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


module.exports = Login
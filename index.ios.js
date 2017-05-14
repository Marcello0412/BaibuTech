/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import Chat from './app/chat/index'
import Consult from './app/consult/index'
import Custom from './app/custom/index'
import User from './app/user/index'
import Login from './app/user/login'
import Request from './app/common/request'

import Icon from 'react-native-vector-icons/FontAwesome'


export default class BaibuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'user',
      logined: false,
      user: null
    };
    this._login = this._login.bind(this)
  }
  _login(user){
    console.log(user)
    this.setState({
      logined: true,
      user: user
    }, ()=> {
      console.log(this.state.logined)
    })
  }
  render() {
    if (!this.state.logined) {
      return (
        <Login login={this._login} />
      )
    }
    return (
      <TabBarIOS
        unselectedTintColor="#929292"
        tintColor="#228B22"
        barTintColor="#fff">
        <Icon.TabBarItemIOS
          title="咨询列表"
          iconName="list-ul"
          selectedIconName="list-ul"
          iconSize={23}
          selected={this.state.selectedTab === 'consult'}
          onPress={() => {
            this.setState({
              selectedTab: 'consult',
            })
          }}
        >
          <Consult />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="签约群众"
          iconName="user-plus"
          selectedIconName="user-plus"
          iconSize={23}
          selected={this.state.selectedTab === 'custom'}
          onPress={() => {
              this.setState({
                selectedTab: 'custom',
              })
            }}
        >
          <Custom class={styles.container}/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="转诊消息"
          iconName="plus-square-o"
          selectedIconName="plus-square"
          iconSize={23}
          selected={this.state.selectedTab === 'chat'}
          onPress={() => {
              this.setState({
                selectedTab: 'chat',
              })
            }}
        >
          <Chat />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="个人中心"
          iconName="user-o"
          selectedIconName="user-o"
          iconSize={23}
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
              this.setState({
                selectedTab: 'user',
              })
            }}
        >
          <User />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

AppRegistry.registerComponent('BaibuApp', () => BaibuApp);

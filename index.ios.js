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
  TabBarIOS,
  NavigatorIOS,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Storage from 'react-native-storage'

import Inform from './app/chat/index'
import Consult from './app/consult/index'
import Custom from './app/custom/index'
import User from './app/user/index'
import Entries from './app/user/entries'
import DoctorLogin from './app/user/doctorLogin'
import RegularLogin from './app/user/regularLogin'
import Request from './app/common/request'

// 存储初始化
var storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,
  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,
  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 30 * 1000 * 3600 * 24, // 三十天
  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,
  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  // sync: require('./app/common/sync')  // 这个sync文件是要你自己写的
})

export default class BaibuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'user',
      user: null,
      identify: 'unknown',
      starting: true,
      logined: false,
    }
    this._login = this._login.bind(this)
    this._getEntries = this._getEntries.bind(this)
  }

  componentDidMount() {
    // 用于清除数据，测试用
    // storage.remove({ key: 'userData'});
    storage.load({key: 'userData'})
      .then((data) => {
        this.setState({
          user: data.user,
          identify: data.identify ? data.identify : 'unknown',
          starting: false
        })
      })
      .catch(err => {
        switch (err.name) {
          case 'NotFoundError':
            this.setState({
              starting: false
            });
            break;
          case 'ExpiredError':
            this.setState({
              starting: false
            });
            break;
        }
        // console.log(err)
      })
  }

  _login(data) {
    this.setState({
      logined: true,
      data: data
    }, () => {
      storage.save({
        key: 'userData',
        data: data
      })
    })
  }

  _getEntries () {
    switch (this.state.identify) {
      case 'unknown':
        return {component: Entries, title: '请选择入口'}
      case 'regular':
        return {component: RegularLogin, title: '普通用户登录'}
      case 'doctor':
        return {component: DoctorLogin, title: '认证医师登录'}
    }
  }

  render() {
    if (this.state.starting) {
      return (<View></View>)
    }
    if (!this.state.logined) {
      return (
        <NavigatorIOS
          initialRoute={{
              component: this._getEntries().component,
              title: this._getEntries().title,
              passProps: {
                login: this._login
              },
              translucent: false,
              leftButtonTitle: '',
            }}
          style={{flex: 1}}
        />
      )
    }
    return (
      <TabBarIOS
        unselectedTintColor="#929292"
        tintColor="#3CC85A"
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
          <NavigatorIOS
            initialRoute={{
              component: Consult,
              title: '咨询列表',
              passProps: {},
              translucent: false,
              leftButtonTitle: ''
            }}
            style={{flex: 1}}
            barTintColor="#3CC85A"
            titleTextColor="#fff"
          />
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
          <NavigatorIOS
            initialRoute={{
              component: Custom,
              title: '签约群众',
              passProps: {},
              translucent: false,
              leftButtonTitle: ''
            }}
            style={{flex: 1}}
            barTintColor="#3CC85A"
            titleTextColor="#fff"
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="转诊消息"
          iconName="plus-square-o"
          selectedIconName="plus-square"
          iconSize={23}
          selected={this.state.selectedTab === 'inform'}
          onPress={() => {
              this.setState({
                selectedTab: 'inform',
              })
            }}
        >
          <NavigatorIOS
            initialRoute={{
              component: Inform,
              title: '转诊消息',
              passProps: {},
              translucent: false,
              leftButtonTitle: ''
            }}
            style={{flex: 1}}
            barTintColor="#3CC85A"
            titleTextColor="#fff"
          />
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
          <NavigatorIOS
            initialRoute={{
              component: User,
              title: '个人中心',
              passProps: {
                user: this.state.user
              },
              translucent: false,
              leftButtonTitle: ''
            }}
            style={{flex: 1}}
            barTintColor="#3CC85A"
            titleTextColor="#fff"
          />
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
  }
});

AppRegistry.registerComponent('BaibuApp', () => BaibuApp);

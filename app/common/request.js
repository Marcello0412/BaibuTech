'use strict'

// 参数拼接模块
import QueryString from 'query-string'
// 对象的替换、继承
import _ from 'lodash'
import Config from './config'
import Mock from 'mockjs'

let request = {}

request.get = function (url, params) {
  if (params) {
    url += '?' + QueryString.stringify(params)
  }
  return fetch(url)
    .then(response => response.json())
    .then(response => Mock.mock(response))
}

request.post = function (url, body) {
  let options = _.extend(Config.header, {
    body: JSON.stringify(body)
  })
  return fetch(url, options)
    .then(response => response.json())
    .then(response => Mock.mock(response))
}

module.exports = request
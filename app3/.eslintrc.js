/*
 * @Author: your name
 * @Date: 2020-02-22 16:58:04
 * @LastEditTime: 2020-02-22 17:03:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app2\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

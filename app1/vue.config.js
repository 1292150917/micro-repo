/*
 * @Author: your name
 * @Date: 2020-02-22 17:07:43
 * @LastEditTime: 2020-02-22 17:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhlc:\Users\zhamgzifang\Desktop\wqd\app1\vue.config.js
 */
const port = 8080;
module.exports = {
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}
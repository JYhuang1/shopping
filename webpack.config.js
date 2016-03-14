/**
 * Created by henry on 2016/3/14.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        admin: './admin/admin.js',
        consumer: './consumer/consumer.js'
    },
    plugins:[
        //取消打包js文件里面的空格
        new webpack.optimize.UglifyJsPlugin()
    ],
    //打包输出目录
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',//表明获取bundle.js文件的路径
        filename: '[name].bundle.js'//name读取entry里的key
    }

}
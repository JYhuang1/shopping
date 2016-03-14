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
        //ȡ�����js�ļ�����Ŀո�
        new webpack.optimize.UglifyJsPlugin()
    ],
    //������Ŀ¼
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',//������ȡbundle.js�ļ���·��
        filename: '[name].bundle.js'//name��ȡentry���key
    }

}
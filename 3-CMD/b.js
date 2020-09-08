// 定义有依赖的模块
define(function(require, exports, module) {
    // 同步引入
    let a = require('./a');
    let newMsg = a.getMsg();

    // 异步引入
    require.async('./c', function (cModule) {
        console.log('c 模块加载完成' ,cModule);
    })

    // exports.newMsg = newMsg
    // exports.a = 1
    module.exports = {
        newMsg,
        a: 1
    }
});
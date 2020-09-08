// 定义没有依赖的模块
define(function (require, exports, module) {
    var msg = 'from a file msg'
    function getMsg() {
      return msg;
    }
    exports.getMsg = getMsg
})
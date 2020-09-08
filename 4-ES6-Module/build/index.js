'use strict';

var _a = require('./a');

console.log('original person: ', _a.info.person);
_a.info.changeName();

// 模块内部变化影响不到 export 出来的值
console.log('after change person: ', _a.info.person);
// 基本语法

// 单个 导出(按顺序)
module.exports.age = 1
module.exports.foo = function() {}
exports.a = 'hello'

// 整体导出, 如果使用了下面这个整体导出则上面的都单个导出都失效了
// module.exports = { 
//     age: 1, 
//     a: 'hello',
//     foo: function(){}
// }

// 整体导出不能用'exports'直接导出, 
// eg: exports = { age: 1, a: 'hello' }; 是错误的, 导入时就是{}
// exports 和 module.exports持有相同引用, 因为最后导出的是 module.exports, 
// 所以对 exports 进行赋值会导致 exports 操作的不再是 module.exports 的引用

console.log('base-export.js 执行')
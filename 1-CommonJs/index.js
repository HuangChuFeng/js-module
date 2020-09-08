var mod = require('./a');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3

// var promise = import('../4-ES6-Module/src/a');
// promise.then(res => {
//     console.log('promise: ', promise)
// }).catch(e => {})

// console.log('CommonJs => this: ', this) // {} 当前模块
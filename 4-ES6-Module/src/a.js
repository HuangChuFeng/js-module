// 重定向导出
export { BInfo } from './b';
// console.log(BInfo) // ReferenceError: BInfo is not defined

export let counter = 3;
export function incCounter() {
  counter++;
}

let defaultFake = 'as default msg';
// 重命名为默认导出
export { defaultFake as default }

module.exports.msg = 'cross msg'


// console.log('ES6 module => this: ', this) // undefined
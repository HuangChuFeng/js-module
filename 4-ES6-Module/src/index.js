import { counter, incCounter, BInfo, defaultMsg } from './a';
import * as a from './a';
// import defaultFake from './a'; // import default export

// console.log(defaultFake); // as default msg

console.log(counter);  // 3
incCounter();
console.log(counter); // 4

// console.log('BInfo: ', BInfo)
// console.log(defaultMsg); // undefined

// import './a'


// counter = 2; // readonly
// BInfo.msg = 'new msg in index file'; // 复杂类型可修改
// console.log(BInfo)




/*********************************** SyntaxError ****************************************/

// 1. import会自动提升到代码的顶层, export和import只能出现在代码的顶层
// if(true) {
//     import { counter, incCounter, BInfo, defaultMsg } from './a';
// }
// if(true) {
//     export let a = 1
// }

// 2. import的导入名不能为字符串或在判断语句中
// import 'defaultMsg' from './a'

// let name = 'Msg'
// import 'default' + name from './a'
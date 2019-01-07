/**
 * AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，
 * 这些 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功
 * 能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。
 */

// Function.prototype.before = function (beforefn) {
//   var __self = this; // 保存原函数的引用
//   return function () { // 返回包含了原函数和新函数的"代理"函数
//     beforefn.apply(this, arguments);
//     return __self.apply(this, arguments);
//   }
// };
// Function.prototype.after = function (afterfn) {
//   var __self = this;
//   return function () {
//     // 执行新函数，修正 this // 执行原函数
//     var ret = __self.apply(this, arguments);
//     afterfn.apply(this, arguments);
//     return ret;
//   }
// };
// var func = function () {
//   console.log(2);
// };
// func = func.before(function () {
//   console.log(1);
// }).after(function () {
//   console.log(3);
// });
// func(); //  1  2  3

export function aop() {
  Function.prototype.before = function(beforefn) {
    var __self = this; // 保存原函数的引用
    return function () { // 返回包含了原函数和新函数的"代理"函数
      beforefn.apply(this, arguments);
      return __self.apply(this, arguments);
    }
  };
  Function.prototype.after = function(afterfn) {
    var __self = this;
    return function () {
      // 执行新函数，修正 this // 执行原函数
      var ret = __self.apply(this, arguments);
      afterfn.apply(this, arguments);
      return ret;
    }
  };
}

// 使用方法：直接import 引入aop，并执行aop()即可；
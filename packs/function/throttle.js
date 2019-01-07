// 函数节流：将即将被执行的函数用 setTimeout 延迟一段时间执行。
// 如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求

/**
 * 
 * @param {Function} fn // 需要被延时的函数
 * @param {Number} interval // 需要延时的时间长度
 */

export function throttle(fn, interval) {
  var __self = fn, // 保存需要被延迟执行的函数引用
    firstTime = true, // 是否是第一次调用
    timer = null; // 定时器，存取setTimeout的变量
  return function () {
    var args = arguments,
      __me = this;
    if (firstTime) { // 如果是第一次调用，不需延迟执行
      __self.apply(__me, args);
      return firstTime = false;
    }
    if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
      return false;
    }
    timer = setTimeout(function () { // 延迟一段时间执行
      clearTimeout(timer);
      timer = null;
      __self.apply(__me, args);
    }, interval || 500);
  };
};

/**
 * 使用方式
 */

// 1.引入
// import { throttle } from '';
// 2.声明需要被延时节流执行的函数
// let f1 = function() { console.log('我是需要被延时节流执行的函数')}
// 3.注册
// let aa = throttle(f1, 5000);
// 4.调用
// aa();

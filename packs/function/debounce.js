/**
 * 
 * @param {Function} fn 需要被延迟的执行函数
 * @param {Number} delay 需要延时的时间
 */

export function debounce(fn, delay) {
  let counter;
  return function (args) {
    let _me = this;
    let _args = args;
    if (counter) {
      clearTomeout(counter);
    }
    counter = setTimeout(function () {
      fun.apply(_me, _args);
    }, delay);
  }
}

// // 模拟一段ajax请求
// function ajax(content) {
//   console.log('ajax request' + content);
// }

// const inputB = document.getElementById('abc');
// let debounceAjax = debounce(ajax, 500);
// inputB.addEventListener('keyup', function (e) {
//   debounceAjax(e.target.value);
// })
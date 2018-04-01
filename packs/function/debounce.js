/**
 * @desc 函数防抖
 *      与throttle 不同的是，debounce 保证一个函数在多少毫秒内不再被触发，只会执行一次，
 *      要么在第一次调用return 的防抖函数时执行，要么在延迟指定毫秒后调用；
 *
 * @example 使用场景: 比如在线编辑的自动存储防抖。
 * @param {Number} 0 或者更大的毫秒数。对于事件回调，大约在100 或250毫秒 （或更高）的延迟是最有用的。
 * @param {Boolean} atBegin 可选，默认为false；
 *                          如果`atBegin` 为false 或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
 *                          如果`atBegin` 为true，回调函数则在第一次调用return的防抖函数时直接执行；
 * @param {Function} callback 延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，执行去防抖功能时，调用`callback`.
 *
 * @return {Function} 新的防抖函数
 */
import { throttle } from "./throttle";
export function debounce(delay, atBegin, callback) {
  return callback === undefined
    ? throttle(delay, atBegin, false)
    : throttle(delay, callback, atBegin !== false);
}

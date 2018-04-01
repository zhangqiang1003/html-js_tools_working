/**
 * @desc 获取一个元素距离文档（document）的位置，类似jquery中的offset();
 * @param {HTMLElement} ele
 * @returns {{left:number,top:number}}
 */

export function offset(ele) {
  let pos = { left: 0, top: 0 };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return pos;
}

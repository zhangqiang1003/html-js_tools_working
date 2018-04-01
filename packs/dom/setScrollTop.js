/**
 * @desc 设置滚动条距离顶部的距离
 * return {Number}
 */

export function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

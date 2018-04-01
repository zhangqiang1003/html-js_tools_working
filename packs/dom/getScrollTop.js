/**
 * @desc 获取滚动条距离顶部的距离
 * @return {Number}
 */

export function getScrollTop() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  );
}

/**
 * 滚动条滚动时，获取某个dom元素在Y轴方向上，距离某个特定位置的距离
 * @param {String} dom 元素节点的id名
 * @param {Number} size 到Y轴方向的某个位置
 */
export function getPositionToY(dom, size) {
  const oDom = document.getElementById(dom); // dom节点
  const domPosition = parseInt(oDom.offsetTop); // dom节点到顶部的距离
  let distance = null, // 到目标位置（y轴方向的某个位置）的距离
    scrollDis = null; // 滚动条距离视图顶部的距离
  window.onscroll = function() {
    scrollDis = document.documentElement.scrollTop || document.body.scrollTop;
    distance = domPosition - scrollDis - size;
    console.log(distance, '这是获取的距离');
  }
}

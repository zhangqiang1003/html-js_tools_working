/**
 * 检查移动端设备是处于横屏还是竖屏
 * landscape 横屏
 * portrait 竖屏
 */

export default function checkMobileDevHV () {
  var supportOrientation = (typeof window.orientation === 'number' && typeof window.onorientationchange === 'object');
  var htmlNode = document.body.parentNode, orientation;
  var updateOrientation = function(){
    if(supportOrientation){
      orientation = window.orientation;
      switch(orientation){
        case 90:
        case -90:
          orientation = 'landscape';
          break;
        default:
          orientation = 'portrait';
          break;
      }
    } else {
      orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
    }
    htmlNode.setAttribute('class',orientation);
  }
  if (supportOrientation) {
    window.addEventListener('orientationchange', updateOrientation, false);
  } else {
    // 监听resize事件
    window.addEventListener('resize', updateOrientation, false);
  }
  updateOrientation();
}

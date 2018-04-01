/**
 * @desc 根据keycode获取键名
 * @param {Number} keycode
 * @return {String}
 */

const keyCodeMap = {};
export function getKeyCodeName(keycode) {
  if (keyCodeMap[keycode]) {
    return keyCodeMap[keycode];
  } else {
    console.log("Unknow Key(Key Code:" + keycode + ")");
    return "";
  }
}

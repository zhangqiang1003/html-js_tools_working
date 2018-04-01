/**
 * @desc 判断是否为邮箱地址
 * @param {String} str
 * @return {Boolean}
 */

export function isEmail(str) {
  const reg = /^((_\\w-\\.)@(\\[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([_\\w-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})($)/;
  return reg.test(str);
}

/**
 * @desc 查找字符串，并返回匹配到的字符串的个数
 * @param {String} str  ===> 原始字符串
 * @param {String} strSplit  ===> 需要匹配的字符串
 * @return {Number} count  匹配到的字符串的个数
 */

export function countMatchStr(str, strSplit) {
  return str.split(strSplit).length - 1;
}

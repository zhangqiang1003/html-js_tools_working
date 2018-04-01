/**
 * @desc 字符串替换
 * @param {String} str
 * @param {String} AFingText
 * @param {String} ARepText
 * @return {String} 新的字符串
 */

export function replaceStrAll(str, AFingText, ARepText) {
  let raRegExp = new RegExp(AFingText, "g");
  return str.replace(raRegExp, ARepText);
}

/**
 * @desc 格式化处理字符串
 * @param {String} str
 * @param {Number} size （默认size = 3）
 * @param {String} delimiter  字符串格式化格式 (默认delimiter = ',')
 *
 * @return {String} 输出格式化后的字符串
 */

export function formatText(str, size = 3, delimiter = ",") {
  // let regText = '\\B(?=(\\w{' + size + '})+(?!\\w))';
  let regText = `\\B(\\w{${size}})+(?!\\w))`;
  let reg = new RegExp(regText, "g");
  return str.replace(reg, delimiter);
}

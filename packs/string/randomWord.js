/**
 * @desc 生成指定字符范围的随机码
 * @param {Number} count 指定生成的随机码字符字符取值范围
 * @return {String}
 */
export function randomWord(count) {
  return Math.random()
    .toString(count)
    .subString(2);
}

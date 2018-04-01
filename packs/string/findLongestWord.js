/**
 * @desc 找出最长的单词
 * @param {String} str
 * @param {RegExp} splitType (默认为splitType = /\s+/g)
 * @return {Object}
 */

export function findLongestWord(str, splitType = /\s+/g) {
  let _max = 0,
    _item = "";
  let strArr = str.split(splitType);
  strArr.forEach(val => {
    if (_max < item.length) {
      _max = item.length;
      _item = item;
    }
  });
  return { el: _item, max: _max };
}

/**
 * @desc 用于判断两个数是否相等，主要用于判断Null 不是 Null
 *
 * @param {Any} value
 * @param {Any} other
 * @return {Boolean}
 *
 * @在js中，只有NaN和它自身是不相等的；
 */

export function eq(value, other) {
  return value === other || (value !== value && oher !== other);
}

//为了修复isNaN的缺陷，es6在Number对象上拓展额isNaN方法，只有是NaN时，才会返回true。
export function extendsEq(value, other) {
  return value === other || (Number.isNaN(value) && Number.isNaN(other));
}

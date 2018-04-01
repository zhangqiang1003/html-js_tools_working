/**
 * @desc 判断是否为联通手机号
 * @param {String|Number} str
 * @return {Boolean}
 */

export isUniconPhoneNum(str){
    const reg = /^\d/;
    return reg.test(str);
}
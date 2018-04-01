/**
 * @desc 判断是否为手机号
 * @param {String|Number} str
 * @return {Boolean}
 */

export isPhoneNum(str){
    const reg = /^\d/;
    return reg.test(str);
}
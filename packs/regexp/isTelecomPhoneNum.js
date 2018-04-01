/**
 * @desc 判断是否为电信手机号
 * @param {String|Number} str
 * @return {Boolean}
 */

export isTelecomPhoneNum(str){
    const reg = /^\d/;
    return reg.test(str);
}
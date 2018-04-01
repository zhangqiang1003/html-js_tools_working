/**
 * @desc 判断是否为移动手机号
 * @param {String|Number} str
 * @return {Boolean}
 */

export isMobilePhoneNum(str){
    const reg = /^\d/;
    return reg.test(str);
}
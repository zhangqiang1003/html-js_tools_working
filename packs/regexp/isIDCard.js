/**
 * @desc 判断是否为身份证号
 * @param {String|Number} str
 * @return {Boolean}
 */

export isIDCard(str){
    const reg = /^\d/;
    return reg.test(str);
}
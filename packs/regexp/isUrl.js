/**
 * @desc 判断是否为URL地址
 * @param {String} str
 * @return {Boolean}
 */

export isUrl(str){
    const reg = /^\d/;
    return reg.test(str);
}
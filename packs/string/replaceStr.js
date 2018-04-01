/**
 * @desc 字符替换
 * @param {String} str
 * @param {Array} regArr  ===>  字符格式
 * @param {Number} type  ====> 替换的方式
 * @param {String} ARepText  替换的字符（默认*）
 *
 * @return {String} 新的字符串
 */
import repeatStr from "./repeatStr";

export function replaceStr(str, regArr, type, ARepText = "*") {
  let regtext = "",
    Reg = null,
    replaceText = ARepText;

    //处理手机号码
    /*
    eg:
    replaceStr('1389993222',[3,5,3],0)
    result : 138*****222
    */
    if (regArr.length === 1 && type === 0) {
        regtext = /\w/
    }  

}

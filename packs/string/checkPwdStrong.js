/**
 * @desc 检测密码强度
 * @param {String} str
 * @return {Number} nowLv
 */

export function checkPwdStrong (str) {
    let nowLv = 0;
    if (str.length < 6) {
        return nowLv;
    }
    if (/[0-9]/g.test(str)) {
        nowLv++;
    }
    if (/[a-z]/g.test(str)) {
        nowLv++;
    }
    if (/[A-Z]/g.test(str)) {
        nowLv++;
    }
    if (/[\.|-|_|@]/g.test(str)) {
        nowLv++;
        nowLv++;
    }
    return nowLv;
}

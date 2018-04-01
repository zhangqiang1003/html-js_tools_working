/**
 * @desc 检测密码强度
 * @param {String} str
 * @return {Number} nowLv
 */
export function checkPwd (str) {
    let nowLv = 0;
    if (str.length < 6) {
        return nowLv;
    }
    if (/[0-9]/.test(str)) {
        nowLv++;
    }
    if (/[a-z]/.test(str)) {
        nowLv++;
    }
    if (/[A-Z]/.test(str)) {
        nowLv++;
    }
    if (/[\.|-|_|@]/.test(str)) {
        nowLv++;
        nowLv++;
    }
    return nowLv;
}
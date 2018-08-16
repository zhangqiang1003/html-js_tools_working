/**
 *@desc 浏览器端写入cookie
 *@param {string} cookieName
 *@param {string} nameValue
 *@param {number} cookieTime
 *@return {undefined} 
 */

 export function setCookie(cookieName, nameValue, cookieTime) {
    var value = compile(nameValue);//加密的处理
    var expires = new Date();
    expires.setTime(expires.getTime() + cookieTime);
    document.cookie = cookieName + '=' + value + 'z1b3;expires=' + expires.toGMTString() + ';path=/';
 }
 function generateRandomString() {
    var randomString = '';
    var charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(var i = 0; i < 6; i++) {
        var charTemp = Math.round(Math.random() * (charArray.length - 1));
        randomString += charArray[charTemp];
    }
    return randomString;
 }
 function compile(code) {
     var randomString = generateRandomString();
     var result = randomString + code.split("").reverse().join("");
     //alert(result);
     return result;
 }
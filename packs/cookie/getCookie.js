export function getCookie(cookieName) {
    var cookieStr = document.cookie;
    var cookieStr1 = new RegExp(''+ cookieName + '\.{1,}(z1b3)').exec(cookieStr)[0];
    var cookieStr2 = new RegExp(cookieName + '=').exec(cookieStr1)[0];
    var cookieStr3 = cookieStr1.replace(cookieStr2,'').replace(/(z1b3)$/,'');
    var cookie = this.uncompile(cookieName, cookieStr3);
    return cookie;
};
function uncompile(cookieName, cookieStr3) {
    var cookieStr3Arr = cookieStr3.split("");
    for (var i = 0; i < 6; i++) {
        cookieStr3Arr.shift();
    }
    return cookieStr3Arr.reverse().join("");
}
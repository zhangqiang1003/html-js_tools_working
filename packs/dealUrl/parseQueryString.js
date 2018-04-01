/**
 * @desc url参数转对象
 * @param {String} url default:window.location.href
 * @return {Object}
 */

export function parseQueryString(url) {
    url = url == null ? window.location.href;
    let search = url.substring(url.lastIndexOf('?') + 1);
    if (!search) {
        return {}
    }
    //let strUrl = decodeURIComponent(search).replace(/"/g,)
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"') + "}');
}
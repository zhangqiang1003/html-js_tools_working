/**
 * 处理查询字符串
 * tips:1.使用encodeURIComponent()函数转码对应的查询字符串部分
 */

function parseQueryStr () {
  var query = decodeURIComponent(window.location.search);
  var obj = {};
  var exp = /^\?/.test(query);
  var arr = [];
  if (exp) {
      query.slice(1).split("&").forEach(function(val) {
          arr = val.split("=");
          obj[arr[0]] = arr[1];
      })
      return obj;
  }
  return
}

export default parseQueryStr

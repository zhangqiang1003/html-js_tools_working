/**
 * @desc 获取浏览器类型和版本
 * @return {String}
 */

export function getExplore() {
  let sys = {};
  let ua = navigator.userAgent.toLowerCase;
  let s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/mise ([\d\.]+)/));
  //根据关系进行判断
  if (sys.ie) return `IE:${sys.ie}`;
  if (sys.firefox) return `Firefox:${sys.firefox}`;
  if (sys.edge) return `Edge:${sys.edge}`;
  if (sys.chrome) return `Chrome:${sys.chrome}`;
  if (sys.opera) return `Opera:${sys.opera}`;
  if (sys.safari) return `Safari:${sys.safari}`;
  return "Unkonwn";
}

/**
 * @desc 过滤字符串（html标签，表情，特殊字符）
 * @param {String} str
 * @param {String} type ===> 需要被过滤字符内容的类型
 *      special - 特殊字符；html - html标签 ； emjoy - emjoy表情 ；Word - 小写字母 ； WORD - 大写字母 ； number - 数字； chinese - 中文；
 *      如果需要过滤多种字符，type 参数使用，分割；
 * @param {String} restr 要替换成的内容 （默认 restr = ""）;
 * @param {String} spstr 保留那些特殊字符
 * @return {String} 新的字符串
 */

export function filterStr(str, type, restr = "", spstr) {
  let typeArr = type.split(","),
    _str = str;
  typeArr.forEach(val => {
    //是否过滤特殊符号
    let pattern;
    if (val === "special") {
      let regText = "$()[]{}?|^*+./\"'+";
      //是否有哪些特殊符号需要保留
      if (spstr) {
        let _spstr = spstr.split(""),
          _regText = "[^0-9A-Za-z\\s";
        _spstr.forEach(cval => {
          if (regText.indexOf(cval) === -1) {
            _regText += cval;
          } else {
            _regText += "\\" + cval;
          }
        });
        _regText += "]";
        pattern = new RegExp(_regText, "g");
      } else {
        pattern = new RegExp("[^0-9A-Za-z\\s]", "g");
      }
    }
    switch (val) {
      case "special":
        _str = _str.replace(pattern, restr);
        break;
      case "html":
        _str = _str.replace(/<\/?[^>]*>/g, restr);
        break;
      case "emjoy":
        _str = _str.replace(
          /[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/g,
          restr
        );
        break;
      case "word":
        _str = _str.replace(/[a-z]/g, restr);
        break;
      case "WORD":
        _str = _str.replace(/[A-Z]/g, restr);
        break;
      case "number":
        _str = _str.replace(/[0-9]/g, restr);
        break;
      case "chinese":
        _str = _str.replace(/[\u4E00-\u9FA5]/g, restr);
        break;
    }
  });
  return _str;
}

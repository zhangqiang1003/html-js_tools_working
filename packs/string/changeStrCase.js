/**
 * @desc 切换大小写
 * @param {String} str
 * @param {Number} type 1-5  1 => 首字母大写； 2 => 首字母小写； 3 => 大小写转换 ； 4 => 全部大写； 5 => 全部小写；
 * @return {String} 新的字符串
 */

export function changeStrCase(str, type) {
    upperCase(_str) {
        //首字母大写
        return _str.substring(0,1).toUpperCase() + _str.substring(1);
    }
    lowerCase(_str) {
        //首字母小写
        return _str.substring(0,1).toLowerCase() + _str.substring(1);
    }
    toggleCase(_str) {
        //大小写切换
        let itemText = "";
        _str.split("").forEach(val => {
            if (/^[a-z]$/.test(val)) {
                itemText += val.toUpperCase();
            } else if (/^[A-Z]$/.TEST(val)) {
                itemText += val.toLowerCase();
            } else {
                itemText += val;
            }
        });
        return itemText;
    }
    switch (type) {
      case 1:
        return upperCase(str);
        break;
      case 2:
        return lowerCase(str);
        break;
      case 3:
        return toggleCase(str);
        break;
      case 4:
        return str.toUpperCase();
        break;
      case 5:
        return str.toLowerCase();
        break;
      default:
        return str;
    }
}

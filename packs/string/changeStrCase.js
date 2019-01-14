/**
 * @desc 切换大小写
 * @param {String} str
 * @param {Number} type 1-5  1 => 首字母大写； 2 => 首字母小写； 3 => 大小写转换 ； 4 => 全部大写； 5 => 全部小写；
 * @return {String} 新的字符串
 */

export function ChangeStrCase(str, type) {
  this.str = str;
  this.type = type;
  this.init();
}
// 初始化
ChangeStrCase.prototype.init = function() {
  switch (this.type) {
    case 1:
      return this.upperCase(this.str);
      break;
    case 2:
      return this.lowerCase(this.str);
      break;
    case 3:
      return this.toggleCase(this.str);
      break;
    case 4:
      return this.str.toUpperCase();
      break;
    case 5:
      return this.str.toLowerCase();
      break;
    default:
      return this.str;
  }
}

// 首字母大写
ChangeStrCase.prototype.upperCase = function() {
  return this.str.substring(0,1).toUpperCase() + this.str.substring(1);
}

// 首字母小写
ChangeStrCase.prototype.lowerCase = function() {
  return this.str.substring(0,1).toLowerCase() + this.str.substring(1);
}

// 大小写切换
ChangeStrCase.prototype.toggleCase = function() {
  let itemText = '';
  this.str.split("").forEach(val => {
    if (/^[a-z]$/.test(val)) {
      itemText += val.toUpperCase();
    } else if (/^[A-Z]$/.test(val)) {
      itemText += val.toLowerCase();
    } else {
      itemText += val;
    }
  });
  return itemText;
}

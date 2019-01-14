/**
 * @desc 格式化${startTime}距现在的已过时间
 * @param {Data} startTime  // 2019/01/15 10:50:59  or  2019-01-14 10:50:59
 * @return {String}
 */
export function formPassTime(startTime) {
  const currentTime = Date.parse(new Date());
  startTime = new Date(startTime).getTime(); // 把时间转换成时间戳
  const time = currentTime - startTime;
  const day = parseInt(time / (1000 * 60 * 60 * 24));
  const hour = parseInt(time / (1000 * 60 * 60));
  const min = parseInt(time / (1000 * 60));
  const mouth = parseInt(day / 30);
  const year = parseInt(mouth / 12);

  if (year) {
    return year > 0 ? year + "年前" : Math.abs(year) + '年后'
  }

  if (mouth) {
    return mouth > 0 ? mouth + '个月前' : Math.abs(mouth) + '个月后'
  }

  if (day) {
    return day > 0 ? day + '天前' : Math.abs(day) + '天后'
  }

  if (hour) {
    return hour > 0 ? hour + '小时前' : Math.abs(hour) + '小时后'
  }

  if (min) {
    return min > 0 ? min + '分钟前' : Math.abs(min) + '分钟后'
  }
}

/**
 * @desc 格式化${startTime}距现在的已过时间
 * @param {Data} startTime
 * @return {String}
 */
export function formPassTime(startTime) {
  let currentTime = Date.parse(new Date());
  let time = currentTime - startTime;
  let day = parseInt(time / (1000 * 60 * 60 * 24));
  let hour = parseInt(time / (1000 * 60 * 60));
  let min = parseInt(time / (1000 * 60));
  let mouth = parseInt(day / 30);
  let year = parseInt(mouth / 12);
  if (year) return year + "年前";
  if (mouth) return mouth + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
}

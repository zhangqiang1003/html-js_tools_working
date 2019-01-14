/**
 * @desc 格式化现在距${startTime}的相差的时间
 * @param {Data} endTime // 2019/01/15 10:50:59  or  2019-01-14 10:50:59
 * @return {String}
 */

export function formatRemainTime(endTime) {
  let startData = new Date(); // 开始时间
  let endDate = new Date(endTime); // 结束时间
  let t = endDate.getTime() - startData.getTime(); // 时间差
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return `${d}天${h}小时${m}分钟${s}秒`;
}

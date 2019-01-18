/**
 * 倒计时
 * @param {String} startTime // 2019/01/15 10:50:59  or  2019-01-14 10:50:59
 * @param {String} endTime // 2019/01/15 10:50:59  or  2019-01-14 10:50:59
 * @return {Object}
 */

export function countDown(startTime, endTime) {
  // 检查是否是ios系统,用于处理ios系统对2019-01-14 10:50:59这种格式的不支持
  const type = checkPhoneOSType();
  const reg = /-/g;
  const now = new Date().getTime(); // 当前时间的时间戳
  let start = undefined, // 活动开始时间
    end = undefined, // 活动结束时间
    time = undefined, // 获取现在到活动结束的时间差
    day = undefined, // 剩余天数
    hour = undefined, // 剩余小时数
    min = undefined, // 剩余分钟数
    second = undefined; // 剩余秒数

  // 兼容ios对时间格式的识别
  startTime = type === 'ios' && reg.test(startTime) ? startTime.replace(reg, '/') : startTime
  endTime = type === 'ios' && reg.test(endTime) ? endTime.replace(reg, '/') : endTime

  start = new Date(startTime).getTime(); // 把时间转换成时间戳
  end = new Date(endTime).getTime();

  // 判断活动状态
  if (now < start) return { status: -1, msg: '活动暂未开始' };
  if (end < now) return { status: -1, msg: '活动已结束' };

  // 活动正常进行
  time = end - now; // 获取现在到活动结束的时间差
  
  day = Math.floor(time / 1000 / 3600 / 24);
  hour = Math.floor((time / 1000 / 60 / 60) % 24);
  min = Math.floor((time / 1000 / 60) % 60);
  second = Math.floor((time / 1000) % 60);

  // 转化为字符串
  day = day <= 9 ? ('0' + day) : day.toString();
  hour = hour <= 9 ? ('0' + hour) : hour.toString();
  min = min <= 9 ? ('0' + min) : min.toString();
  second = second <= 9 ? ('0' + second) : second.toString();

  const timeObj = {
    day: day.split(''),
    hour: hour.split(''),
    min: min.split(''),
    second: second.split('')
  };

  return { status: 0, time: timeObj };
}

// 检查设备类型
function checkPhoneOSType() {
  const u = navigator.userAgent, app = navigator.appVersion;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  return isAndroid ? 'android' : ( isIOS ? 'ios' : 'other' );
}
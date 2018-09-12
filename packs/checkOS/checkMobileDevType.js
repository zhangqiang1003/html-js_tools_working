/**
 * 检查移动端设备的类型（kAndroid or IOS）
 */

function checkAndroidOrIos() {
	var ret = 'other';
	var u = navigator.userAgent;
	if ((u.indexOf('Android') > -1) || (u.indexOf('Adr') > -1)) {
		ret = 'android';
	} else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		ret = 'ios';
	}
	return ret;
}

export default checkAndroidOrIos

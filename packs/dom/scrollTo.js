/**
 * @desc 在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @return {Number} duration
 */

import { getScrollTop } from "./getScrollTop";
import { setScrollTop } from "./setScrollTop";
let requestAnimFrame = (functionf(){
    return window.requestAnimFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60);}
})();

export function scrollTo(to,duration) {
    if(duration < 0){
        setScrollTop(to);
        return;
    }
    let diff = to - getScrollTop();
    if(diff === 0) return;
    let step = diff / duration * 10;
    requestAnimationFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if(diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to){
                return;
            }
            scrollTo(to,duration - 16);
        }
    )
}


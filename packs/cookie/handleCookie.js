export let handleCookie = {
    /**
     * 写入cookie
     * @param {Strig} name 
     * @param {String} value 
     * @param {Number} day
     */
    setCookie: function (name, value, day) {
        if (day && typeof day === 'number') {
            const expires = day * 24 * 60 * 60 * 1000
            const date = new Date(new Date() + expires)
            document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()};path=/`
        } else {
            document.cookie = `${name}=${escape(value)};path=/`
        }
    },
    /**
     * 获取cookie
     * @param {String} name cookie的名称
     * @returns {null} 不存在时，返回null 
     */
    getCookie: function (name) {
        let arr = undefined
        const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg)
        return document.cookie.match(reg) ? unescape(arr[2]) : null
    },
    /**
     * 删除cookie
     * @param {String} name 
     */
    delCookie: function (name) {
        const day = -1
        const value = ' '
        const expires = day * 24 * 60 * 60 * 1000
        const date = new Date(new Date() + expires)
        document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()};path=/`
    }
}
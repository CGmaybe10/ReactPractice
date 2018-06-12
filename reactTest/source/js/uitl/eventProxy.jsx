//通过该类实现两个任意组件之间的通信（观察者模式）
const eventProxy = {
    onObj: {},
    oneObj: {},
    on: function (key, fn) {//on订阅的事件每次都出发
        if (this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }
        this.onObj[key].push(fn);
    },
    one: function (key, fn) {//one订阅的事件只触发一次
        if (this.oneObj[key] === undefined) {
            this.oneObj[key] = [];
        }
        this.oneObj[key].push(fn);
    },
    off: function (key) {//删除所有的订阅事件
        this.onObj[key] = [];
        this.oneObj[key] = [];
    },
    trigger: function () {//发布事件
        let key, args;
        if (arguments.length == 0) {
            return false;
        }
        key = arguments[0];
        args = [].concat(Array.prototype.slice.call(arguments, 1));

        if (this.onObj[key] !== undefined && this.onObj[key].length > 0) {
            for (let i in this.onObj[key]) {
                this.onObj[key][i].apply(null, args);
            }
        }
        if (this.oneObj[key] !== undefined && this.oneObj[key].length > 0) {
            for (const i in this.oneObj[key]) {
                this.oneObj[key][i].apply(null, args);
                this.oneObj[key][i] = undefined;
            }
            this.oneObj[key] = [];
        }
    }
};

export default eventProxy;
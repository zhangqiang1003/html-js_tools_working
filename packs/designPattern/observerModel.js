// 发布者、
export function Publisher() {
  this.observers = []; // 存取订阅者（缓存列表）
  var state = "";     // 让该内容不能直接访问

  // 新增两个对于state的操作 获取/更新
  this.getState = function () {
    return state;
  }
  this.setState = function (value) {
    state = value;
    this.notice(); // 通知订阅者
  }
}
Publisher.prototype.addOb = function (observer) {
  var flag = false;
  for (var i = this.observers.length - 1; i >= 0; i--) {
    if (this.observers[i] === observer) {
      flag = true;
    }
  };
  if (!flag) {
    this.observers.push(observer);
  }
  return this;
}
Publisher.prototype.removeOb = function (observer) {
  var observers = this.observers;
  for (var i = 0; i < observers.length; i++) {
    if (observers[i] === observer) {
      observers.splice(i, 1);
    }
  };
  return this;
}
Publisher.prototype.notice = function () {
  var observers = this.observers;
  let con = this.getState() // 获取发布者的内容
  for (var i = 0; i < observers.length; i++) {
    observers[i].update(con); // 订阅者接收信息
  };
}

// 订阅者
export function Subscribe() {
  this.update = null
}

// 实际应用
// var oba = new Subscribe(); // 订阅者oba
// var obb = new Subscribe(); // 订阅者obb

// var obc = new Subscribe();

// var pba = new Publisher(); // 发布者pba
// var pbb = new Publisher(); // 发布者pbb

// pba.addOb(oba); // 发布者pba新增订阅者oba
// pba.addOb(obb);

// pbb.addOb(obc);

// oba.update = function (state) { // 订阅者oba接收发布者最新消息
//   console.log(state);
// }

// obb.update = function (state) { // 订阅者obb接收发布者最新消息
//   console.log(state + "world!");
// }

// obc.update = function(state) {
//   console.log(state + '1234');
// }

// pba.removeOb(obb); // 移除订阅者obb
// pbb.removeOb(obc);

// pba.setState({a: '1234', b: 121341234}); // 发布者发布内容
// pbb.setState("ddd");
/**
 * 监听状态变化，并根据状态变化通知相应的后续方法执行
 */

// 定义依赖收集与通知的类
class Dep {
  constructor() {
    // 用来存放状态变量的数组
    this.subs = [];
  }
  // 清空
  clearSubs() {
    this.subs.length = 0;
  }

  // 在sub中添加一个被监听的状态变量
  addSub(sub) {
    this.subs.push(sub);
  }

  // 通知
  notify(key, newVal) {
    console.log(key + '和' + newVal);
    fnObj[key](newVal);
  }
}

// 定义观察者
function observer(value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }
  Object.keys(value).forEach((key) => {
    // value - 一个有键值对的对象
    // key - value对象的键名
    // value[key] - value对象的键值
    defineReactive(value, key, value[key]);
  });
}

function defineReactive(obj, key, val) {
  const dep = new Dep(); // 实例化依赖收集类
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      // 将Dep.target(即当前监听的状态变量被存入dep的sub中)
      dep.clearSubs();
      dep.addSub(Dep.target);
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;
      // 在set的时候出发dep的notify来通知状态变量已经变化
      dep.notify(key, newVal);
    }
  })
}

export default observer;

// 模拟使用
// 需要被监听的状态变量
// let obj = {
//   a: null,
//   b: null,
//   c: null
// }

// 把被监听的变量与状态变量变化后需要执行的方法（逻辑）进行绑定
// let fnObj = {
//   a: aa,
//   b: bb,
//   c: cc
// }

// function aa() {
//   console.log(90);
// }

// function bb() {
//   console.log(94);
// }

// function cc() {
//   console.log(98)
// }

// observer(obj); // 执行监听的方法
// let mm = 1

// setTimeout(function() {
//   mm++;
//   obj.a = mm;
// }, 3000)

// setTimeout(function() {
//   obj.c = false;
// }, 3000)


// setTimeout(function() {
//   obj.b = 'aaaaaa';
// }, 20000)

// setTimeout(function() {
//   obj.c = true;
// }, 30000)

// setTimeout(function() {
//   obj.b = 'nnnnnnnn';
// }, 40000)
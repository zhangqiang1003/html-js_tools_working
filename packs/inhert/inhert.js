// 实现继承，可以使子类使用父类的方法

// ES6 实现继承
class P {
  constructor(x, y) {
    this.x = x,
      this.y = y
  }
  c() {
    return this.x
  }
}

class C extends P { // 实现子类C继承父类P
  constructor(x, y) {
    super(x, y);
  }
  m() {
    console.log('nnn')
  }
}

var c = new C(2, 3);
console.log(c.c());

// ES5实现继承

function inheritProperty(father, child) { // 封装实现继承的方法
  function F() { };
  F.prototype = father.prototype;
  var inner = new F();
  inner.constructor = child;
  child.prototype = inner;
  Object.defineProperty(child.prototype, 'constructor', {
    enumerable: false
  });
}

function Father(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Father.prototype.abc = function () {
  return this
}

function Child(v, n) {
  this.v = v;
  this.n = n;
}

new Father(999, 666, 'nnnnn')

Child.prototype.m = function () {
  return this.v
}

inheritProperty(Father, Child); // 调用实现ES5继承的方法
var c = new Child(888, 999);
console.log(c);

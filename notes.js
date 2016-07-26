function diff(x, y) {
  var z; // function scoping

  if (x > y) {
    { let tmp = x; // block scoping
      x = y;
      y = tmp;
    }
  }

  return y - x;
}


function foo(x, y) {
  try {
    let z = bar(x + y);
  } catch (err) {
    // ...
  }
  // ...
  console.log(z); // ReferenceError; law of unintended side effects
}


function foo(x, y) {
  if (x > 10) {
    var z = y / 2;
  } else if (x < y) {
    var z = z + y;
  } else if (x > 100) {
    var z = 0;
  }
}
// var + let, not var replaced by let


function foo(x) {
  for (let i = 0; i < x; i++) {
    $('#btn' + i).click(function() {
      console.log(`i: ${i}`);
    });
  }
}
// new i for each iteration


// const is a variable that cannot be reassigned,
// has nothing to do with what the value is
const PI = 3.14;
// PI = 3.141592; // trying to reassign a variable that cannot be reassigned
const x = [1, 2, 3];
x[0] = 4;
console.log(x); // [4, 2, 3]
const x = Object.freeze([1, 2, 3]);




function foo() {
  var args = [].slice.call(arguments);
  args.shift(10);
  args.push(42);
  bar.apply(null, args);
}

function foo(...args) { // ... is gather operator
  bar(10, ...args, 42);
}


var a = [1, 2, 3, 4];
var b = [5, 6];
b = "56";
var c = [0].concat(a, b, [7]);

var c = [0, ...a, ...b, 7];




function foo(x) {
  x = x || 10;
}
function foo(x) {
  x = (x !== undefined) ? x : 10;
}

function foo(x = 10) {
}


function uniqID() {
  return Math.random();
}

function foo(id = uniqID()) {
}
foo();


function foo(x, cb = function() { return x; }) {
  var x = 2;
  console.log(cb()); // 4, this is a bug
}
foo(4);




function foo() {
  return [1, 2, 3, 4];
}
var tmp = foo(),
  a = tmp[0];
  b = tmp[1];
  c = tmp[2];
console.log(a, b, c); // 1 2 3

var [a, b, c] = foo(); // destructuring pattern
var [
  a,
  b,
  c
] = foo() || [];


function foo() {
  return [1, 2];
}
var [
  a = 8,
  b = 9,
  c = 10
] = foo() || [];
console.log(a, b, c); // 1 2 10
// destructuring not as an declaration form but as an assignment form


function foo() {
  return [1, 2, 3, 4, 5, 6];
}
var o = {};
[
  o.a = 8,
  ,
  ,
  o.b = 9,
  o.c = 10
] = foo() || [];

[
  o.a = 8,
  o.b = 9,
  o.c = 10,
  ...o.d
] = foo() || [];


var x = 10, y = 20;
[x, y] = [y, x]; // swap x and y


function foo() {
  return [1, 2, 3, [4, 5, 6], 7];
}
var o = {};
[
  o.a = 8,
  o.b = 9,
  o.c = 10,
  [
    o.d = 11,
    o.e
  ] = [], // nested destructuring
  o.f
] = foo() || [];

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
  return [1, 2, 3, , 7];
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


function foo() {
  return {
    a: 1,
    b: 2,
    c: 3,
    d: [4, { Z: 5 }, 6]
  }
}
var {
  a: X = 42,
  b = 10,
  c: c,
  d: [
    e,
    {
      Z: f
    } = {},
    g
  ] = []
} = foo();


function foo() {
  return [];
}
[
  {
    a
  } = { a: 10 }
] = foo();
console.log(a); // 10

function foo() {
  return [
    {}
  ];
}
[
  {
    a
  } = { a: 10 }
] = foo();
console.log(a); // undefined

function foo() {
  return [];
}
[
  {
    a = 10
  } = {} // default always happens first
] = foo();
console.log(a); // 10


function foo() {
  return [
    {
      a: 2,
      b: 3,
      c: 4
    }
  ];
}
[
  {
    a = 10,
    ...o // object spread/gather proposal, not valid right now
  } = {}
] = foo();


function foo() {
  return [
    {
      a: 2,
      b: 3,
      c: 4,
      d: [5, 6, 7, 8, 9]
    }
  ];
}
[
  {
    a = 10,
    d: [
      x1, // 5
      x2, // 6
      x3 // 7
    ],
    d: [
      y1, // 5
      y2, // 6
      ...y3 // [7, 8, 9]
    ],
    d: D // [5, 6, 7]
  } = {}
] = foo();


function foo() {
  return {
      a: 2,
      b: 3,
      c: 4,
  };
}
var a, b, c;
({
  a,
  b,
  c
} = foo()); // object destructuring without declarer
console.log(a) // 2


function foo() {
  return {
      a: 2,
      b: 3,
      c: 4,
  };
}
var o = {};
({
  a: o.A,
  b: o.__B,
  c: o.c
} = foo());
console.log(o.A) // 2


function foo() {
  return [
    2,
    3,
    4
  ];
}
var a, b, c;
var x = [a, b] = foo();
console.log(x) // [2, 3, 4]
console.log(a) // 2
console.log(b) // 3
[c] = [a, b] = foo();


var a, b, c, d, e, f;
({
  person: {
    name: a,
    age: b
  }
} =
{
  history: {
    links: [
      c,
      d,
      e
    ]
  }
} = getJSONObject());


function foo(
{
  name,
  age = 30,
  phone,
  dob
} = {},
[
  link1,
  link2,
  link3
] = []) {
  return ;
}
foo({
  name: 'Kyle',
  age: 36,
  dob: '..'
});


var config = {
  age: 36,
  nicknames: [
    'Buster'
  ]
};
{
  let {
    name = 'John',
    age = 30,
    dob = '1/1/1970',
    nicknames: [
      nick1 = 'Johnny',
      nick2 = 'JonBoy'
    ]
  } = config; // assignment context

  config = {
    name,
    age,
    dob,
    nicknames: [
      nick1,
      nick2
    ]
  };
}




var a = 2;
var o = {
  a,
  b() {
    console.log(this.a); // works
  },
  c: () => {
    console.log(this.a); // fails
  }
};


var a = 2;
var prop = "c";
var o = {
  a,
  b() {
    console.log(this.a); // works
  },
  ['_' + prop]: 42,
  [prop.toUpperCase()]() {

  },
  *d() {

  },
  *[prop + '2']() {

  } // concise, computed generator method
};




function currency(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == 'number') {
        str += `$${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}
var name = 'Kyle';
var orderTotal = 123.94;
var shipDate = '1/1/16';
var msg = 'Hello, ' + name + ', your order on ' + shipDate + ' was a total of ' + orderTotal + '.';

var msg = currency`Hello, ${name}, your order on ${shipDate} was a total of ${orderTotal}.`;




var o = {};
o.__dont_touch_this__ = 42;

var key = Symbol('special property');
o[key] = 42;


var f = (function() {
  var key = Symbol('special property');

  var o = {
    setValue(x) {
      o[key] = x;
    },

    getValue() {
      return o[key];
    }
  };

  return o;
})();


var o = {
  [Symbol.iterator]() {
    var idx = 0;
    var self = this;
    return {
      next() {
        var val = self.values[idx];
        var done = !(idx < self.values.length);
        idx += 2;
        return {
          value: val,
          done: done
        };
      }
    };
  },
  values: [1, 2, 3, 4, 5, 6, 7]
};
// iterator is an object that has a next method on it
var it = o[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();
var a = [...o];


var o = {
  *[Symbol.iterator]() {
    var idx = 0;
    while (idx < this.values.length) {
      yield this.values[idx];
      idx += 2;
    }
  },
  values: [1, 2, 3, 4, 5, 6, 7]
};

var o = {
  *[Symbol.iterator]() {
    var idx = 0;
    while (idx < 10) {
      yield Math.random();
      idx++;
    }
  }
};

for (var v of o) {
  console.log(v);
}


Number.prototype[Symbol.iterator] = function*() {
  var start = 0;
  var end = Number(this);
  for (let num = start; num <= end; num++) {
    yield num;
  }
};
[...8]; // [0, 1, 2, 3, 4, 5, 6, 7, 8]

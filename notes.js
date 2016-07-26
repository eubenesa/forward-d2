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
const x = Object.freeze([1, 2, 3]);

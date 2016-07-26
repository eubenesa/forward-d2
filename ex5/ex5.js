var numbers = {
  *[Symbol.iterator]({
    start = 0,
    end = 100,
    by = 1
  } = {}) {
    var idx = start;
    while (idx <= end) {
      yield idx;
      idx += by;
    }
  }
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({
  start: 6,
  end: 30,
  by: 4
})) {
  console.log(num);
}

function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [ 6, 8, 10 ],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 === (
      data.foo +
      data.bar +
      data.baz[0] + data.baz[1] + data.baz[2] +
      data.bam.qux +
      data.bam.qam
    )
  );
}

function response({
  foo = 0,
  bar = 4,
  baz,
  bam: {
    qux = 0,
    qam = 14
  } = {}
} = {}) {

  check({
    foo,
    bar,
    baz,
    bam: {
      qux,
      qam
    }
  });
}

ajax('http://fun.tld', response);

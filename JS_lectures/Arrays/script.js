function outer(a) {
  console.log("Outer:", a);

  return function (b) {
    console.log("Middle:", b);

    return function (c) {
      console.log("Inner:", c);
      console.log(a + b + c);
    };
  };
}

const x = outer(2);

const y = x(3);

y(4);

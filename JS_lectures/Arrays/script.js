function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

function execute(func) {
  console.log("Start");
  func();
  console.log("End");
}

let sayHi = greet("Alice");

execute(sayHi);

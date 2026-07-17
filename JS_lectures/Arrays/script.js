const greet = (name) => {
  console.log("Hello " + name);
  return () => {
    console.log("Bye " + name);
  };
};

const run = (func) => {
  console.log("Start");
  func();
  console.log("End");
};

const x = greet("Bob");

run(x);

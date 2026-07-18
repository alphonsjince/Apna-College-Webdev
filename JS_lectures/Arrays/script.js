const person = {
  name: "Charlie",

  greet(prefix) {
    console.log("Inside greet");

    return () => {
      console.log(prefix + " " + this.name);
    };
  },
};

const sayHello = person.greet("Hello");

sayHello();

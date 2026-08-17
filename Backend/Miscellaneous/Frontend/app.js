// function personMaker(name,age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, Im ${this.name}`);
//     }
//   }

//   return person;
// }

function Person(name, age) {
  this.name = name;
  this.age = name;
}

Person.prototype.talk = function () {
  console.log(`hi ${this.name}`);
}

let p1 = new Person('adam', 25);
p1.talk();
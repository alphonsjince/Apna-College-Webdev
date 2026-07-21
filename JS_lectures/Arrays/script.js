const student = {
  name: "karan",
  age: 13,
  class: 8,
  subjects: ["English", "hindi", "maths"],
  username: "karan@123",
  password: "abcd"
};

let { username: user, password: hidden, city: place = "kerala" } = student;
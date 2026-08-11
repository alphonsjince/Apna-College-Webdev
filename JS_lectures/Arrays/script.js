let obj1 = {
  name: "thomas",
  age: 32,
  city: "chennai",
};

let obj2 = {
  name: "rony",
  age: 38,
  city: "mumbai",
};

const mergeObjects = (obj1, obj2) => ({
  ...obj1,
  ...obj2,
});

console.log(mergeObjects(obj1, obj2));


let jsonRes =
  '{"fact":"The average cat food meal is the equivalent to about five mice.","length":63}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact)

let student = {
  name: "alphons",
  marks: 68
};

console.log(JSON.stringify(student));


h1 = document.querySelector("h1");

function changeColor(color, delay, ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function color() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
}

color();

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//   })



// async function greet() {
//   throw "weak connection";
//   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolved:", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with error: ",err)
//   })



function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  getNum();
}

demo();
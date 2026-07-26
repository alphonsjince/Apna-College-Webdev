let inp = document.querySelector("#text");
let h1 = document.querySelector("h1");

// const lower = "abcdefghijklmnopqrstuvwxyz";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// inp.addEventListener("input", function () {
//   let result = "";

//   for (let ch of inp.value) {
//     if (lower.includes(ch) || upper.includes(ch) || ch === " ") {
//       result += ch;
//     }
//   }

//   h1.innerText = result;
// });

inp.addEventListener("input", function () {
  h1.innerText = inp.value.replace(/[^a-zA-Z ]/g, "");
});
// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// };

// saveToDb(
//     "hello",
//     () => {
//         console.log("success1: data saved");
//         saveToDb(
//             "world", () => {
//                 console.log("success2: data saved");
//                 saveToDb("alphons",
//                     () => {
//                         console.log("sucess 3: saved");
//                     },
//                     () => {
//                         console.log("failure 3 not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("data 2 not saved");
//             }
//         );
//     },
//     () => {
//     console.log("data not saved");
//     }
// );

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failed to save data");
//     }
//   });
// }

// saveToDb("hello world")
//   .then((result) => {
//     console.log("data 1 saved");
//     console.log("result of promise: ", result);
//     return saveToDb("alphons");
//   })
//   .then((result) => {
//     console.log("data 2 saved");
//     console.log("result of promise: ", result);
//     return saveToDb("jince");
//   })
//   .then((result) => {
//     console.log("data 3 saved");
//     console.log("result of promise: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("result of error: ", error);
//   });




h1 = document.querySelector("h1");

function changeColor(color, delay, ) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  })




// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
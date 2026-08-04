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

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failed to save data");
    }
  });
}

saveToDb("hello world")
  .then(() => {
    console.log("data 1 saved");
    return saveToDb("alphons");
  })
  .then(() => {
    console.log("data 2 saved");
    return saveToDb("jince");
  })
  .then(() => {
    console.log("data 3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
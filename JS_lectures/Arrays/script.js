let nums = [2, 3, 2, 5, 8, 2, 4, 8, 9,];

let ans = nums.reduce((max, el) => {
  if (max < el) {
    return el
  } else {
    return max
  }
});

console.log(ans)
let userNum = prompt("Enter a number");

let sum = 0;

for (let num of userNum) {
    sum = sum + Number(num);
}

console.log(sum);
let arr = ["banana", "apple", "litchi", "orange", "jamun", "mango", "apple", "litchi"];

for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] === "apple") {
        console.log(arr.splice(i,1));
    }
}

console.log(arr);
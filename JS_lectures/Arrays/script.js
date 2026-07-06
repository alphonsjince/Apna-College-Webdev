let arr = ["hello", "a", 23, 64, 99, -6];

let item = prompt("Enter an Item");

if (arr.includes(item) || arr.includes(Number(item))) {
    console.log("Item is in the array");
}
else {
    console.log("Item is not in the array");
}
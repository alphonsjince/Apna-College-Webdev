let start = Number(prompt("Enter a start number"));
let end = Number(prompt("Enter a end number"));

function random(first, last) {
    let diff = last - first;
    let randNum = Math.floor(Math.random() * diff) + first;
    return randNum;
}

console.log(random(start, end));
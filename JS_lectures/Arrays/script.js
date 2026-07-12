let arr1 = ["I", "am", "alphons"];
let arr2 = ["Jince", "from", "bhopal"];

function concat(arr1, arr2) {
    let final = arr1.concat(arr2);

    let result = "";
    for (let i = 0; i < final.length; i++){
        result += final[i] + " ";
        
    }
    return result;
    
}

console.log(concat(arr1, arr2));
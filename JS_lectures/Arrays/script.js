let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);  //namaste
    
    function innerGreet() {
        console.log(greet); 
    }
    
}

console.log(greet); //hello
changeGreet();

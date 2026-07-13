function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++){
        func();
    }
}

let greet = function () {
    console.log("hello");
}
let x = "alphons";

multipleGreet(greet, 2);
multipleGreet(x, 2);


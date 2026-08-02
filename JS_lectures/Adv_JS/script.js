h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 3000);

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("grey", 1000);
            });
        });
    });
});
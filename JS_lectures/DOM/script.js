let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let box = document.querySelector('.box');

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;

    return color;
};

btn.addEventListener("click", function () {
    h3.innerText = getRandomColor();
    box.style.backgroundColor = getRandomColor();
});
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
    
let started = false;
let level = 0;
let h2=document.querySelector("h2")

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    btnFlash(randBtn);
}
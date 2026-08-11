
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
    
let started = false;
let level = 0;
let highestLevel = Number(localStorage.getItem("highScore")) || 0;
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

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}

function levelUp() {
    userSeq = [];
    level++;

    if (level > highestLevel) {
      highestLevel = level;
      localStorage.setItem("highScore", highestLevel);
    }

    h2.innerText = `Level ${level} | High Score: ${highestLevel}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
} 

function checkButton(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `
        Game Over!! Your Score was <b>${level - 1}</b><br>
         Score: <b>${highestLevel}</b><br>
        Press any key to start again`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkButton(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


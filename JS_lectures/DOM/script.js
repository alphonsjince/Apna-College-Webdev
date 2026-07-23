let para1 = document.createElement('p');

para1.innerText = "Hello im para 1";

document.querySelector("body").append(para1);

para1.classList.add('red');



let h3 = document.createElement('h3');

h3.innerText = "im blue h3";

document.querySelector("body").append(h3);

h3.classList.add("h3");



let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "hey im h1";
p.innerText = "hey im p2";

div.append(h1);
div.append(p);
div.classList.add("box");

document.querySelector("body").append(div);
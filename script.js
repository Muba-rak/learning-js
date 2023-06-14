/// SElect elements on the webpage- class, id, tagName, css selectors

// const heading = document.getElementsByClassName("heading");
// console.log(heading);
// const para = document.getElementById("ptag");
// console.log(para);

// const p = document.getElementsByTagName("p");
// console.log(p);

// querySelector - css selctors - .class, #id, p
//querySelctorALL

// const paragragh = document.querySelector("p");
// console.log(paragragh);
// const paragraghs = document.querySelectorAll("p");
// paragraghs.forEach((p) => console.log(p));
// const h1 = document.querySelector(".heading");
// console.log(h1);

// const div = document.querySelector("#test");
// console.log(div);

// // changing content on the web - innerText, textContent, innerHTML
// console.log(h1.innerText);
// // h1.innerText += "Welcome";
// console.log(h1.textContent);
// h1.textContent = "Hello class";
// console.log(div.innerHTML);
// // div.innerHTML += "<h1>FROM JS</h1>";
// div.innerHTML += "<a>visit google</a>";

// const anotherH = document.querySelector("#test h1");
// console.log(anotherH);
// anotherH.textContent = "Funsho";

// const names = ["Wale", "Ade", "Ola", "John"];

// let content = document.querySelector(".content");

// names.forEach((name) => {
//   content.innerHTML += `<p> ${name} </p>`;
// });

// getAttribute, setAttribute
// const link = document.querySelector(".google");

// link.getAttribute("class");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://techstudioacademy.com");
// link.setAttribute("target", "_blank");
// // link.setAttribute("style", "color: red");
// link.innerText = "Visit TECH STUDIO";

// link.style.color = "blue";
// link.style.fontSize = "4rem";

// select the body
// h1 javascript
// bacground color of blue

// const body = document.querySelector('body')
// body.innerHTML = '<h1>JAVASCRIPT</h1>'
// body.style.backgroundColor = 'blue'

// const success = document.querySelector(".success");
// success.classList.remove("test");
// success.classList.add("another");
// console.log(success.classList);
//add remove

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);

// paragraphs.forEach((p) => {
//   if (p.textContent.includes("success")) {
//     p.classList.add("success");
//   } else if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   } else {
//     p.classList.add("none");
//   }
// });

// const div = document.querySelector("div");
// div.classList.add("content");

//responding to users interaction - event listener, event handler

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("user clicked the button");
//   const body = document.querySelector("body");
//   body.style.backgroundColor = "blue";
//   btn.style.backgroundColor = "red";
// });

const form = document.querySelector("form");
const msg = document.querySelector("small");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = form.fullname.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirm.value;
  console.log(fullName, email, password, confirmPassword);

  if (password === confirmPassword) {
    console.log("password confirmed");
    msg.textContent = "Password confirmed";
  } else {
    console.log("Password does not match");
    msg.textContent = "Password does not match";
  }
  //form validation
});
"use strict";

const reset = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 11);
console.log(secretNumber);
// const score = Number(document.querySelector('.score'))
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🙊🙅🏾‍♂️no number entered");
  } else if (guess === secretNumber) {
    displayMessage("🎉🍾CORRECT NUMBER");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;

    if (score >= highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO HIGH 📈" : "TOO LOW 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST 😜😜");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

reset.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 11);
  displayMessage("START GUESSSING");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

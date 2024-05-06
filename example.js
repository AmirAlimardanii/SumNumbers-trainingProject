/*const num1 = (document.querySelector('.calc').textContent =
  Math.trunc(Math.random() * 10) + 1);

const num2 = (document.querySelector('.calc2').textContent =
  Math.trunc(Math.random() * 10) + 2);*/
let num1 = Math.trunc(Math.random() * 10) + 1;
let num2 = Math.trunc(Math.random() * 12) + 8;

let calcNum = `${num1} + ${num2} = `;

document.querySelector(".calc1").textContent = calcNum;

document.querySelector(".btn").addEventListener("click", function () {
  let answer = num1 + num2;
  let inputValue = Number(document.querySelector(".input1").value);
  if (!inputValue) {
    document.querySelector(".p").textContent = "answer first😒";
    document.querySelector("body").style.background = " #fdb939";
  } else if (inputValue === answer) {
    document.querySelector(".p").textContent = "great job👏";
    document.querySelector("body").style.background = "#3bf73b";
    document.querySelector(".p").style.fontSize = "30px";
  } else {
    document.querySelector(".p").textContent = "try again🤷‍♂️";
    document.querySelector(".body").style.background = "rgb(224, 99, 99)";
    document.querySelector(".p").style.fontSize = "30px";
  }
});

document.querySelector(".sec-btn").addEventListener("click", function () {
  num1 = Math.trunc(Math.random() * 10) + 8;
  num2 = Math.trunc(Math.random() * 8) + 3;
  answer = num1 + num2;
  calcNum = `${num1} + ${num2} = `;
  document.querySelector(".calc1").textContent = calcNum;
  document.querySelector(".input1").value = "";
  document.querySelector(".p").textContent = "answer the question😉";
  document.querySelector(".p").style.fontSize = "20px";
  // document.querySelector("body").style.backgroundColor = "#7fffd4";
  document.querySelector("body").style = ".body";
});
// document.querySelector(".blurbtn").addEventListener("click", function () {
//   document.querySelector(".blur").classList.remove("hidden");
// });
function myFunction(x) {
  x.classList.toggle("change");
}

const menuShow = function () {
  document.querySelector(".game-menu").classList.toggle("hidden-menu");
};

//second way

// document.querySelector(".change").addEventListener("click", function () {
//   document.querySelector(".game-menu").classList.remove("hidden-menu");
// });
// document.querySelector(".body").addEventListener("click", function () {
//   document.querySelector(".blur").classList.toggle("hidden");
// });
// document.querySelector("body").addEventListener("click", function () {
//   document.querySelector(".blur").classList.add("hidden");
// });

//not worke
// document.querySelector(".blur").addEventListener("click", function () {
//   document.querySelector(".blur").classList.toggle("hidden");
// });

// document.addEventListener("keydown", function (E) {
// if (E.key === "Escape") {
//   console.log(E.key);
// }
// });

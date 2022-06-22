let sign = document.querySelector(".signButton");
let login = document.querySelector(".loginButton");
let loginContent = document.querySelector(".view-login");
let signContent = document.querySelector(".view-sign");
let header = document.querySelector(".header");

sign.addEventListener("click", function (s) {
  loginContent.style.display = "none";
  login.style.background = "white";
  login.style.color = "black";
  header.textContent = "SignUp Form";
  sign.style.backgroundImage = "linear-gradient(-135deg, purple, pink)";
  sign.style.color = "white";
  signContent.style.display = "block";
});
login.addEventListener("click", function () {
  signContent.style.display = "none";
  sign.style.background = "white";
  sign.style.color = "black";
  header.textContent = "Login Form";
  login.style.backgroundImage = "linear-gradient(-135deg, purple, pink)";
  login.style.color = "white";
  loginContent.style.display = "block";
});

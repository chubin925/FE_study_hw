const idBtn = document.querySelector(".login-id");
const pwBtn = document.querySelector(".login-pw");
const loginBtn = document.querySelector(".everytime-login");

let idInput;
let pwInput;

pwBtn.addEventListener("input", function () {
  pwInput = pwBtn.value;
  idInput = idBtn.value;

  if (pwInput.length >= 8 && idInput.length > 0) {
    loginBtn.style.backgroundColor = "#f91f15";
    loginBtn.style.color = "white";
  } else {
    loginBtn.style.backgroundColor = "#f2f2f2";
    loginBtn.style.color = "#636363";
  }
});

console.log(pwBtn);

// Password Match Authentication

const pwd = document.querySelector("#password");
const pwdConfirm = document.querySelector("#confirm-password");

let confirm1 = "";
let confirm2 = "";

function addError() {
  let element = document.getElementById("error");
  element.classList.remove("no-match-invisible");
  element.classList.add("no-match-visible");
}

function removeError() {
  let element = document.getElementById("error");
  element.classList.remove("no-match-visible");
  element.classList.add("no-match-invisible");
}

pwd.addEventListener("keyup", () => {
  let pwdString = pwd.value.toString();
  confirm1 = pwdString;
  if (confirm1 === confirm2) {
    removeError();
  } else {
    addError();
  }
});

pwdConfirm.addEventListener("keyup", () => {
  let pwdConfirmString = pwdConfirm.value.toString();
  confirm2 = pwdConfirmString;
  if (confirm1 === confirm2) {
    removeError();
  } else {
    addError();
  }
});

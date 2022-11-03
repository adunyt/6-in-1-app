let login;
let password;

window.onload = () => {
  let popup = document.querySelector("#login-popup");
  popup.style.display = "flex";
};

function toggleSpinner() {
  let spinner = document.querySelector(".spinner");
  spinner.classList.toggle("hidden");
}

function sendLetter(to, subject, message) {
  console.log(`Отправляем письмо с заголовком ${subject} с сообщением "${message}" на почту ${to} от пользователя ${from}`);
  ell.sendLetter(login, password, "Yandex", to, subject, message);
}

function saveCreditals() {
  if (document.querySelector("#login-popup").checkValidity()) {
    login = document.querySelector("#email-input").value;
    password = document.querySelector("#password-input").value;
    console.log(login, password)
  }
}

function tryLogin(){
  let login_response = JSON.parse(eel.tryLogin("Yandex", login, password));
  console.log(login_response)
}
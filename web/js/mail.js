let login;
let password;
const popup = document.querySelector("#login-popup");
const content = document.querySelector(".content");

let emails;

function toggleMailListSpinner() {
  let spinner = document.querySelector(".spinner");
  spinner.classList.toggle("hidden");
}


function togglePopup() {
  if (popup.style.display == "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
  if (content.style.filter == "blur(3px)") {
    content.style.filter = "none";
  }
  else {
    content.style.filter = "blur(3px)"
  }
}


function toggleVisibilityElement(element_selector) {
  let el = document.querySelector(element_selector);
  el.classList.toggle("hidden");
}


async function sendLetter(to, subject, message) {
  console.log(`Отправляем письмо с заголовком ${subject} с сообщением "${message}" на почту ${to} от пользователя ${from}`);
  await ell.sendLetter(login, password, "Yandex", to, subject, message);
}


async function getLetters() {
  let letters = await eel.getLetters(login, password, "Yandex")();
  console.log(letters);
}


function saveCreditals() {
  if (document.querySelector("#login-popup").checkValidity()) {
    login = document.querySelector("#email-input").value;
    password = document.querySelector("#password-input").value;
    console.log(login, password)
  }
}


async function tryLogin() {
  try {
    toggleVisibilityElement("#spinner-popup");
    let login_response = await eel.tryLogin("Yandex", login, password)();
    console.log(login_response);

    if (login_response["imap"]["status"] == "OK" && login_response["smtp"]["status"] == "OK") {
      togglePopup();
      toggleVisibilityElement("#spinner-mail-list");
      getLetters();
    } else if (login_response["imap"]["status"] == "Error" || login_response["smtp"]["status"] == "Error") {
      alert("Вход не удался, попробуйте еще раз");
    }
    else {
      alert("Вход не удался, попробуйте еще раз");
    }
  }
  catch (error) {
    console.error(error);
  }
  finally {
    toggleVisibilityElement("#spinner-popup");
  }
}


async function form() {
  try {
    saveCreditals();
    await tryLogin();

  }
  finally {
    return false;
  }
}
function addLetter(from, to, subject, message) {
  console.log(`Отправляем письмо с заголовком ${subject} с сообщением "${message}" на почту ${to} от пользователя ${from}`);

  Email.send({
    Host: "localhost",
    Username: "username",
    Password: "password",
    To: to,
    From: from,
    Subject: subject,
    Body: message
  }).then(
    message => alert(message)
  );
}
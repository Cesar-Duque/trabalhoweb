document.getElementById("display-current-year").innerHTML =
  new Date().getFullYear();

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "receiver@email_address.com",
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Site de Refugiadas!",
    Attachments: [
      {
        name: "File_Name_with_Extension",
        path: "Full Path of the file",
      },
    ],
  }).then(function (message) {
    alert("E-mail enviado com sucesso!");
  });
}

async function setLocale() {
  const buttonLocale = document.getElementById("tradutor");
  const storedLocale = localStorage.getItem("locale");
  const portugueseLocale = await fetch("/locales/pt-br.json").then((data) =>
    data.json()
  );
  const ukranianLocale = await fetch("/locales/uk.json").then((data) =>
    data.json()
  );

  if (!storedLocale || storedLocale === JSON.stringify(portugueseLocale)) {
    localStorage.setItem("locale", JSON.stringify(portugueseLocale));
  } else {
    localStorage.setItem("locale", JSON.stringify(ukranianLocale));
  }
  
  buttonLocale.addEventListener("click", () => {
    if (!storedLocale || storedLocale === JSON.stringify(portugueseLocale)) {
      localStorage.setItem("locale", JSON.stringify(portugueseLocale));
    } else {
      localStorage.setItem("locale", JSON.stringify(ukranianLocale));
    }
  });
}
setLocale();

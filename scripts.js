// ------------- Llamado a la API de usuarios para la sección CLIENTES de la página de Borago -----------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`;

      document
        .getElementById("clientes")
        .insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.log(error));

// -------- Validación de correo del lado del cliente ---------

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Ingrese un correo electrónico.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent =
      "El valor ingresado debe ser un correo electrónico";
  } else if (email.validity.tooShort) {
    emailError.textContent = `El email ingresado debe tener al menos ${email.minLength} caracteres; debe ingresar ${email.value.length}.`;
  }
  emailError.className = "error active";
}

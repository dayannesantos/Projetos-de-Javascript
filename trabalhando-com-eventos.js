function register(event) {
  console.log(event);

  const sectionElement = event.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} Registrado com sucesso!`);
  } else {
    alert("As senhas não coincidem. Tente novamente!");
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

function removeListener() {
  button.removeEventListener("click", register);
  alert("Event removed!");
}

let firstName = prompt("Digite seu primeiro nome: ");
let lastName = prompt("Digite seu sobrenome: ");
let fieldOfStudy = prompt("Qual seu campo de estudo: ");
let yearOfBirth = prompt("Digite seu ano de nascimento: ");

alert(
  "Recruta cadastrado com sucesso!" +
    "\nNome Completo: " +
    firstName +
    " " +
    lastName +
    "\nÁrea de estudos: " +
    fieldOfStudy +
    "\n" +
    "Idade: " +
    (2022 - yearOfBirth)
);

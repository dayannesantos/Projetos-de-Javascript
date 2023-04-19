let choseWord = prompt("Qual palavra deseja verificar?").toLowerCase();
let reverseWord = "";

for (let i = choseWord.length - 1; i >= 0; i--) {
  reverseWord += choseWord[i];
}

if (choseWord === reverseWord) {
  alert(
    `A palavra ${choseWord} é um palíndromo. \n ${choseWord} : ${reverseWord}`
  );
} else {
  alert(
    `A palavra ${choseWord} não é um palíndromo. \n ${choseWord} : ${reverseWord}`
  );
}

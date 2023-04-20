const number = prompt("Escolha o número que deseja calcular a tabuada:");

let result = "";

for (let factor = 1; factor <= 20; factor++) {
  result += number + " x " + factor + " = " + number * factor + "\n";
}

alert("Este é o rsultado da tabuada de" + number + ":\n" + result);

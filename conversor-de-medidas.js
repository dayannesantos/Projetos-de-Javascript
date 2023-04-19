let valueInMeters = Number(prompt("Digite o valor em metros:"));
let unity = prompt(
  "Escolha uma das opções abaixo: \nmm: Milímetro \ncm: Centímetro \ndm: Decímeetro \ndam: decâmetro \nhm: hectômetro \nkm: quilômetro"
).toLowerCase();

switch (unity) {
  case "mm":
    result = valueInMeters * 1000;
    alert(`O resultado da conversão é ${result}mm`);
    break;
  case "cm":
    result = valueInMeters * 100;
    alert(`O resultado da conversão é ${result}cm`);
    break;
  case "dm":
    result = valueInMeters * 10;
    alert(`O resultado da conversão é ${result}dm`);
    break;
  case "dam":
    result = valueInMeters / 10;
    alert(`O resultado da conversão é ${result}dam`);
    break;
  case "hm":
    result = valueInMeters / 100;
    alert(`O resultado da conversão é ${result}hm`);
    break;
  case "km":
    result = valueInMeters / 1000;
    alert(`O resultado da conversão é ${result}km`);
    break;
  default:
    alert("Opção inválida!");
}

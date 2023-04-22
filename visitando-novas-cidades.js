const touristName = prompt("E aí, turista! Qual é o seu nome?");
let cities = "";
let NumberOfCitiesVisited = 0;

let option = prompt("Você visitou alguma cidade? (Sim/Não)").toLowerCase();

while (option === "sim") {
  let city = prompt("Qual o nome da cidade visitada?");
  cities += " - " + city + "\n";
  NumberOfCitiesVisited++;
  option = prompt("Você visitou alguma outra cidade? (Sim/Não)").toLowerCase();
}

alert(
  `Turista: ${touristName} \nQuantidade de cidades visitadas: ${NumberOfCitiesVisited} \nCidades visitadas: ${cities}`
);

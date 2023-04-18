let attacker = prompt("Informe o nome do seu personagem:");
let attackPower = Number(prompt("Seu poder de ataque:"));

let defender = prompt("Digite o nome do seu adversário:");
let lifePoints = Number(
  prompt("Digite a quantidade de pontos de vida do adversário:")
);
let defensePower = Number(prompt("Informe o poder de defesa do adversário:"));
let hasShield = prompt(
  "Ele possui um escudo? Digite sim ou não. \n1 - Sim \n2 - Não"
);

let damageDone;
if (attackPower > defensePower && hasShield == "Não") {
  damageDone = attackPower - defensePower;
}
if (attackPower > defensePower && hasShield == "Sim") {
  damageDone = attackPower - defensePower / 2;
} else if (attackPower <= defensePower) {
  damageDone = 0;
}

let newLifePoints = lifePoints - damageDone;
let newDefensePower = defensePower - damageDone;
let newAttackPower = attackPower - damageDone;

alert(
  `${attacker}: 
  \nPoder de ataque: ${newAttackPower} 
  \n${defender}: 
  \nPontos de vida: ${newLifePoints} 
  \nPoder de Defesa: ${newDefensePower}
  \nDano causado: ${damageDone}`
);

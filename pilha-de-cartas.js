const deckOfCards = [];
let option = "";

do {
  option = prompt(
    "Cartas no baralho: " +
      deckOfCards.length +
      "\n1. Adicionar uma carta \n2. Puxar uma carta \n3. Sair"
  );

  switch (option) {
    case "1":
      let newCard = prompt("Qual carta deseja adiconar ao baralho?");
      deckOfCards.push(newCard);
      break;
    case "2":
      let drownCard = deckOfCards.pop();
      if (!drownCard) {
        alert("Não há nenhuma carta no baralho.");
      } else {
        alert("Você puxou um(a) " + drownCard);
      }
      break;
    case "3":
      alert("Saindo do jogo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "3");

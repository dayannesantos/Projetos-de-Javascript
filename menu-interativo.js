option = "5";

do {
  option = prompt(
    "Seja bem-vindo(a)! Escolha sua bebida:" +
      "\n1. Café" +
      "\n2. Chá" +
      "\n3. Suco" +
      "\n4. Refrigerante" +
      "\n5. Encerrar"
  );

  switch (option) {
    case "1":
      alert("Você escolheu beber: Café");
      break;
    case "2":
      alert("Você escolheu beber: Chá");
      break;
    case "3":
      alert("Você escolheu beber: Suco");
      break;
    case "4":
      alert("Você escolheu beber: Refrigerante");
      break;
    case "5":
      alert("Encerrando menu de opções...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "5");

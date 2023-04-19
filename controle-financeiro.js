let balance = Number(prompt("Informe a quantidade de dinheiro inicial:"));
let option = "";

do {
  option = prompt(
    "Saldo disponível: R$ " +
      balance +
      "\n1 Adicionar dinheiro" +
      "\n2 Remover dinheiro" +
      "\n3 Sair"
  );

  switch (option) {
    case "1":
      balance += Number(
        prompt("Informe a quantidade de dinheiro a ser adicionada:")
      );
      break;
    case "2":
      balance -= Number(
        prompt("Informe a quantidade de dinheiro a ser removida:")
      );
      break;
    case "3":
      alert("Saindo da aplicação...");
      break;
    default:
      alert("Entrada inválida!");
  }
} while (option !== "3");

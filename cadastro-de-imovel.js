const properties = [];
let option = "";

do {
  option = prompt(
    "Bem-vindo ao cadastro de imóveis!\n" +
      "Imóveis cadastrados: " +
      properties.length +
      "\n\nEscolha uma opção:\n1. Cadastrar novo imóvel \n2. Listar imóveis \n3. Sair"
  );

  switch (option) {
    case "1":
      let property = {};
      property.owner = prompt("Informe o nome do proprietário:");
      property.numberOfBedrooms = prompt("Informe a quantidade de quartos:");
      property.numberOfBathrooms = prompt("Informe o quantidade de banheiros:");
      property.hasAGarage = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmation = confirm(
        "Deseja salvar o imóvel?\n" +
          "Proprietário: " +
          property.owner +
          "\nQuartos: " +
          property.numberOfBedrooms +
          "\nBanheiros: " +
          property.numberOfBathrooms +
          "\nPossui garagem? " +
          property.hasAGarage
      );

      if (confirmation) {
        properties.push(property);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu inicial...");
      }
      break;
    case "2":
      for (let i = 0; i < properties.length; i++) {
        alert(
          "Imóvel: " +
            (i + 1) +
            "\nProprietário: " +
            properties[i].owner +
            "\nQuartos: " +
            properties[i].numberOfBedrooms +
            "\nBanheiros: " +
            properties[i].numberOfBathrooms +
            "\nPossui garagem?: " +
            properties[i].hasAGarage
        );
      }
      break;
    case "3":
      alert("Saindo da tela de cadastro...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "3");

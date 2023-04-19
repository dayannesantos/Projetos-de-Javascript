let listPatient = [];
let option = "";

do {
  let patients = "";
  for (i = 0; i < listPatient.length; i++) {
    patients += i + 1 + "° - " + listPatient[i] + "\n";
  }

  option = prompt(
    `Pacientes: ${patients} \nEscolha uma opção: \n1 Novo paciente \n2 Consultar paciente \n3 Sair`
  );
  switch (option) {
    case "1":
      let newPatient = prompt("Digite o nome do paciente");
      listPatient.push(newPatient);
      break;
    case "2":
      patientConsulted = listPatient.shift();
      if (patientConsulted) {
        alert("Paciente consultado: " + patientConsulted);
      } else {
        alert("Não há pacientes na fila de espera.");
      }
      break;
    case "3":
      alert("Encerrando exibição da lista de pacientes...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "3");

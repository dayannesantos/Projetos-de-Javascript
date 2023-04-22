let jobs = [];

function listJobOpenings() {
  const listingOfJobs = jobs.reduce(function (finalText, job, index) {
    //1. nome, (x candidatos)
    finalText += index + ". ";
    finalText += job.name;
    finalText += " (" + job.candidates.length + " candidatos)\n";
    return finalText;
  }, "");
  alert(listingOfJobs);
}
function createANewJob() {
  const name = prompt("Informe o nome da vaga:");
  const description = prompt("Informe uma descrição para a vaga:");
  const deadline = Number(prompt("Informe a data limite da vaga (dd/mm/aaaa)"));

  const confirmation = confirm(
    "Deseja criar uma vaga com essas informações?" +
      "\nVaga: " +
      name +
      "\nDescrição: " +
      description +
      "\nTempo restante: " +
      deadline
  );
  if (confirmation) {
    const newJob = { name, description, deadline, candidates: [] };
    vagas.push(newJob);
    alert("Vaga criada com sucesso!");
  } else {
    alert("Voltando ao início do painel de controle...");
  }
}
function viewAJob() {
  const index = prompt("Informe o índice da vaga que deseja exibir:");

  if (index >= jobs.length || index < 0) {
    alert("Índice inválido.");
    return;
  }
  const job = jobs[index];

  const finalCandidates = job.candidates.reduce(function (
    finalText,
    candidate
  ) {
    return finalText + "\n - " + candidate;
  },
  "");

  alert(`Vaga n° ${index} 
  \nNome: ${job.nome} 
  \nDescrição: ${job.description} 
  \nData limite: ${job.deadline} 
  \nQuantidade de candidatos: ${job.candidates.length}
  \nCandidatos inscritos: ${finalCandidates}`);
}
function registerCandidate() {
  const candidate = prompt("Informe o nome do(a) candidato(a):");
  const index = prompt("Informe o índice da vaga a ser preenchida:");
  const job = jobs[index];

  const confirmation =
    confirm(`Deseja inscrever o candidato(a) ${candidate} na vaga ${index}?
  \nNome: ${job.nome}
  \nDescrição: ${job.description}
  \nData limite: ${job.deadline}
  `);
  if (confirmation) {
    job.candidates.push(candidate);
    alert("Inscrição realizada com sucesso!");
  } else {
    alert("Voltando ao início do painel de controle...");
  }
}
function deleteAJob() {
  const index = prompt("Informe o índice da vaga que deseja excluír:");
  const job = jobs[index];

  const confirmation = confirm(`Tem certeza que deseja excluír a vaga ${index}?
  \nNome: ${job.nome}
  \nDescrição: ${job.description}
  \nData limite: ${job.deadline}
  `);

  if (confirmation) {
    jobs.splice(index, 1);
    alert("A vaga foi excluída.");
  }
}

function showMenu() {
  const option = prompt(
    "Bem-vindo(a) ao painel de controle. Escolha uma ação:" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a) em uma vaga" +
      "\n5. Excluír uma vaga" +
      "\n6. Sair"
  );
  return option;
}

function runApplication() {
  let option = "";
  do {
    showMenu();

    switch (option) {
      case "1":
        listJobOpenings();
        break;
      case "2":
        createANewJob();
        break;
      case "3":
        viewAJob();
        break;
      case "4":
        registerCandidate();
        break;
      case "5":
        deleteAJob();
        break;
      case "6":
        alert("Saindo do painel de controle...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (option !== "6");
}
runApplication();

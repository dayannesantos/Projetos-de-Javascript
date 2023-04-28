let nameOld = prompt('Digite o nome da pessoa mais velha')
let ageOld = prompt('Digite a idade da pessoa mais velha')
let nameYoung = prompt('Digite o nome da pessoa mais nova')
let ageYoung = prompt('Digite a idade da pessoa mais nova')
let ageDifference = (ageOld - ageYoung)
alert(
  'Pessoa mais velha: ' + nameOld + '\nIdade: ' + ageOld + ' anos' + 
  '\n\nPessoa mais nova: ' + nameYoung + '\nIdade: ' + ageYoung + ' anos' + 
  '\n\nDiferença de idade é de: ' + ageDifference + ' anos'
)
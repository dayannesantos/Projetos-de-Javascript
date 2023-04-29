let spaceWarp = 0
let chosenOption = ''

let shipName = prompt('Digite o nome da nave')
chosenOption = prompt('Deseja entrar em dobra espacial? \n1- Sim \n2- Não')

while (chosenOption == '1') {
  spaceWarp += 1
  chosenOption = prompt('Deseja entrar na próxima dobra espacial? \n1- Sim \n2- Não')
}
alert('Nave: ' + shipName + '\nQuantidade de dobras: ' + spaceWarp)
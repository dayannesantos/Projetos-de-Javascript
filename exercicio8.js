let shipName = prompt('Digite o nome da sua Nave')
let invertedName = ''

for(let pos = shipName.length - 1; pos >= 0; pos--) {
  if(shipName[pos] == 'e') {
    break
  }
  invertedName += shipName[pos] 
}
alert('Nome original da nave: ' + shipName + '\nNome após ocultação: ' + invertedName)
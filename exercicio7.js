let shipName = prompt('Digite o noma da nave')

let chosenOption1 = prompt('Digite o caractere que deseja substituir')

let chosenOption2 = prompt('Digite o novo caractere')

let shipNewName = ''

for(let pos = 0; pos < shipName.length; pos++) {
  if(shipName[pos] == chosenOption1) {
    shipNewName += chosenOption2
  } else {
    shipNewName += shipName[pos]
  }
}
alert('O novo nome da nave é: ' + shipNewName)
let shipName = prompt('Digite o nome da sua nave')
let shipVelocity = 0
let chosenOption = ''

function showMenu() {
  let option
  while (option != '1' && option != '2' && option != '3' && option != '4') {
    option = prompt('O que deseja fazer?\n' +
                    '1- Acelerar a nave em 5km/s\n' +
                    '2- Desacelerar a nave em 5km/s\n' +
                    '3- Imprimir dados de bordo\n' +
                    '4- Sair do programa')
  }

  return option
}

function speedUp(velocity) {
  let newVelocity = velocity + 5
  return newVelocity
}

function  slowDown(velocity) {
  let newVelocity = velocity - 5
  if(velocity <= 0) {
    velocity = 0
  } else {
    return newVelocity
  }
}

function spaceShipBoardData(shipName, velocity) {
  alert('Espaçonave: ' + shipName + '\nVelocidade: ' + velocity + 'km/s')
}

do {
  chosenOption = showMenu()
  switch (chosenOption) {
    case '1':
      shipVelocity = speedUp(shipVelocity)
      break
    case '2':
      shipVelocity = slowDown(shipVelocity)
      break
    case '3':
      spaceShipBoardData(shipName, shipVelocity)
      break
    case '4':
      alert('Encerrando programa de bordo.')
  }
} while (chosenOption != '4')
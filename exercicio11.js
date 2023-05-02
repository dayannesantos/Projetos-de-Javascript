const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
];

let crewGreaterThan9 = hitchedSpaceships.filter(spaceShip => {
  return spaceShip[1] > 9
}).map(spaceShip => {
  return spaceShip[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceShip => {
  return spaceShip[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceShip => {
  return spaceShip[0].toUpperCase()
})

let message = 'Espaçonaves com mais de 9 tripulantes: ' + crewGreaterThan9.join(', ')
message += '\nPlataforma(s) com processo de engate: ' + (ongoingHitchPlatform + 1)
message += '\nEspaçonaves destacadas: ' + highlightedSpaceships.join(', ')

alert(message)
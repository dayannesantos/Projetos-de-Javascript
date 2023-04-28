let pilotName = prompt('Digite seu nome')
let velocity = 0
let newVelocity = prompt('A qual velocidade deseja acelerar a nave?')
let speedConfirmed = confirm('Você está indo para a velocidade ' + newVelocity + 'km/s.')
if (speedConfirmed) {
  velocity = newVelocity
}

if (velocity <= 0) {
  alert('Nave está parada. Considere partir e aumentar a velocidade.')
}else if (velocity < 40) {
  alert('Você está devagar, podemos aumentar mais.')
}else if (velocity < 80) {
  alert('Parece uma boa velocidade para manter')
}else if (velocity < 100) {
  alert('Velocidade alta. Considere diminuir.')
}else { 
  alert('Velocidade perigosa. Controle automático forçado.')
}
alert('Piloto: ' + pilotName + '\nVelocidade: ' + velocity + 'km/s')
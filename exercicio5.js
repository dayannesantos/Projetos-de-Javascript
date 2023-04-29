let lightYears = prompt('Qual a distância em anos-luz você gostaria de converter?')

let conversionOption = prompt('Escolha uma medida de conversão: \n1- Parsec(pc) \n2- Unidade astronônica (AU) \n3- Quilômetros (km) \nDigite o número da opção desejada')

let selectedOption
let convertedValue

switch(conversionOption) {
  case '1':
    selectedOption = 'Parsec'
    convertedValue = lightYears * 0.306601
    break
  case '2':
    selectedOption = 'Unidade astronônica'
    convertedValue = lightYears * 63241.1
    break
  case '3':
    selectedOption = 'Quilômetros'
    convertedValue = lightYears * 9.5 * Math.pow(10,12)
    break
  default:
    selectedOption = 'Unidade não identificada'
    convertedValue = 'Conversão fora do escopo'
}
alert('Distância em anos-luz ' + lightYears + '\n' + conversionOption + ': ' + convertedValue)
let firstVehicleName = prompt("Digite o nome do primeiro veículo:");
let firstVelocity = prompt("Digite a velocidade do veículo:");

let secondVehicleName = prompt("Digite o nome do segundo veículo:");
let secondVelocity = prompt("Digite a velocidade do veículo:");

if (firstVelocity > secondVelocity) {
  alert(`${firstVehicleName} é mais veloz que ${secondVehicleName}`);
} else if (firstVelocity < secondVelocity) {
  alert(`${secondVehicleName} é mais veloz que ${firstVehicleName}`);
} else {
  alert("Os veículos têm a mesma velocidade.");
}

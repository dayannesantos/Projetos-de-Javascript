let option = "";

do {
  option = prompt(
    "Escolha a área que deseja calcular:" +
      "\n1. Calcular área do Triângulo" +
      "\n2. Calcular área do Retângulo" +
      "\n3. Calcular área do Quadrado" +
      "\n4. Calcular área do Trapézio" +
      "\n5. Calcular área do Círculo" +
      "\n6. Sair"
  );

  switch (option) {
    case "1":
      let triangleBase = Number(prompt("Informe a base do triângulo:"));
      let triangleHeight = Number(prompt("Informe a altura do triângulo:"));
      function calculateTriangle() {
        return (triangleBase * triangleHeight) / 2;
      }
      alert("A área do triângulo é " + calculateTriangle());
      break;
    case "2":
      let rectangleBase = Number(prompt("Informe a base do retângulo:"));
      let rectangleHeight = Number(prompt("Informe a altura do retângulo:"));
      function calculateRectangle() {
        return rectangleBase * rectangleHeight;
      }
      alert("A área do retângulo é " + calculateRectangle());
      break;
    case "3":
      let squareSide = Number(
        prompt("Informe a medida da lateral do quadrado:")
      );
      function calculateSquare() {
        return squareSide * squareSide;
      }
      alert("A área do quadrado é " + calculateSquare());
      break;
    case "4":
      let largerBase = Number(prompt("Informe a base maior do trapézio:"));
      let smallerBase = Number(prompt("Informe a base menor do trapézio:"));
      let trapezeHeight = Number(prompt("Informe a altura do trapézio:"));
      function calculateTrapeze() {
        return ((largerBase + smallerBase) * trapezeHeight) / 2;
      }
      alert("A área do trapézio é " + calculateTrapeze());
      break;
    case "5":
      let radiusCircle = Number(prompt("Informe o raio do círculo:"));
      function calculateCircle() {
        return 3.14 * radiusCircle * radiusCircle;
      }
      alert("A área do cículo é " + calculateCircle());
      break;
    case "6":
      alert("Saindo do modo calculadora...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "6");

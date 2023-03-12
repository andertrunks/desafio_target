let numero_informado = 1;
let sequencia_fibonacci = 1;
let cont = 1;

for (var i = 1; numero_informado > sequencia_fibonacci; i++) {
  cont = sequencia_fibonacci - cont;
  sequencia_fibonacci = cont + sequencia_fibonacci;
}
if (numero_informado === sequencia_fibonacci) {
  console.log(numero_informado + " é sequência de Fibonacci");
} else {
  console.log(numero_informado + " não é sequência de Fibonacci");
}

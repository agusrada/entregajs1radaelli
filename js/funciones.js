// primer pre entrega usando los condicionales y ciclos

//condicional if
let numero = prompt("por favor ingrese un Numero ");
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

//ciclo for
console.log("Contando del 0 al numero elegido");
for (let i = 0; i <= numero; i++) {
  console.log(i);
}

//ciclo do-while
let inicial = 0;
console.log("Contando del 0 al nnuemero elegido");
do {
  console.log(inicial);
  inicial++;
} while (inicial <= numero);
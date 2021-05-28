'use strict';
let boolean = false;
let contador = 0;
let array = new Array();
let arrayFiltrado;
let listadoNumeros = 0;
do {
  let numeroPedido = prompt("Introduzca un número: ");
  if(!isNaN(numeroPedido))
  {
    contador ++;
    if(contador % 2 != 0)
      array.push(Number(numeroPedido));

    else
      array.push(+numeroPedido);
  }
  else
    boolean = true;
} while (!boolean)

console.log("Listado de números: ");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("De los cuales son múltiplos de 3: ");
  arrayFiltrado = array.filter(filtrarArray)
  arrayFiltrado.sort(function(a, b) {return b-a})
  for (var i = 0; i < arrayFiltrado.length; i++) {
    console.log(arrayFiltrado[i])
  }
let numero;
function filtrarArray(numero)
{
  return numero % 3 == 0;
}

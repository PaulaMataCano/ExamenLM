var contador = 0;
var salida = false;
var suma = 0;
var numerosIntroducidos = "";
do {
  var numeroPedido = prompt("Introduzca un número: ");
  if (numeroPedido == 0)
  {
    salida = true
  }
  else {
    contador ++;
    suma = parseInt(suma) + parseInt(numeroPedido);
    numerosIntroducidos +=  numeroPedido + ", ";
  }

}
while (!salida);
var resultado = parseInt(suma)/ contador;

console.log("El resultado de la media de los números " +
numerosIntroducidos + " es "+ resultado); 

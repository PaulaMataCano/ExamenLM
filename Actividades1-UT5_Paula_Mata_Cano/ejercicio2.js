var numeroPedido = prompt("Introduzca un numero con 5 decimales separados con una coma:");
var posicion = numeroPedido.indexOf(",");
console.log("Se muestra el número con un decimal: "+ numeroPedido.substring(0, posicion + 2));
console.log("Se muestra el número con dos decimales: "+ numeroPedido.substring(0, posicion + 3));
console.log("Se muestra el número con tres decimales: "+ numeroPedido.substring(0, posicion + 4));
console.log("Se muestra el número completo: "+ numeroPedido);

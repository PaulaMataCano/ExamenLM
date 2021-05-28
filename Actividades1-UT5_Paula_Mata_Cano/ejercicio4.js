var x = prompt("Introduzca la cantidad de números: ");
var suma = 0;
var multiplicacion = 1;
for (var i = 1; i <= x; i++)
{
  suma += i;
  multiplicacion *= i;
}
console.log("El resultado de la suma de esos números es: " + suma);
console.log("El resultado de la multiplicación de esos números es: " + multiplicacion); 

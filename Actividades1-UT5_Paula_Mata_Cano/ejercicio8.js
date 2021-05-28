var cantidad = prompt("Introduzca la cantidad que va a pagar: ");
if(cantidad < 50)
{
  console.log("Su habitación es de tipo 1");
}
else if(cantidad >= 50 && cantidad < 100)
{
  console.log("Su habitación es de tipo 2");
}
else if(cantidad >= 100 && cantidad <= 150)
{
  console.log("Su habitación es de tipo 3");
}
else if(cantidad > 150)
{
  console.log("Su habitación es una suite ");
}

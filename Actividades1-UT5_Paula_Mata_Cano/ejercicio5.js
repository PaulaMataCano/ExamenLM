/*Para realizar este ejercicio he hecho un for con 10 pasadas y he comprobado
que funcionase, con 100 no he podido probarlo correctamente porque la página web
iba muy lenta y se recargaba constantemente */
var contador = 0;
for (var i = 0; i < 100; i++)
{
  var numeroPedido = prompt("Introduzca un número: ");
  if(numeroPedido > 0)
  {
    contador ++;
  }
}
console.log("Se han introducido "+ contador + " números positivos");

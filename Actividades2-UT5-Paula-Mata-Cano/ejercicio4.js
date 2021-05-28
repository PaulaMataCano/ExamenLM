'use strict';
function gestionarDatosTrabajadores()
{
  let numeroTrabajadores = prompt("Introduzca el número de trabajadores");
  for (var i = 0; i < numeroTrabajadores; i++) {
    gestionarDatos(pedirDatos());
  }
}
function pedirDatos()
{
  let nombre = prompt("Introduzca su nombre: ");
  let numHoras = prompt("Introduzca el número de horas: ");
  let precioPorHora = prompt("Introduzca el precio por hora: ");
  let datos = new Array(nombre, numHoras, precioPorHora);
  return (datos)
}
function gestionarDatos(datos)
{
  let salarioBruto = datos[1] * datos[2];
  let impuestoHacienda = salarioBruto * 0.2;
  let impuestoSS = salarioBruto * 0.08;
  let salarioNeto = salarioBruto - (impuestoHacienda + impuestoSS);
  console.log("Nombre: " +datos[0]);
  console.log("Salario Bruto: "+salarioBruto);
  console.log("Retenido por hacienda: "+ impuestoHacienda);
  console.log("Impuesto de la Seguridad Social: " +impuestoSS);
  console.log("Salario Neto: "+ salarioNeto);
  console.log("  ");
}
gestionarDatosTrabajadores();

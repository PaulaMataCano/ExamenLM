'use strict';
  let string;
  let boolean;
  let array;
  let resultado = 1;
function Ejercicio1(string, boolean, array, func)
{
  if(typeof func === 'function'&&
    typeof string === 'string'&&
    typeof boolean === 'boolean'&&
    Array.isArray(array))
  {
      boolean = true;
      array.forEach((item, array) => {
          resultado *= item;
      });
      if(resultado >= 100)
      {
        if(!string.includes("a"))
          console.log("Muy bien, no has usado la a");
      }
      else
        console.log("El resultado de tu array "+resultado+" no es válido");

  }
  else {
    console.log("Los datos no están en el formato correcto");
    func();
  }
}
Ejercicio1("Hola mundo", true, [1,2,3,4], () =>{alert("Se acabó el juego")});
Ejercicio1("Sí", true, [1,2,3,40], () =>{alert("Se acabó el juego")});
Ejercicio1("Sí", true, "Hola mundo", () =>{alert("Se acabó el juego")});

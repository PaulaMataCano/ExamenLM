'use strict';
let datos = new Array();
let alumno = "";
let datosAlumnoFinales = "";
let contador = 0;
let control;
function Ejercicio2(...datos) {
    control = false;
    for(let i of datos)
      {
            for(let j of i)
            {
              control = true;
              if(contador == 0)
                alumno += j + "-";
              else if(contador == 1)
                alumno += j + "-asignaturas: ";
              else
                alumno += j + "/";
              contador++;
            }
            datosAlumnoFinales = alumno.substring(0, alumno.length - 1);
            console.log(datosAlumnoFinales)
            alumno = "";
            datosAlumnoFinales = "";
            contador = 0;
      }
      if(control == false)
        console.log("No hay datos para mostrar")
 }
 Ejercicio2(["Juan", "DAMB", "LM", "ED", "SI", "BBDD"],
            ["Marta", "DAMA", "Programacion", "LM", "ED", "FOL"]);
 Ejercicio2();
 Ejercicio2(["Jose", "DAMC", "ED", "LM", "FOL", "BBDD"]);

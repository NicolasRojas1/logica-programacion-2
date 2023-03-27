/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
 */

let degree = Number(prompt("Ingrese una temperatura en Celcius"));

function calcKelvin(degree){
  let  kelvin = degree + 273.15;
  let resultKelvin = `Los ${degree}° Celsius equivalen a ${kelvin}° Kelvin`; 
  return resultKelvin;
}

function calcFarenheit(degree){
  let  faren = degree * 1.8 + 32;
  let resultFarenheit = `Los ${degree}° Celsius equivalen a ${faren}° Kelvin`;
  return resultFarenheit; 
}

function calcDegree(){
  while (isNaN(degree)) {
    alert("El valor ingresado es incorrecto");
    degree = Number(prompt("Ingrese una temperatura en Celcius"));
  }

  calcKelvin(degree);
  calcFarenheit(degree);

  document.getElementById('resultado').innerHTML = `
  ${calcKelvin(degree)}
  ${calcFarenheit(degree)}`;
}

calcDegree();
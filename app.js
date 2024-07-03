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

/* Programa una funcion que cuente el numero de caracteres de una cadena de 
texto. Ej: miFuncion("Hola mundo") devolverá 10*/

const contarCadena = (texto = "") => {
    if (!texto) {
        console.warn(`No ingresaste ningun texto`);
    } else {
        console.info(`En el texto: "${texto}" hay ${texto.length} caracteres`)
    }
}

//contarCadena();

//---------------------------------------------------------------------//

/* 2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá
 "Hola". */

const recortarTexto = (texto = "", cantidad = undefined) => {
    if (!texto) {
        console.warn(`No has ingresado ningun texto`);
        return;
    } if (!cantidad || cantidad <= 0 || isNaN(cantidad)) {
        console.warn(`No ingresaste la longitud para recortar el texto`);
        return;
    }
    console.info(`El nuevo texto recortado es: "${texto.slice(0, cantidad)}" `)
}

//recortarTexto("Hola",2);

//---------------------------------------------------------------------//

/*  Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal']. */

const dividirTexto = (texto, divisor = undefined) => {
    if (!texto) {
        console.warn(`No has ingresado ningun texto`);
        return;
    } if (!divisor || divisor === undefined) {
        console.warn(`No has seleccionado con que lo quieres separar`);
        return;
    }
    var textoDividido = texto.split(divisor);
    console.log(textoDividido);
    console.info(`El texto: "${texto}" se ha transformado en: [${textoDividido}]`);
}

//dividirTexto("hola muchachos como van", " ");

//---------------------------------------------------------------------//
/* Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* typeof: Garantiza que el tipo del dato sea number.
isNaN: Garantiza que el número no sea NaN, ya que NaN es un valor numérico inválido.*/

var repetirTexto = (texto, cantidad = undefined) => {
    console.log("Cantidad:", cantidad, "Tipo de Cantidad:", typeof cantidad);
    if (!texto) {
        return console.warn(`No ingresaste un texto`);
    }
    if (!cantidad) {
        return console.warn(`No ingresaste el numero de veces a repetir`);
    }
    if (typeof cantidad !== 'number') {
        return console.warn(`La cantidad ingresada no es un numero`);
    }
    if (!Number.isInteger(cantidad)) {
        return console.warn(`La cantidad debe ser un numero entero`);
    }
    if (cantidad <= 0) {
        return console.error(`La cantidad no puede ser negativa`);
    }
    console.info(`El texto ingresado es: "${texto}" y su resultado es: "${texto.repeat(cantidad)}"`);
}

//repetirTexto("aasas", "a"); 

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".*/

var girarTexto = (texto) => {

    if (!texto) {
        return console.warn(`No has ingresado ningun texto`);
    }
    if (typeof texto !== 'string') {
        return console.warn(`El valor ingresado es incorrecto, intenta con un string`);
    }

    let resultado = texto.split(""); //Split divide en un array de cadenas
    let textoGirado = resultado.reverse().join("");
    return console.log(textoGirado);
}

//girarTexto("1212");

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

var contarPalabra = (texto, palabra) => {
    if (!texto) {
        return console.warn(`No has ingresado ningun texto`);
    }
    if (!palabra) {
        return console.warn(`No has ingresado ninguna palabra a buscar`);
    }
    if (typeof texto !== 'string' && typeof palabra !== 'string') {
        return console.error(`Caracter invalido, ingresa un texto`);
    }
    let resultado = 0;
    let division = texto.split(" ");
    division.forEach(p => {
        if (p === palabra) {
            resultado++;
        }
    });

    return console.log(resultado);
}

//contarPalabra("hola mundo adios mundo", "mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

var esPalindromo = (texto) => {
    
    if (!texto) {
        console.warn(`Ingresa una palabra o texto`);
    }
    //expresion regular para buscar de forma global todos lo espacios
    let palabraRecortada = texto.replace(/ /g, "");
    let palabraGirada = palabraRecortada.split("").reverse().join("");

    if (palabraRecortada === palabraGirada) {
        return console.info(`${palabraRecortada} = ${palabraGirada}, es palindromo`);
    } 
        return console.warn(`${palabraRecortada} No es palindromo ${palabraGirada}`);
}

//esPalindromo("salas")

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

var eliminarPatron = (texto, patron) => {

    if (!texto) {
        return console.warn('Ingresa un texto por favor');
    }
    if (!patron) {
        return console.warn('Ingresa un patrón de búsqueda');
    }
    if (typeof texto !== 'string' || typeof patron !== 'string' ) {
        return console.error('El valor ingresado debe ser de tipo cadena de texto');
    }

    let regex = new RegExp(patron, 'g'); //expresion regular dinamica, g de global
    let reemplazo = texto.replace(regex, '')
    console.log(reemplazo);   
}
//Tambien se habria hecho de la siguiente manera
/* Usar split y join para eliminar el patrón
    let partes = texto.split(patron); // Divide el texto en partes usando "xyz" como delimitador
    let resultado = partes.join("");  // Une las partes sin el patrón "xyz" */

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

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

const dividirTexto = (texto = undefined, divisor = undefined) => {
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

var repetirTexto = (texto = undefined, cantidad = undefined) => {
    //console.log("Cantidad:", cantidad, "Tipo de Cantidad:", typeof cantidad);
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

repetirTexto("aasas", "a"); 

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

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

var contarPalabra = (texto = undefined, palabra = undefined) => {
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

    return console.log(`La palabra ${palabra}, se repite ${resultado} veces`);
}

//contarPalabra("hola mundo adios mundo", "mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

var esPalindromo = (texto = undefined) => {
    
    if (!texto) {
        console.warn(`Ingresa una palabra o texto`);
    }
    //expresion regular para buscar de forma global todos lo espacios
    let palabraRecortada = texto.replace(/ /g, ""); //este permite eliminar en todo el texto
    let palabraGirada = palabraRecortada.split("").reverse().join("");

    if (palabraRecortada === palabraGirada) {
        return console.info(`${palabraRecortada} = ${palabraGirada}, es palindromo`);
    } 
        return console.warn(`${palabraRecortada} No es palindromo ${palabraGirada}`);
}

//esPalindromo("salas")

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

var eliminarPatron = (texto = undefined, patron = undefined) => {

    if (!texto) {
        return console.warn('Ingresa un texto por favor');
    }
    if (!patron) {
        return console.warn('Ingresa un patrón de búsqueda');
    }
    if (typeof texto !== 'string' || typeof patron !== 'string' ) {
        return console.error('El valor ingresado debe ser de tipo cadena de texto');
    }

    let regex = new RegExp(patron, 'ig'); //expresion regular dinamica, g de global
    let reemplazo = texto.replace(regex, '')
    console.info(reemplazo);   
}
//Tambien se habria hecho de la siguiente manera
/* Usar split y join para eliminar el patrón
    let partes = texto.split(patron); // Divide el texto en partes usando "xyz" como delimitador
    let resultado = partes.join("");  // Une las partes sin el patrón "xyz" */

//eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = (min = undefined, max = undefined) => {
    //verifico la ausencia de valor
    if (min === undefined || max === undefined) {
        return console.warn('No ingresaste los rangos a evaluar');
    }
    if (isNaN(min) || isNaN(max)) {
        return console.error('Debes ingresar numeros');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return console.warn('Por favor ingresa numeros enteros');
    }
    min = Math.ceil(min); //usa el mismo numero o redondea al siguiente
    max = Math.floor(max), //usa el mismo numero o redondea al menor
    //(max - min + 1) para ver el rango de posibilidades
    console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
    console.log(Math.round(Math.random() * 100) + 500);
}

//numeroAleatorio(501, 600);
/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const numeroCapicua = (numero = undefined)  => {
    if (numero === undefined) {
        return console.warn('No ingresaste un valor');
    }
    if (isNaN(numero)) {
        return console.error('El valor a ingresar debe ser un numero');
    }
    let numeroStr = numero.toString();
    let numeroGirado = numeroStr.split("").reverse().join("");
    
    if (numeroStr === numeroGirado) {
        return console.info(`${numeroStr} = ${numeroGirado} es capicúa`)
    } else {
        return console.error('El numero no es capicúa');
    }
}

//numeroCapicua(202.202);

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = undefined) => {
    if (numero === undefined) {
        return console.warn('No ingresaste un numero');
    }
    if (isNaN(numero) || !Number.isInteger(numero)) {
        return console.error('Por favor ingresa un numero entero');
    }
    if (numero < 0 ) {
        return console.error('El numero debe ser positivo');
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }
    console.info(`El factorial de ${numero} es ${resultado}`);
    return resultado;
}

//factorial(0)

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (numero = undefined) => {
    if (numero === undefined) {
        return console.warn('No has ingresado un numero');
    }
    if (isNaN(numero) || !Number.isInteger(numero) || typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero entero');
    }
    if (numero < 2) {
        return console.info(`el numero ${numero} no es primo`);
    }
    if (numero === 2) {
        return console.info(`El ${numero} es primo`);
    }
    if (numero % 2 === 0 ) {
        return console.info(`El numero ${numero} no es primo`);
    }

    let limite = Math.sqrt(numero);
    /* Itera desde 3 hasta la parte entera de la raíz cuadrada del número, incrementando de 2 en 2 para considerar solo números impares. */
    for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
            return console.info(`El numero ${numero} no es primo`)
        }
    }
    return console.log(`El numero ${numero} es primo`);
}

//esPrimo(14);

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const esPar = (numero = undefined) => {
    if (numero === undefined) {
        return console.warn('No ingresaste un numero');
    }
    if (isNaN(numero) || !Number.isInteger(numero) || typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero entero');
    }
    if (numero % 2 === 0) {
        return console.info(`El numero ${numero} es par`);
    } else {
    return console.info(`El numero ${numero} es impar`);
    }
}

//esPar(71);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const fahrenheitACelsius = (gradosF = undefined) => {
    if (gradosF === undefined) {
        return console.warn('No ingresaste un valor a calcular');
    }
    if (isNaN(gradosF) || typeof gradosF !== 'number') {
        return console.error('Por favor ingresa un numero');
    }
    let celsius = ((gradosF - 32) / 1.8).toFixed(2);
    let celsiusParseo = parseFloat(celsius);

    return console.info(`Los ${gradosF}° fahrenheit equivalen a ${celsiusParseo}° celsius `)
}

//fahrenheitACelsius(900000);

const celsiusAFahrenheit = (gradosC = undefined) => {
    if (gradosC === undefined) {
        return console.warn('No ingresaste un valor a calcular');
    }
    if (isNaN(gradosC) || typeof gradosC !== 'number') {
        return console.error('Por favor ingresa un numero');
    }
    let fahrenheit = ((gradosC * 1.8) + 32).toFixed(2);
    let fahrenheitParseo = parseFloat(fahrenheit);

    return console.info(`Los ${gradosC}° celsius equivalen a ${fahrenheitParseo}° fahrenheit`);
}

//celsiusAFahrenheit(10);

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const binarioaDecimal = (numero = undefined) => {
    if (typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero');
    }
    //Expresion regular para comprobar si es binario
    let regex = new RegExp(`^[01]+$`);
    //A string para usar RegExp
    let numeroString = numero.toString();
    //Si la expresion regular no encuentra un numero binario
    if (!regex.test(numeroString)) {
        return console.error('El numero ingresado no es binario');
    }
    //el calculo se hace de derecha a izquierda del numero, por ello se gira el numero
    let numeroDividido = numeroString.split("").reverse();
    let resultado = 0;
    //Formula para calcular decimal
    for (let i = 0; i < numeroDividido.length; i++) {
        resultado += Number.parseInt(numeroDividido[i]) * (Math.pow(2,i));
    }
    return console.info(`El numero ${numero} convertido a binario es: ${resultado}`);
}

const decimalaBinario = (numero = undefined) => {
    if (isNaN(numero) || typeof numero !== 'number' || !Number.isInteger(numero)) {
        return console.error('No ingresaste un numero valido, intentalo de nuevo');
    }
    let numeroDecimal = numero;
    let binario;
    let numerosBinarios = [];
    //Compruebo que me de cada digito binario hasta que su division llegue al numero 1
    while (numero >= 1 ) {
        //Si el modulo da 0, el binario en esa posicion es 0 y lo agrego al arreglo
        if (numero % 2 === 0) {
            binario = 0;
            numerosBinarios.push(binario);
            //Si el modulo da 1, el binario en esa posicion es 1 y lo agrego al arreglo
        } if (numero % 2 === 1) {
            binario = 1;
            numerosBinarios.push(binario);
        }
        //Continuo con la division hasta llegar a 1
       numero = Math.floor(numero / 2);
    }
    let resultado = numerosBinarios.reverse().join("")
    return console.info(`EL numero decimal ${numeroDecimal} a binario es ${resultado}`);
}

const convertirBinarioDecimal = (numero, base) => {
    if (numero === undefined) {
        return console.warn('No ingresaste un numero');
    }
    if (isNaN(numero) || typeof numero !== 'number' || !Number.isInteger(numero)) {
        return console.error('No ingresaste un numero valido, intentalo de nuevo');
    }
    if (base !== 2 && base !== 10) {
        return console.error('La base ingresada no es correcta');
    }
    if (base === 2 ) {
        return binarioaDecimal(numero);
    }
    if (base === 10) {
        return decimalaBinario(numero);
    }
    return console.error('No ingresaste los parametros correctos, verifica');
} 

convertirBinarioDecimal(110110110, 2);

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const calcularDescuento = (total = undefined, descuento = undefined) => {

    if (total === undefined || descuento === undefined) {
        return console.warn('No ingresastes los valores requeridos');
    }
    if (typeof total !== 'number' || typeof descuento !== 'number' || isNaN(total) || isNaN(descuento)) {
        return console.error('No ingresaste un valor válido');
    }
    if (total <= 0) {
        return console.error('El total debe ser un numero positivo');
    }
    if (descuento <= 0) {
        return console.warn('El descuento tiene que ser mayor a 0');
    }
    let resultado = total - ((total * descuento) / 100);
    console.info(`El producto con el precio de: ${total} tiene un descuento de: ${descuento}% y su valor queda en: ${resultado}`);
    return resultado;
}

calcularDescuento(1000, 20);

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

function esFecha(fecha) {
    
    //Si es algo distinto a String
    if (typeof fecha !== 'string') {
        return false;
    }
    //validacion con regex de la cadena YYYY-MM-DD
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fecha)) {
        return false;
    }
    //Si no se puede parsear
    if (isNaN(Date.parse(fecha))) {
        return false
    }
    return true;
}

const calcularAnhos = (fecha) => {
    if (!esFecha(fecha)) {
        return console.error('la fecha ingresada no es válida o no está en el formato correcto');
    }
    //Consigo la fecha actual
    let fechaActual = new Date();
    //console.log(fechaActual.toDateString());

    //Fecha a comparar
    let fechaIngresada = new Date(fecha);

    //Calculo los milisegundos de un dia
    let milisegundosEnUnDia = 24 * 60 * 60 * 1000;

    //Hallo la diferencia de milisegundos entre fechas
    let diferenciaEnMilisegundos = (fechaActual.valueOf() - fechaIngresada.valueOf());

    //Calculo cuando años son esos milisegundos
    let anhos = (diferenciaEnMilisegundos / milisegundosEnUnDia) / 365;
    console.log(`La cantidad de años transcurridos desde ${fechaIngresada.toDateString()} hasta ${fechaActual.toDateString()} es de: ${anhos.toFixed(2)} años`);
    return anhos;
}

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

let contarVocalesConsonantes = (cadena = undefined) => {
    if (cadena === undefined) {
        return console.warn('No has ingresado un texto');
    }
    if (!(typeof cadena === 'string')) {
        return console.error('No ingresaste un texto válido');
    }

    let regExpVocales = /[aeiouáéíóúüàèìòù]/gi;
    let regExpConsonantes = /[b-df-hj-np-tv-zñ]/ig;

    //match me devuelve las ocurrencias de una expresion regular en un array
    let vocales = cadena.match(regExpVocales);
    let consonantes = cadena.match(regExpConsonantes);

    let vocalesEncontradas = vocales.length;
    let consonantesEncontradas = consonantes.length;

    return console.info(`La cadena tiene Vocales: ${vocalesEncontradas} y Consonantes: ${consonantesEncontradas}`);
}

contarVocalesConsonantes("Hola mundo");

calcularAnhos('1984-10-23');

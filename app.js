/* Programa una funcion que cuente el numero de caracteres de una cadena de 
texto. Ej: miFuncion("Hola mundo") devolverá 10*/

const contarCadena = (texto = "") => {
    (!texto) ? console.warn(`No ingresaste ningun texto`) : console.info(`En el texto: "${texto}" hay ${texto.length} caracteres`);
}
//contarCadena("Hola mundo");

//---------------------------------------------------------------------//

/* 2) Programa una función que te devuelva el texto recortado según el 
número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá
 "Hola". */

const recortarTexto = (texto = "", cantidad = undefined) => 
    (!texto) 
        ? console.warn(`No has ingresado ningun texto`)
        : (!cantidad || cantidad <= 0 || isNaN(cantidad)) 
            ? console.warn(`No ingresaste la longitud para recortar el texto`)
            : console.info(`El nuevo texto recortado es: "${texto.slice(0, cantidad)}" `)

recortarTexto("Hola Mundo", 4);

//---------------------------------------------------------------------//

/*  Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal']. */

const dividirTexto = (texto = "", divisor = undefined) => {
    if (!texto) {
        console.warn(`No has ingresado ningun texto`);
        return;
    } if (!divisor || divisor === undefined) {
        console.warn(`No has seleccionado con que lo quieres separar`);
        return;
    }
    var textoDividido = texto.split(divisor);
    console.info(`El texto: "${texto}" se ha transformado en: [${textoDividido}]`);
}

dividirTexto("hola muchachos como van", " ");

//---------------------------------------------------------------------//
/* Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* typeof: Garantiza que el tipo del dato sea number.
isNaN: Garantiza que el número no sea NaN, ya que NaN es un valor numérico inválido.*/

var repetirTexto = (texto = undefined, cantidad = undefined) => {
    if (!texto) return console.warn(`No ingresaste un texto`);
    
    if (!cantidad) return console.warn(`No ingresaste el numero de veces a repetir`);
    
    if (!Number.isInteger(cantidad)) return console.warn(`La cantidad debe ser un numero entero`);
    
    if (cantidad <= 0) return console.error(`La cantidad no puede ser negativa`);
    
    console.info(`El texto ingresado es: "${texto}" y su resultado es: "${texto.repeat(cantidad)}"`);
}

repetirTexto("Hola mundo", "a"); 

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

var contarPalabra = (texto = "", palabra = "") => {
    if (!texto) return console.warn(`No has ingresado ningun texto`);
    
    if (!palabra) return console.warn(`No has ingresado ninguna palabra a buscar`);
    
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

const numeroCapicua = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un valor');

    if (typeof numero !== 'number') return console.error('El valor a ingresar debe ser un numero');
    
    let numeroStr = numero.toString();
    let numeroGirado = numeroStr.split("").reverse().join("");

    (numeroStr === numeroGirado) 
    ? console.info(`${numeroStr} = ${numeroGirado} es capicúa`)
    : console.error('El numero no es capicúa');
}

numeroCapicua(202.202);

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un numero');

    if (isNaN(numero) || !Number.isInteger(numero) || typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero entero');
    }
    if (numero < 0) return console.error('El numero debe ser positivo');

    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    console.info(`El factorial de ${numero} es ${resultado}`);
    return resultado;
}

//factorial(1)

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn('No has ingresado un numero');
    
    if (isNaN(numero) || !Number.isInteger(numero) || typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero entero');
    }
    if (numero === 2) return console.info(`el numero ${numero} es primo`);

    if (numero < 2 || numero % 2 === 0 ) return console.info(`El numero ${numero} no es primo`);

    let limite = Math.sqrt(numero);
    /* Itera desde 3 hasta la parte entera de la raíz cuadrada del número, incrementando de 2 en 2 para considerar solo números impares. */
    for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
            return console.info(`El numero ${numero} no es primo`)
        }
    }
    return console.log(`El numero ${numero} es primo`);
}

//esPrimo(8);

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const esPar = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un numero');

    if (isNaN(numero) || !Number.isInteger(numero) || typeof numero !== 'number') {
        return console.error('Por favor ingresa un numero entero');
    }
    return (numero % 2 === 0)
    ? console.info(`El numero ${numero} es par`)
    : console.info(`El numero ${numero} es impar`)
}
//esPar(10);

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

calcularAnhos('1984-10-23');

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

let contarVocalesConsonantes = (cadena = undefined) => {
    if (cadena === undefined) return console.warn('No has ingresado un texto');

    if (!(typeof cadena === 'string')) return console.error('No ingresaste un texto válido');

    let regExpVocales = /[aeiouáéíóúüàèìòù]/gi;
    let regExpConsonantes = /[b-df-hj-np-tv-zñ]/ig;

    //match me devuelve las ocurrencias de una expresion regular en un array, si no tiene nada deja un array vacio con el []
    let vocales = cadena.match(regExpVocales) || [];
    let consonantes = cadena.match(regExpConsonantes) || [];

    let vocalesEncontradas = vocales.length;
    let consonantesEncontradas = consonantes.length;

    return console.info(`La cadena tiene Vocales: ${vocalesEncontradas} y Consonantes: ${consonantesEncontradas}`);
}

contarVocalesConsonantes("Hola");

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

// ^ Indica el comienzo de la cadena.
// + Indica que el conjunto anterior puede aparecer una o más veces
// $ Indica el final de la cadena
// \s Indica que acepte espacios en blanco

validarNombre = (nombre = "") => {
    if (!nombre) return console.warn('No has proporcionado un nombre');
    if (typeof nombre !== 'string')  return console.error('El valor que has ingresado no es correcto');
    
    let regExp = /^[a-zÑñáéíóúüàèìòù\s]+$/gi;
    let validacion = regExp.test(nombre.trim());
    console.info(validacion);
    return validacion;
}

//validarNombre("  Nicolas Rojas ");

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

validarCorreo = (correo = "") => {
    // Verifica la entrada de información
    if (!correo) return console.warn('No has ingresado un correo');
    // Expresion regular que comprueba el formato de correo
    let regExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}(?:\.[a-z]{2,})?$/i;

    // Eliminar espacios inicio y final
    correo = correo.trim();
    let validacion = regExp.test(correo);

    // Comprobacion del valor ingresado con retorno
    (!validacion) 
    ? console.error('El correo electronico ingresado no es válido')
    : console.info(`El correo ${correo} es válido`)
    
    return validacion;
}
//validarCorreo("ejemplo@dominio");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

let elevarArray = (numeros = undefined) => {
    if (!Array.isArray(numeros)) return console.error('No has proporcionado un arreglo a evaluar');
    
    if (numeros.length === 0) return console.warn('El arreglo esta vacio');
    
    if (!numeros.every(numero => typeof numero === 'number')) {
        return console.warn('Los valores del arreglo deben ser de tipo numerico');
    }
    //Map me permite generar un nuevo arreglo a partir de otro
    let potenciaNumeros = numeros.map(numero => Math.pow(numero, 2));
    console.log(potenciaNumeros);
    return potenciaNumeros;
}

//elevarArray([2,3,4]);
//elevarArray([]);
//elevarArray();
//elevarArray(["a", 2, "3"]);

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

let ordernarArreglo = (numeros = undefined) => {
    // Se comprueba si es un arreglo
    if (!Array.isArray(numeros)) {
        return console.error('No has proporcionado un arreglo a evaluar');
    }
    // Se verifica que no este vacio
    if (numeros.length === 0) {
        return console.warn('El arreglo esta vacio');
    }
    // Se comprueba que cada elemento del arreglo sea un numero
    if (!numeros.every((numero) => typeof numero === 'number')) {
        return console.warn('Todos los valores del arreglo deben ser de tipo numerico');
    }
    //a - b, le indica a sort que reste un numero con el otro, si el resultado es negativo "a" ira antes que b, si es positivo cambian posicion, y si es igual se mantienen en sus puesto.
    numeros = numeros.sort((a, b) => a - b);
    let numerosSeleccionados = [numeros[numeros.length - 1], numeros[0]];
    console.log(numerosSeleccionados);
    return numerosSeleccionados;

    // Otra forma de hacerlo, asi mantengo los numeros y no los transformo a string con el metodo sort
    // Let max = Math.max(...numeros);
    // Let min = Math.min(...numeros);
    // let numerosSeleccionados = [max, min];
}

//ordernarArreglo([1,4,5,99,-60]);
//ordernarArreglo([1,4,5,9,10]);
//ordernarArreglo();
//ordernarArreglo([1,4,true]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

let paresEImpares = (numeros = []) => {
    //Compruebo que sea arreglo
    if (!Array.isArray(numeros)) {
        return console.error('No has ingresado un arreglo');
    }
    //Que no este vacio
    if (numeros.length === 0) {
        return console.warn('El arreglo no puede estar vacio');
    }
    //Cada elemento del arreglo debe ser numerico
    if (!numeros.every((numero) => typeof numero === 'number')) {
        return console.warn('Los valores del arreglo deben ser de tipo numerico');
    }
    //Arreglos de almacenamiento
    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
    console.log(`pares: [${pares}], impares: [${impares}]`);
    return [pares, impares];
}

paresEImpares([1,2,3,4,5,6,7,8,9,0]);

/** 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenarNumeros = (array = undefined) => {
    //Compruebo que sea arreglo
    if (!Array.isArray(array)) {
        return console.error('No has ingresado un arreglo');
    }
    //Que no este vacio
    if (array.length === 0) {
        return console.warn('El arreglo no puede estar vacio');
    }
    //Cada elemento del arreglo debe ser numerico
    if (!array.every((numero) => typeof numero === 'number')) {
        return console.error('Los valores del arreglo deben ser de tipo numerico');
    }
    //Uso el operador de propagacion para no afectar el arreglo original
    const numerosAgrupados = {
        asc: [...array].sort((a, b) => a - b),
        desc: [...array].sort((a, b) => b - a)
    }

    console.log(numerosAgrupados);
    return numerosAgrupados;
}
//Ejemplos de uso
//ordenarNumeros([7, 5,7,8,6])
//ordenarNumeros("a",2, 3);
//ordenarNumeros([]);
//ordenarNumeros(["a", 2, "2"]);

/** 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

/**
 *  elemento:        El elemento actual del arreglo que se está procesando.
    indice:          El índice del elemento actual.
    arregloOriginal: El arreglo original sobre el que se está llamando filter.
 */

const eliminarDuplicados = (arr = undefined) => {

    //Compruebo que sea arreglo
    if (!Array.isArray(arr)) {
        return console.error('No has ingresado un arreglo');
    }
    //Que no este vacio
    if (arr.length === 0) {
        return console.warn('El arreglo no puede estar vacio');
    }

    //Que existan al menos 2 elementos
    if (arr.length < 2) {
        return console.warn('El arreglo debe tener al menos 2 elementos');
        
    }
    const elementosUnicos = arr.filter((elemento, indice, arregloOriginal) => {
        /**
         * filter: Recorre cada elemento del arreglo. Para cada elemento, se ejecuta la función que pasas como argumento.
         * arregloOriginal.indexOf(elemento) : Busco el primer índice donde se encuentra elementoActual en el arreglo original. SOLO LA PRIMERA APARICION
         * === indice: Comparo el índice devuelto por indexOf con indice, que es el índice actual en la iteración de filter
         * 
         * Primera "x":
         * indexOf("x") devuelve 0, indiceActual es 0 → incluida.
         * 
         * Segunda "x": POR QUE INDEXOF SOLO TOMA LA PRIMERA APARICION
         * indexOf("x") devuelve 0, indiceActual es 2 → no incluida.
         * 
         * 10 (primera aparición):
         * indexOf(10) devuelve 1, indiceActual es 1 → incluida.
         * 
         * 10 (segunda aparición):
         * indexOf(10) devuelve 1, indiceActual es 5 → no incluida.
         */
        return arregloOriginal.indexOf(elemento) === indice;
    });
    console.info(elementosUnicos);

    //Tambien se puede con Set, que permite agrupar elementos en un arreglo pero no deja que se repitan
    //sinDuplicados: [... new Set(arr)];
    
}
//eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
//eliminarDuplicados([1]);
//eliminarDuplicados([]);

/**26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const promediarValores = (arr = undefined) => {

    //Que sea un arreglo
    if (!Array.isArray(arr)) {
        return console.warn('No has ingresado un arreglo');
    }
    //Que no este vacio
    if (arr.length === 0) {
        return console.warn('El arreglo no debe estar vacio');
    }
    //Que sea de elementos numericos
    if (!arr.every((numero) => typeof numero === 'number')) {
        return console.error('Los elementos del arreglo deben ser numericos');
    }

    //Sumo todos los elementos del arreglo
    let sumatoria = 0;
    arr.forEach(numero => {
        sumatoria += numero;
    });

    //Promedio y retorno su valor
    const promedio = sumatoria / arr.length;
    console.info(promedio);
    //return promedio; 

    //Solucion con ECMA script6
    /**
     * total    = me guarda el valor previo
     * numero   = el numero que en este momento recorre
     * index    = posicion del numero
     * arr      = el arreglo
     */
    // console.log(arr.reduce((total, numero, index, arr) => {
    //     total += numero;
    //     if (index === arr.length - 1) {
    //         return `El promedio del arreglo es de : ${total / arr.length}`
    //     } else {
    //         return total;
    //     }
    // }));
}
//promediarValores([9,8,7,6,5,4,3,2,1,0]);
//promediarValores();
//promediarValores([1,2,"1"]);

/**27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.
Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {

    //Se utiliza destructuracion
    constructor( {idPelicula, titulo, director, anioEstreno, paisesOrigen, generos, calificacionImbd }) {
        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paisesOrigen = paisesOrigen;
        this.generos = generos;
        this.calificacionImbd = calificacionImbd;

        //Ejecucion del metodo
        this.validarIMDB(idPelicula);
    }
}

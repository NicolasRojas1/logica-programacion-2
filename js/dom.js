//Accediendo a los nodos del dom
console.log('**** Elementos del Documento *****');

// console.log(document.head);

// //Accediendo en la parte del body
// console.log(document.body);

// //Accediento al HTML, ya que como los anteriores no se puede obtener
// console.log(document.documentElement);

// //Mapeo del DOM completo (el tipo del documento)
 //console.log(document.doctype);

// //Titulo
// console.log(document.title);

// //Juego de caracteres
// console.log(document.characterSet);

// //Acceder a enlaces del documento, OJO NO SON ARREGLOS
// console.log(document.links);

// //Acceder a las imagenes, OJO NO SON ARREGLOS
// console.log(document.images);

// //Acceder a una coleccion de los formularios que tenga el documento
// console.log(document.forms);

// //Acceder a las hojas de estilo del documento
// console.log(document.styleSheets);

// //Acceder a los scripts
// console.log(document.scripts);

//Mapear algo que se selecciona en el navegador, captura la informacion que se seleccione con el cursor en el navegador
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// //---------- NODOS, ELEMENTOS Y SELECTORES --------------
// // no confundir una etiqueta de html con un nodo, los comentarios son nodos, las etiquetas son otro tipo de nodos, los textos como tal también son nodos

// console.log(document.getElementById("menu"));

// //Este es mas lento que el getElementById.Solo trae el primer elemento que encuentre con el id
// console.log(document.querySelector("#menu"));

// //Para buscar todos los elementos con este tipo de id, los trae como una Nodelist no un Arreglo
// console.log(document.querySelectorAll("#menu"));

// //Trae solo el primer a
// console.log(document.querySelector("a"));

// //Trae todos los elementos en una nodelist
// console.log(document.querySelectorAll("a"));

// //capturando la informacion de cada elemento
// document.querySelectorAll("a").forEach((ele) => console.log(ele));

// //Como es una especie de arreglo, esta nodeList puedo acceder a la posicion de algún elmento con la notación de los corchetes
// console.log(document.querySelectorAll(".card")[1]);

// //Traer una serie especifica de li, como en el documento hay mas de 10. Yo solo quiero las etiquetas con id de menu
// console.log(document.querySelectorAll("#menu li"));


//------------ Atributos y Data-Attributes ------------
// Son los atributos que tienen las etiquetas HTML, a partir de HTML5 se pueden crear nuestros propios atributos --> Data-Attributes

// Lo unico que pide es que empiece con la palabra data-

// Accediendo a un atributo, en este caso el lenguaje
console.log(document.documentElement.lang);

// Otra manera, MEJOR GETATTRIBUTE
console.log(document.documentElement.getAttribute("lang"));

// Capturando el link de un enlace
//1. En este primero trae todo con direccion IP, lo cual no es óptimo
console.log(document.querySelector(".link-dom").href);

//2. En este si trae el valor escrito en el atributo de href MEJOR
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Establecer un nuevo valor a los atributos
// Con anotación de punto
document.documentElement.lang = "en";

// La otra notacion, recibe el nombre del atributo y el nuevo valor
document.documentElement.setAttribute("lang", "es-MX");

//Guardando en variables los elementos del DOM, algunos programadores agregan un $ a la variable para identificarlos como elementos del HTML
const $linkDOM = document.querySelector(".link-dom");

// Con el target en _blank hace que se habra en una nueva pestaña
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

// Cambiando el href
$linkDOM.setAttribute("href", "https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64");

// Validar si hay atributos
console.log($linkDOM.hasAttribute("rel"));
console.log($linkDOM.hasAttribute("target"));

// Quitar atributos
$linkDOM.removeAttribute("rel")

// Validar si se quitó
console.log($linkDOM.hasAttribute("rel"));

// ------ TRABAJAR CON LOS DATA-ATRIBUTTES --------
// Obteniendo el data-attribute que creé
console.log($linkDOM.getAttribute("data-description"));

// Los data attribute los guarda en una propiedad del Mapa
console.log($linkDOM.dataset);

// Obteniendo un atributo en particular del data-attribute (data-description)
console.log($linkDOM.dataset.description);

// Establecer nuevos valores
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// Comprobar que cambio
console.log($linkDOM.dataset.description);

// CON LA ANOTACIÓN DEL PUNTO
$linkDOM.dataset.description = "Video del Profe Jon";

// Comprobar el cambio
console.log($linkDOM.dataset.description);

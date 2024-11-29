// //Accediendo a los nodos del dom
// console.log(document.head);

// //Accediendo en la parte del body
// console.log(document.body);

// //Mapeo del DOM completo (el tipo del documento)
// console.log(document.doctype);

// //Titulo
// console.log(document.title);

// //Juego de caracteres
// console.log(document.characterSet);

// //Acceder a enlaces del documento
// console.log(document.links);

// //Acceder a las imagenes
// console.log(document.images);

// //Acceder a una coleccion de los formularios que tenga el documento
// console.log(document.forms);

// //Acceder a las hojas de estilo del documento
// console.log(document.styleSheets);

// //Acceder a los scripts
// console.log(document.scripts);

// //Mapear algo que se selecciona en el navegador
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

//NODOS, ELEMENTOS Y SELECTORES
//no confundir una etiqueta de html con un nodo, los comentarios son nodos, las etiquetas son otro tipo de nodos, los textos como tal también son nodos

console.log(document.getElementById("menu"));

//Este es mas lento que el getElementById.Solo trae el primer elemento que encuentre con el id
console.log(document.querySelector("#menu"));

//Para buscar todos los elementos con este tipo
console.log(document.querySelectorAll("#menu"));

//Trae solo el primer a
console.log(document.querySelector("a"));

//Trae todos los elementos en una nodelist
console.log(document.querySelectorAll("a"));


let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let numero = parseInt(prompt("Ingrese un numero"));
//alert(`${nombre} ${apellido}`);

let div = document.querySelector('div');
div.innerHTML = numero * 7; 

let p = document.querySelector('p');
p.innerHTML = `Hola ${nombre} ${apellido}`;

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

//alert(`${nombre} ${apellido}`);

let p = document.querySelector('p');
p.innerHTML = `Hola ${nombre} ${apellido}`;

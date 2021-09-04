
let nombre;
let edad;
let instituto;

do{
	nombre = prompt("Ingrese nombre: ");
	edad = prompt("Ingrese edad: ");
	instituto = prompt("Donde estas estudiando actualmente?");
}while(confirm("Desea guardar los datos?") == false);

let h4 = document.querySelector('h4');
h4.innerHTML = `Hola ${nombre}, tu edad es ${edad} años, y actualmente esta estudiando en ${instituto}.`;

let ingreso = prompt("Ingrese el numero de cubos que desea agregar (use bajo su propio riesgo)")

container = document.querySelector('#container')

for(i=0; i<ingreso; i++){
    function colorAleatorio(){       
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        div.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
    }/*Pense en importar esta funcion desde la clase 2 pero no podia porque la ultima linea de la funcion no me serviria en este codigo*/
    let div = document.createElement("div")
    container.appendChild(div)    
    div.style.minWidth = '200px'
    div.style.height = '200px'
    div.style.margin = '2%'
    div.style.borderRadius = '10px'
    colorAleatorio();
    setInterval(colorAleatorio, 500);
}








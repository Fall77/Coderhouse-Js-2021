let fondo = prompt("Selecciona un color entre: azul; rojo; verde; rosa; violeta; amarillo o aleatorio.");

let p = document.querySelector('p');
let div = document.querySelector('div');

function colorAleatorio(){       
    let r = Math.random() * 255
	let g = Math.random() * 255
	let b = Math.random() * 255
    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
}
    

if(fondo == "azul"){
    document.body.style.backgroundImage = "url('img/backBlue.JPG')";
    document.body.style.backgroundColor = "#2a2a72";
}else if(fondo == "verde"){
    document.body.style.backgroundImage = "url('img/backGreen.JPG')";
    document.body.style.backgroundColor = "#5aff15";    
}else if(fondo == "rojo"){
    document.body.style.backgroundImage = "url('img/backRed.JPG')";
    document.body.style.backgroundColor = "#f53844";    
}else if(fondo == "rosa"){
    document.body.style.backgroundImage = "url('img/backPink.JPG')";
    document.body.style.backgroundColor = "#c81f70";    
}else if(fondo == "violeta"){
    document.body.style.backgroundImage = "url('img/backViolet.JPG')";
    document.body.style.backgroundColor = "#647dee";    
}else if(fondo == "amarillo"){
    document.body.style.backgroundImage = "url('img/backYellow.JPG')";
    document.body.style.backgroundColor = "#ffdd00";      
}else if(fondo == "aleatorio"){
    colorAleatorio();
    setInterval(colorAleatorio, 1000);      
}else{
    div.innerHTML = `No se encontro el color de fondo ${fondo} <br> <br> Se generaran colores aleatorios mientras tanto <br> <br> F5 para recargar`
    colorAleatorio();
    setInterval(colorAleatorio, 1000); 
}

p.innerHTML = `Seleccionaste el color de fondo ${fondo}`;
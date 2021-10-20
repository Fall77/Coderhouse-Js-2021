//heroBox es donde se va a colocar la imagen del heroe en base al "select"
let heroBox1 = document.querySelector('.heroBox')

//attack1,2,3 son las areas que contienen las animaciones de los ataques:
//se inicializan en display:none hasta que se presiona el boton de ataque
//1 mago
//2 arquero
//3 guerrero
let attackBox1 = document.querySelector('.attack1')
let attackBox2 = document.querySelector('.attack2')
let attackBox3 = document.querySelector('.attack3')

//etiqueta <p> en donde se coloca el nombre ingresado por el usuario
let nameBox0 = document.querySelector('.name0')

//boton de ataque
let attackButton0 = document.querySelector('#attack-button0')

//animacion1,2,3 son las areas donde se aplican y ejecutan las animaciones de los ataques:
//1 mago
//2 arquero
//3 guerrero
let animacion = document.querySelector('.firebox')
let animacion2 = document.querySelector('.arrowBox')
let animacion3 = document.querySelector('.warriorBox')

//variable vinculada al area que contiene al resto de los componentes
let animationArea = document.querySelector('.animation-area')

//Funcion creadora de objetos, la clase establece el tipo de imagen, fondos y ataques que se van a ver en el DOM, el nombre solo le agrega el nombre.
function Mage(nombre,clase){
    this.nombre = nombre;
    this.clase = clase;
//Metodo que remueve la clase hide del contenedor de la animacion de ataque
    this.atacar = function(){
        attackBox1.classList.remove('hide')
        animacion.classList.add('animacion')
        setTimeout(function(){
            //y vuelve a ocultarlo despues de 2 seg
            animacion.classList.remove('animacion')
            attackBox1.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
}
function Warrior(nombre,clase){
    this.nombre = nombre
    this.clase = clase

    this.golpe = function(){
        attackBox3.classList.remove('hide')
        animacion3.classList.add('animacion')
        setTimeout(function(){
            animacion3.classList.remove('animacion')
            attackBox3.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
}
function Archer(nombre,clase){
    this.nombre = nombre
    this.clase = clase

    this.flecha = function(){
        attackBox2.classList.remove('hide')
        animacion2.classList.add('animacion')
        setTimeout(function(){
            animacion2.classList.remove('animacion')
            attackBox2.classList.add('hide')
        }, 2000);
        clearTimeout()
    }
}

let selectValue;

document.querySelector('#hero').addEventListener("mouseup", (e) => {
    let select = e.target.value;

    selectValue = select;
    console.log(selectValue)
  });

let btn = document.querySelector('#create').addEventListener("click", function(e){
    e.preventDefault()

    let a = prompt("Ingrese un nombre");
    let b = selectValue;

    if (b == 'mage') {
        let name1 = new Mage(a, b)
            nameBox0.innerHTML = a;//envia nombre al DOM
            attackButton0.classList.remove('hide')//Vuelve visible el boton de ataque
            attackButton0.classList.add('blue')//Vuelve el boton de ataque color azul
            heroBox1.classList.add('mage')//Agrega la clase con la imagen del heroe
            animationArea.classList.add('background-mage')//agrega el background correspondiente al heroe

            attackButton0.addEventListener("click", function(){
                name1.atacar()//Ejecuta ataque de mago
            })

    }else if(b == 'warrior'){
        let name2 = new Warrior(a, b)
            nameBox0.innerHTML = a;
            attackButton0.classList.remove('hide')
            attackButton0.classList.add('red')
            heroBox1.classList.add('warrior')
            animationArea.classList.add('background-warrior')

            attackButton0.addEventListener("click", function(){
                name2.golpe()//Ejecuta ataque de guerrero
            })

    }else if(b == 'archer'){
        let name3 = new Archer(a, b)
            nameBox0.innerHTML = a;
            attackButton0.classList.remove('hide')
            attackButton0.classList.add('green')
            heroBox1.classList.add('archer')
            animationArea.classList.add('background-archer')

            attackButton0.addEventListener("click", function(){
                name3.flecha()//Ejecuta ataque de arquero
            })

    }

})

//Recarga la pagina, aun no encontre una manera de eliminar los objetos creados
let btn2 = document.querySelector('#delete').addEventListener("click", function(e){
    e.preventDefault()
    location.reload()
})
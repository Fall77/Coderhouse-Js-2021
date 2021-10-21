const frutas = [
    {
        nombre: "manzana",
        calorias: 52,
        image: "img/manzana.png"
    },
    {
        nombre: "pera",
        calorias: 57,
        image: "img/pera.png"
    },
    {
        nombre: "ciruela",
        calorias: 46,
        image: "img/ciruela.png"
    },
    {
        nombre: "mango",
        calorias: 60,
        image: "img/mango.png"
    },
    {
        nombre: "durazno",
        calorias: 50,
        image: "img/durazno.png"
    },
    {
        nombre: "banana",
        calorias: 89,
        image: "img/banana.png"
    },
    {
        nombre: "uva",
        calorias: 67,
        image: "img/uva.png"
    },
    {
        nombre: "naranja",
        calorias: 47,
        image: "img/naranja.png"
    },
    {
        nombre: "frambuesa",
        calorias: 53,
        image: "img/frambuesa.png"
    },
    {
        nombre: "kiwi",
        calorias: 61,
        image: "img/kiwi.png"
    },
    {
        nombre: "anana",
        calorias: 77,
        image: "img/anana.png"
    },
    {
        nombre: "limon",
        calorias: 29,
        image: "img/limon.png"
    },
    {
        nombre: "melon",
        calorias: 36,
        image: "img/melon.png"
    },
    {
        nombre: "pomelo",
        calorias: 42,
        image: "img/pomelo.png"
    },
    {
        nombre: "sandia",
        calorias: 30,
        image: "img/sandia.png"
    },
    {
        nombre: "cereza",
        calorias: 21,
        image: "img/cereza.png"
    },
    {
        nombre: "frutilla",
        calorias: 33,
        image: "img/frutilla.png"
    }
]

let inputVal = document.querySelector('#modalInput')
let modal = document.getElementById('modal')
let imgBox = document.querySelector('#imgBox')
let fruitBox = document.querySelector('#imgBox')

function getInputValue(){ 
    const valor = inputVal.value
    modal.classList.toggle('hide')
    console.log(valor)
    getFruit(valor)
}

function getFruit(valor){
    fruitBox.classList.remove('hide')
    const resultado = frutas.find( fruta => fruta.nombre === valor );
    console.log(resultado)
    showData(resultado)
}
function showAll(){
    modal.classList.toggle('hide')
    fruitBox.classList.remove('hide')
    frutas.sort(function(a, b){return a.calorias - b.calorias});
    frutas.forEach( (fruta)  => {
        console.log(fruta)
        imgBox.innerHTML += `
    <h1>${fruta.nombre}</h1>
    <p>Kcal: ${fruta.calorias}<p>
    <img src="${fruta.image}" alt="${fruta.nombre}">
    `
    })
}

function showData(resultado){
    imgBox.innerHTML = `
    <h1>${resultado.nombre}</h1>
    <p>Kcal: ${resultado.calorias}<p>
    <img src="${resultado.image}" alt="${resultado.nombre}">
    `
}
function borrarAll(){
    while (imgBox.firstChild){
        imgBox.removeChild(imgBox.firstChild);
      };
    inputVal.value = '';
}   

let btn = document.getElementById('openModal').addEventListener("click", function(){
    modal.classList.toggle('hide')
})

document.getElementById('sendBtn').addEventListener("click",getInputValue)

document.getElementById('allBtn').addEventListener("click", showAll)

document.getElementById('delBtn').addEventListener("click", borrarAll)
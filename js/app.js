const numerofavorito = document.getElementById("favnum");
const respuesta = document.getElementById("respuesta");

numerofavorito.addEventListener("input", function (){
    let numero = numerofavorito.value;

    if (numero === "") {
        respuesta.textContent = "";
    } else if (Number(numero) === 24) {
        respuesta.textContent = "!Bingo este es mi numero Favorito¡";
    } else if (Number(numero) > 24) {
        respuesta.textContent = "Te pasaste es menor";
    } else {
        respuesta.textContent = "te falta, Esta mas arriba";
    }
});

const gustos = document.getElementById("gustos");
const imagen = document.getElementById("imagen");
const resultado = document.getElementById("resultado");

gustos.addEventListener("change", function (){
    if (gustos.value === "futbol") {
        imagen.src = "img/Atletico Nacional.png";
        imagen.alt = "futbol";
        resultado.textContent = "Club Atletico Nacional";
    } else if (gustos.value === "pelicula") {
        imagen.src = "img/images.jpg";
        imagen.alt = "Pelicula";
        resultado.textContent = "Soy Leyenda";
    } else if (gustos.value === "moto") {
        imagen.src = "img/AKT250R.jpg";
        imagen.alt = "Moto";
        resultado.textContent = "AKTR 250";
    } else {
        imagen.src = "";
        imagen.atl = "";
    }
});


const boton = document.getElementById("boton");

boton.addEventListener("click", function (){
    alert("Gracias por visitar mi pagina de gustos");
});


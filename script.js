// =====================================================
// ESPERAR A QUE CARGUE TODA LA PÁGINA
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // BOTÓN DE LA PORTADA
    // =====================================================

    const boton = document.getElementById("btnComenzar");

    if (boton) {

        boton.addEventListener("click", () => {

            const historia = document.getElementById("historia");

            if (historia) {

                historia.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

    // =====================================================
    // CARTA
    // =====================================================

    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");
    const tapa = document.querySelector(".tapa");
    const musica = document.getElementById("musica");

    if (sobre && carta && tapa) {

        sobre.addEventListener("click", () => {

            // Reproducir música
            if (musica) {

                musica.play().catch(error => {
                    console.log("La música no pudo reproducirse automáticamente:", error);
                });

            }

            // Abrir el sobre
            tapa.style.transform = "rotateX(180deg)";

            // Mostrar la carta
            setTimeout(() => {

                sobre.style.display = "none";
                carta.classList.add("abierta");
            }, 800);

        });

    }

    // =====================================================
    // PÉTALOS
    // =====================================================

    const contenedorPetalos = document.querySelector(".petalos");

    if (contenedorPetalos) {

        function crearPetalo() {

            const petalo = document.createElement("div");

            petalo.classList.add("petalo");

            // Puedes cambiar estos emojis
            const figuras = [ "✨"];

            petalo.innerHTML = figuras[Math.floor(Math.random() * figuras.length)];

            petalo.style.left = Math.random() * 100 + "vw";

            petalo.style.animationDuration = (4 + Math.random() * 4) + "s";

            petalo.style.fontSize = (18 + Math.random() * 18) + "px";

            contenedorPetalos.appendChild(petalo);

            setTimeout(() => {

                petalo.remove();

            }, 8000);

        }

        setInterval(crearPetalo, 400);

    }

});
// ==============================
// CARRUSEL FINAL
// ==============================


const fotos = [

"assets/fotos/foto4.jpg",
"assets/fotos/foto5.jpg",
"assets/fotos/foto6.jpg"

];


const textos = [

"Nuestro primer recuerdo 💜",

"Momentos que nunca olvidaremos ✨",

"Siempre juntas aunque exista distancia 🌸"

];


let posicion = 0;


const imagen = document.getElementById("foto");
const descripcion = document.getElementById("descripcion");


const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");


if(imagen && siguiente && anterior){


siguiente.addEventListener("click",()=>{


posicion++;


if(posicion >= fotos.length){

posicion=0;

}


imagen.src=fotos[posicion];

descripcion.innerHTML=textos[posicion];


});




anterior.addEventListener("click",()=>{


posicion--;


if(posicion < 0){

posicion=fotos.length-1;

}


imagen.src=fotos[posicion];

descripcion.innerHTML=textos[posicion];


});


}




// ==============================
// MUSICA FINAL
// ==============================


const botonFinal=document.getElementById("playFinal");

const musicaFinal=document.getElementById("musicaFinal");


if(botonFinal && musicaFinal){


botonFinal.addEventListener("click",()=>{


if(musicaFinal.paused){

musicaFinal.play();

botonFinal.innerHTML="⏸";


}else{


musicaFinal.pause();

botonFinal.innerHTML="▶";


}


});


}
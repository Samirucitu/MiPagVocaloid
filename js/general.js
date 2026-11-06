function menudesplegable() {
    const aparecemenudesplegable = document.querySelector("#barranav");
    aparecemenudesplegable.classList.toggle("barranav");
} 

const indice = document.querySelector(".indice");
const tituloIndice = document.querySelector(".tituloIndice");
const ulindice = document.querySelector(".ulindice");
tituloIndice.addEventListener('click', () => {
    indice.classList.toggle('indiceAbierto');
    ulindice.classList.toggle('visible');
})

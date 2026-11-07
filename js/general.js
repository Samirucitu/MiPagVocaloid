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

const banner = document.querySelector(".banner");
const modalBanner = document.querySelector(".modalBannerCompleto");
const cierraBanner = document.querySelector(".cierraBannerCompleto") ;
banner.addEventListener('click', () => {
    modalBanner.classList.add("bannerCompletoAbierto");
})
cierraBanner.addEventListener('click', (e) => {
    e.preventDefault();
    modalBanner.classList.remove("bannerCompletoAbierto");
})

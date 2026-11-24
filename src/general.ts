import'./tailwindcss.css';

//menu desplegable
const menuDesplegable = document.querySelector("#menuDesplegable") as Element;
const aparecemenudesplegable = document.querySelector("#barranav") as Element;
menuDesplegable?.addEventListener("click", () => {
    aparecemenudesplegable.classList.toggle("barranav");
})

//pagina actual
const pagActual = window.location.pathname.split("/").pop() as string;

//indice
const indice = document.querySelector(".indice");
if (indice) {
    const tituloIndice = indice.querySelector(".tituloIndice") as Element;
    const ulindice = indice.querySelector(".ulindice") as Element;
    tituloIndice.addEventListener('click', () => {
        indice.classList.toggle('indiceAbierto');
        ulindice.classList.toggle('visible');
    });
}

//banner
const bannerGeneral = document.querySelector(".bannerGeneral");
if (bannerGeneral) {
    const banner = bannerGeneral.querySelector(".banner") as Element;
    const modalBanner = bannerGeneral.querySelector(".modalBannerCompleto") as Element;
    const cierraBanner = bannerGeneral.querySelector(".cierraBannerCompleto") as Element;
    banner.addEventListener('click', () => {
        modalBanner.classList.add("bannerCompletoAbierto");
    });
    cierraBanner.addEventListener('click', (e) => {
        e.preventDefault();
        modalBanner.classList.remove("bannerCompletoAbierto");
    });
}

//flechasNavArtist en canciones de artistas
import artistas from './artistas.json'
const arrowAnterior: Element = document.querySelector(".anterior") as Element;
const arrowSiguiente: Element = document.querySelector(".siguiente") as Element;
arrowAnterior?.addEventListener("click", () => {
    cambioArrow(-1)
})
arrowSiguiente?.addEventListener("click", () => {
    cambioArrow(1)
})
function cambioArrow(direccion:number) {
    for (const artista of artistas) {
        const canciones = artista.canciones as string[];
        const cancionActual = canciones.indexOf(pagActual) as number;
        if (cancionActual !== -1) {
            const cambiaCancion: number = (cancionActual + direccion + canciones.length) % canciones.length;
            location.href = canciones[cambiaCancion] as string;
            break
        }
    }
}
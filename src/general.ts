import './tailwindcss.css';

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
function cambioArrow(direccion: number) {
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

//carrusel de index
const arrowLIndex: HTMLDivElement = document.querySelector(".arrowIndexL") as HTMLDivElement;
const arrowRIndex: Element = document.querySelector(".arrowIndexR") as HTMLDivElement;
const tarjetasDelCarrusel: HTMLDivElement = document.querySelector(".tarjetasDelCarrusel") as HTMLDivElement;
const tarjeta: HTMLElement = document.querySelector(".tarjeta") as HTMLElement;
const dots: NodeListOf<HTMLDivElement> = document.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;
arrowLIndex?.addEventListener("click", () => {
    giraCarrusel(-1);
})
arrowRIndex?.addEventListener("click", () => {
    giraCarrusel(1);
})

function giraCarrusel(direccion: number) {
    const maxWCarrusel = tarjetasDelCarrusel.scrollWidth - tarjeta.scrollWidth;
    const anchoTarjeta: number = tarjeta.clientWidth;
    let cambioDeTarjeta = tarjetasDelCarrusel.scrollLeft + direccion * anchoTarjeta;

    if (cambioDeTarjeta > maxWCarrusel + 5) cambioDeTarjeta = 0;
    if (cambioDeTarjeta < -5) cambioDeTarjeta = maxWCarrusel;
    
    tarjetasDelCarrusel.scrollTo({ left: cambioDeTarjeta, behavior: "smooth" });
}

function actualizarDots() {
    const anchoTarjeta: number = tarjeta.clientWidth;
    const dotActivo = Math.round(tarjetasDelCarrusel.scrollLeft / anchoTarjeta);

    dots.forEach((dot, i) => {
        dot.classList.toggle("activa", i === dotActivo);
    });
}

tarjetasDelCarrusel?.addEventListener("scroll", actualizarDots, { passive: true });
actualizarDots();
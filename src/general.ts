//menu desplegable
function menudesplegable() {
    const aparecemenudesplegable = <Element>document.querySelector("#barranav");
    aparecemenudesplegable.classList.toggle("barranav");
}

//pagina actual
const pagActual = <string>window.location.pathname.split("/").pop();

//indice
const indice = document.querySelector(".indice");
if (indice) {
    const tituloIndice = <Element>indice.querySelector(".tituloIndice");
    const ulindice = <Element>indice.querySelector(".ulindice");
    tituloIndice.addEventListener('click', () => {
        indice.classList.toggle('indiceAbierto');
        ulindice.classList.toggle('visible');
    });
}

//banner
const bannerGeneral = document.querySelector(".bannerGeneral");
if (bannerGeneral) {
    const banner = <Element>bannerGeneral.querySelector(".banner");
    const modalBanner = <Element>bannerGeneral.querySelector(".modalBannerCompleto");
    const cierraBanner = <Element>bannerGeneral.querySelector(".cierraBannerCompleto");
    banner.addEventListener('click', () => {
        modalBanner.classList.add("bannerCompletoAbierto");
    });
    cierraBanner.addEventListener('click', (e) => {
        e.preventDefault();
        modalBanner.classList.remove("bannerCompletoAbierto");
    });
}

//flechasNavArtist en canciones de artistas
const flechasNavArtist = document.querySelector(".flechasNavArtist");
if (flechasNavArtist) {
    var artistas: Record<string, string[]> = {
        Maretu: ["MindBrand.html", "Aishiteitanoni.html", "SIU.html"],
        Deco27: ["GhostRule.html", "TheVampire.html", "Monitoring.html"],
        Hachi: ["Matryoshka.html", "WardRoom305.html", "MrsPumpkinsComicaldream.html"],
        Kikuo: ["shikabanenoodori.html", "aishiteaishiteaishite.html","pokkankaraa.html"],
        Azari: ["DNA.html", "SellAFriend.html", "ShadowShadow.html"],
        Eve: ["Insomnia.html", "GhostAvenue.html", "TokyoGhetto.html"],
        PinocchioP: ["God-ish.html", "LoveAttribute.html", "ReincarnationApple.html"],
        Inabakumori: ["LagTrain.html", "LostUmbrella.html", "RelayOuter.html"],
        ABM: ["Yararara.html", "Signaling.html", "Mis-TakeRPG.html"],
        NAKISO: ["RetryNow.html", "BAKENOHANA.html", "MINAGOROSHI.html"],
        Kanaria: ["BRAIN.html", "CartoonGirl.html", "Yoidoreshirazu.html"],
        Kairikibear: ["Venom.html", "Bug.html", "DARLINGDANCE.html"],
        'Jon-Yakitori': ["KontonBoogie.html", "AntiSystems.html", "YamadaPerfect.html"]
    };
}
function cambioArrow(direccion:number) {
    for (const artista in artistas) {
        const canciones = <string[]>artistas[artista];
        const cancionActual = <number>canciones.indexOf(pagActual);
        if (cancionActual !== -1) {
            const cambiaCancion: number = (cancionActual + direccion + canciones.length) % canciones.length;
            location.href = <string>canciones[cambiaCancion];
            break
        }
    }
}
const inpNombreAnimeJp = document.getElementById('nombre-anime-jp');
const inpNombreAnimeEn = document.getElementById('nombre-anime-en');
const inpNombreAnimeEs = document.getElementById('nombre-anime-es');
const inpDescripAnime = document.getElementById('descrip-anime');
const inpGeneroPrin = document.getElementById('genero-prin');
const inpSubgeneros = document.getElementById('subgeneros');
const btEnviar = document.getElementById('enviar');

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombreAnimeJp = inpNombreAnimeJp.value;
    let nombreAnimeEn = inpNombreAnimeEn.value;
    let nombreAnimeEs = inpNombreAnimeEs.value;
    let descripAnime = inpDescripAnime.value;
    let generoPrin = inpGeneroPrin.value;
    let subgeneros = inpSubgeneros.value;


});


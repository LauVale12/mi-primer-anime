const inpNombreAnimeJp = document.getElementById('nombre_Jp');
const inpNombreAnimeEn = document.getElementById('nombre_In');
const inpNombreAnimeEs = document.getElementById('nombre_Es');
const inpDescripAnime = document.getElementById('descripcion');
const inpGeneroPrin = document.getElementById('genero');
const inpSubgeneros = document.getElementById('subgenero');
const btEnviar = document.getElementById('enviar');

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre_Jp = inpNombreAnimeJp.value;
    let nombre_In = inpNombreAnimeEn.value;
    let nombre_Es = inpNombreAnimeEs.value;
    let descripcion = inpDescripAnime.value;
    let genero = inpGeneroPrin.value;
    let subgenero = inpSubgeneros.value;


});


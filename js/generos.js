const genGore = document.getElementById('gore');
const descGore = document.getElementById('desc-gore');
const genHentai = document.getElementById('hentai');
const descHentai = document.getElementById('desc-hentai');
const genEcchi = document.getElementById('ecchi');
const descEchi = document.getElementById('desc-ecchi');
const genDesc = document.getElementById('gen-desc');


genGore.addEventListener('click', () => {
    if (genEcchi.classList.contains("pressed")) {
        showHideDescription(genDesc, genEcchi);
    }
    if (genHentai.classList.contains("pressed")) {
        showHideDescription(genDesc, genHentai);
    }
    showHideDescription(genDesc, genGore);
    genDesc.innerHTML = `<p>
        El gore es un género que se caracteriza por ser muy sangriento y violento, si una serie
        tiene este genero muy probablemente tenga escenas sangrientas explicitas
        y puede llegar a ser impactante para el espectador
    </p>`;
});

genEcchi.addEventListener('click', () => {
    if (genGore.classList.contains("pressed")) {
        showHideDescription(genDesc, genGore);
    }
    if (genHentai.classList.contains("pressed")) {
        showHideDescription(genDesc, genHentai);
    }
    showHideDescription(genDesc, genEcchi);
    genDesc.innerHTML = `<p>El ecchi es un género que se caracteriza por mostrar desnudos, pero no llegar a cosas más subidas de
        tono
    </p>`;
});

genHentai.addEventListener('click', () => {
    if (genGore.classList.contains("pressed")) {
        showHideDescription(genDesc, genGore);
    }
    if (genEcchi.classList.contains("pressed")) {
        showHideDescription(genDesc, genEcchi);
    }
    showHideDescription(genDesc, genHentai);
    genDesc.innerHTML = `<p>El hentai es un género que se caracteriza por mostrar escenas sexuales explicitas</p>`;
});

function showHideDescription(descripcion, genre) {
    if (descripcion.classList.contains("occult")) {
        descripcion.classList.remove("occult");
        genre.classList.add("pressed");
    } else {
        descripcion.classList.add("occult");
        genre.classList.remove("pressed");
    }
}

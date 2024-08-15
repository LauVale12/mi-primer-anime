const genGore = document.getElementById('gore');
const descGore = document.getElementById('desc-gore');
const genHentai = document.getElementById('hentai');
const descHentai = document.getElementById('desc-hentai');
const genEcchi = document.getElementById('ecchi');
const descEchi = document.getElementById('desc-ecchi');


genGore.addEventListener('click', () => {
    if (genEcchi.classList.contains("pressed")) {
        showHideDescription(descEchi, genEcchi);
    }
    if (genHentai.classList.contains("pressed")) {
        showHideDescription(descHentai, genHentai);
    }
    showHideDescription(descGore, genGore);
});

genEcchi.addEventListener('click', () => {
    if (genGore.classList.contains("pressed")) {
        showHideDescription(descGore, genGore);
    }
    if (genHentai.classList.contains("pressed")) {
        showHideDescription(descHentai, genHentai);
    }
    showHideDescription(descEchi, genEcchi);
});

genHentai.addEventListener('click', () => {
    if (genGore.classList.contains("pressed")) {
        showHideDescription(descGore, genGore);
    }
    if (genEcchi.classList.contains("pressed")) {
        showHideDescription(descEchi, genEcchi);
    }
    showHideDescription(descHentai, genHentai);
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

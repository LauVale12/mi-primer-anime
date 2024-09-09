const btMenu = document.getElementById('btMenu');
const barraNav = document.getElementById('nav');

btMenu.addEventListener('click', () => {
    showHide();
});

function showHide() {
    if (barraNav.classList.contains('hide-menu')) {
        barraNav.classList.remove('hide-menu');
        barraNav.classList.add('show-menu');
    } else {
        barraNav.classList.remove('show-menu');
        barraNav.classList.add('hide-menu');
    }
}
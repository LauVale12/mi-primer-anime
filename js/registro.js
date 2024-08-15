const inpCorreo = document.getElementById('correo');
const inpContraseña = document.getElementById('contraseña');
const inpConfContraseña = document.getElementById('conf-contraseña');
const btEnviar = document.getElementById('login');

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let correo = inpCorreo.value;
    let contraseña = inpContraseña.value;
    let confContraseña = inpConfContraseña.value;

});
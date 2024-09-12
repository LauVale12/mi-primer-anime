const inpCorreo = document.getElementById('correo');
const inpContraseña = document.getElementById('contraseña');
const inpConfContraseña = document.getElementById('confContraseña');
const btEnviar = document.getElementById('registro');

const formulario = document.getElementById('registroR');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let correo = inpCorreo.value;
    let contraseña = inpContraseña.value;
    let confContraseña = inpConfContraseña.value;

});
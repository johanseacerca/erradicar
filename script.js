// Función para eliminar el popup y las imágenes del virus
function removePopup() {
    // Ocultar el popup
    document.getElementById('popup').style.display = 'none';

    // Eliminar las imágenes del virus
    document.getElementById('virus-images').style.display = 'none';

    // Mostrar la página del director
    document.getElementById('director-page').classList.remove('hidden');

    // Restablecer el scroll en el body
    document.body.style.overflow = 'auto'; // Habilitar el scroll
}

// Esperar a que se cargue el documento antes de activar el botón
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('erradicarBtn').addEventListener('click', removePopup);
});

// Función para cambiar la acción de Steve
function cambiarAccion(accion) {
    // Cambiar la imagen principal
    const character = document.getElementById('character');
    character.src = `../imagenes/${accion}.gif`;
    
    // Cambiar el fondo según la acción
    const body = document.body;
    body.style.background = `url('../imagenes/${accion}.jpg') no-repeat center center fixed`;
    body.style.backgroundSize = 'cover';
    
    // Agregar efecto de animación
    character.style.transform = 'scale(1.1)';
    setTimeout(() => {
        character.style.transform = 'scale(1)';
    }, 300);
}

// Inicializar la página con el estado principal
document.addEventListener('DOMContentLoaded', function() {
    // Ya está configurado en el HTML, pero por si acaso lo reafirmamos
    const body = document.body;
    body.style.background = "url('../imagenes/principal.jpg') no-repeat center center fixed";
    body.style.backgroundSize = 'cover';
    
    const character = document.getElementById('character');
    character.src = '../imagenes/principal.gif';
});
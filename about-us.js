// Selecciona el botón del menú y el menú en sí
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// Añade un evento de clic al botón del menú
menuBtn.addEventListener('click', () => {
    // Alternar la clase 'active' en el menú
    navMenu.classList.toggle('active');
});
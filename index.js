
 const menuBtn = document.getElementById('menu-btn');
 const navMenu = document.getElementById('nav-menu');

 menuBtn.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });
alert("привет на мой самый крутой сайт!");

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const menuLinks = document.querySelectorAll('#menu a');

    // Открыть/закрыть меню
    burgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('open');
        overlay.classList.toggle('active');
        
        // Меняем иконку
        if (menu.classList.contains('open')) {
            burgerBtn.textContent = '✕';
            burgerBtn.style.background = 'orange';
        } else {
            burgerBtn.textContent = '☰';
            burgerBtn.style.background = 'white';
        }
    });
    
    // Закрыть меню по клику на оверлей
    overlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Закрыть меню по клику на ссылку в меню
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Закрыть меню при нажатии Esc
    document.addEventListener('keyup', function(e) {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
    
    // Функция закрытия меню
    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        burgerBtn.textContent = '☰';
        burgerBtn.style.background = 'white';
    }
});
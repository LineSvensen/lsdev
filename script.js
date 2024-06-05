document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', () => {
        dropdownMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });
});
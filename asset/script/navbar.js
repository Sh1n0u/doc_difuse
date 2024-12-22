const toggleBtn = document.getElementById('toggle-button');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList('active');
})
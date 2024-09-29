const toggleCheckbox = document.getElementById('toggle');
const nav = document.querySelector('.header__nav');

toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});
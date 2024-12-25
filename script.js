const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  body.classList.add('dark-theme');
    themeToggle.textContent = "День";
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
         themeToggle.textContent = "День";
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = "Ночь";
    }

});

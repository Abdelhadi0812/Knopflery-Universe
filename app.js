const darkModeBtn = document.querySelector('#dark-mode-toggle');
let htmlElement = document.documentElement;

// ----------------- Making darkmode buttons and sidebar functional

function updateDarkModeState(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      darkModeBtn.checked = true;
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      darkModeBtn.checked = false;
    }
}

function toggleDarkMode() {
    const isDarkModeEnabled = darkModeBtn.checked;
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    updateDarkModeState(isDarkModeEnabled);
}

const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
updateDarkModeState(isDarkModeEnabled);

darkModeBtn.addEventListener('click', toggleDarkMode);

// Scroll to top hide/show
const scrollToTopBtn = document.querySelector('.shadow.btn-primary.rounded-circle.back-to-top');

document.addEventListener('DOMContentLoaded',function(){
    window.onscroll = function(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            scrollToTopBtn.classList.add('visible'); 
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        scrollToTopBtn.addEventListener('click',function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
});
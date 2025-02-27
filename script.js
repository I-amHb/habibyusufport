
const xMenu = document.querySelector('.X-menu');
const vertMenu = document.querySelector('.vertical-menu');
const menuCont = document.querySelector('.menu-container');

// Ensure the menu is closed when the page loads
document.addEventListener('DOMContentLoaded', () => {
    vertMenu.style.display = 'none';
});

// Opens vertical navbar when menuCont is clicked
const openNav = () => {
    vertMenu.style.display = 'flex';
};

// Closes vertical navbar when xMenu is clicked
const closeNav = () => {
    vertMenu.style.display = 'none';
};

// Automatically close menu when screen is resized
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // Adjust breakpoint if necessary
        vertMenu.style.display = 'none';
    }
});

// Event listeners
menuCont.addEventListener('click', openNav);
xMenu.addEventListener('click', closeNav);
/*
const navToggle = () => {
    menuCont = isMenuCont;
    isMenuCont = false;
    if (!isMenuCont == true) {
        xMenu.style.display = 'flex';
    } else {
        xMenu.style.display = 'none';
    }
}
*/



const skills = [
    {
        name: 'HTML',
        file: ''
    },
    {
        name: 'CSS',
        file: ''
    },
    {
        name: 'JavaScript',
        file: ''
    },
    {
        name: 'React',
        file: ''
    },
    {
        name: 'Tailwind',
        file: ''
    },
    {
        name: 'Node.js',
        file: ''
    },
    {
        name: 'Express.js',
        file: ''
    },
    {
        name: 'Python',
        file: ''
    },
    {
        name: '',
        file: ''
    },
];
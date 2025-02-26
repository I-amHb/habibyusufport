
// Navbar toggle

const xMenu = document.querySelector('.X-menu');
const vertMenu = document.querySelector('.vertical-menu');
const menuCont = document.querySelector('.menu-container');

// Opens vertical nav bar when menuCont is clicked
const openNav = () => {
    vertMenu.style.display = 'flex';
}
// Closes vertical navbar when xMenu is clicked
const closeNav = () => {
    vertMenu.style.display = 'none';
}
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // Adjust breakpoint if necessary
        vertMenu.style.display = 'none';
    }
});

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
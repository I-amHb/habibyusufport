// Navbar toggle for small screens
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
    if (window.innerWidth >= 768) {
        vertMenu.style.display = 'none';
    }
});

// Event listeners
menuCont.addEventListener('click', openNav);
xMenu.addEventListener('click', closeNav);

// Skills Display
const skill = document.querySelector('.skills');
const f_end = document.querySelector('.frontend');
const b_end = document.querySelector('.backend');
const ops_ = document.querySelector('.ops');

const frontEnd = [
    { name: 'HTML', filepath: './images/icons/HTML-icon.png' },
    { name: 'CSS', filepath: './images/icons/CSS-icon.png' },
    { name: 'JavaScript', filepath: './images/icons/JS-icon.png' },
    { name: 'React', filepath: './images/icons/react-icon.png' },
    { name: 'Tailwind', filepath: './images/icons/tailwind-icon(1).png' }
];


frontEnd.map((val) => {
    let icon = document.createElement('img')
    icon.setAttribute('src', val.filepath);
    icon.setAttribute('class', 'icon');
    let p = document.createElement('p');
    p.textContent = val.name;
    f_end.appendChild(icon);
    f_end.appendChild(p);
    console.log(p);
})

const backEnd = [
    {name: 'Node.js', filepath: './images/icons/'},
    {name: 'Express.js', filepath: './images/icons/'},
    {name: 'Python', filepath: './images/icons/'},
];


const ops = [
    {name: 'Git', filepath: './images/icons/'},
    {name: 'Vercel', filepath: './images/icons/'}
];



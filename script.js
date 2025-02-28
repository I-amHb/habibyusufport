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
const stackHouse = document.querySelector('.stackHouse');
const b_end = document.querySelector('.backend');
const stackHouse1 = document.querySelector('.stackHouse1');
const ops_ = document.querySelector('.ops');
const stackHouse2 = document.querySelector('.stackHouse2');


const frontEnd = [
    { name: 'HTML', filepath: './images/icons/HTML-icon.png' },
    { name: 'CSS', filepath: './images/icons/CSS-icon.png' },
    { name: 'JavaScript', filepath: './images/icons/JS-icon.png' },
    { name: 'React', filepath: './images/icons/react-icon.png' },
    { name: 'Tailwind', filepath: './images/icons/tailwind-icon(1).png' }
];


frontEnd.map((val) => {

    let skillHouse = document.createElement('div');
    skillHouse.setAttribute('class', 'divCont')

    let icon = document.createElement('img')
    icon.setAttribute('src', val.filepath);
    icon.setAttribute('class', 'icon');

    let title = document.createElement('p');
    title.textContent = val.name;
// Nests both p and icon inside  skillHouse
    skillHouse.appendChild(icon);
    skillHouse.appendChild(title);

    stackHouse.appendChild(skillHouse);
    console.log(skillHouse);
})

const backEnd = [
    {name: 'Node.js', filepath: './images/icons/node-js-icon.png'},
    {name: 'Express.js', filepath: './images/icons/express-icon480.png'},
    // {name: 'Python', filepath: './images/icons/python-icon.png'},
];


backEnd.map((val) => {

    let skillHouse = document.createElement('div');
    skillHouse.setAttribute('class', 'divCont')

    let icon = document.createElement('img')
    icon.setAttribute('src', val.filepath);
    icon.setAttribute('class', 'icon');

    let title = document.createElement('p');
    title.textContent = val.name;
// Nests both p and icon inside  skillHouse
    skillHouse.appendChild(icon);
    skillHouse.appendChild(title);

    stackHouse1.appendChild(skillHouse);
    console.log(skillHouse);
})


const ops = [
    {name: 'Git', filepath: './images/icons/git-icon.png'},
    {name: 'Vercel', filepath: './images/icons/vercel-icon.png'}
];



ops.map((val) => {

    let skillHouse = document.createElement('div');
    skillHouse.setAttribute('class', 'divCont')

    let icon = document.createElement('img')
    icon.setAttribute('src', val.filepath);
    icon.setAttribute('class', 'icon');

    let title = document.createElement('p');
    title.textContent = val.name;
// Nests both p and icon inside  skillHouse
    skillHouse.appendChild(icon);
    skillHouse.appendChild(title);

    stackHouse2.appendChild(skillHouse);
    console.log(skillHouse);
})

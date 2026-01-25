
const showSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
};

const hideSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}
const sideBarLinks = document.querySelectorAll('.sidebar-links');

sideBarLinks.forEach(links => {
    links.addEventListener('click', () => {
        const sideBar = document.querySelector('.sidebar');
        sideBar.style.display = 'none';
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const sideBar = document.querySelector('.sidebar');
        sideBar.style.display = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});





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
    { name: 'Tailwind', filepath: './images/icons/tailwind-icon(1).png' },
    { name: 'Sass', filepath: './images/icons/Sass.png' }
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
    // console.log(skillHouse);
})

const backEnd = [
    { name: 'Node.js', filepath: './images/icons/node-js-icon.png' },
    { name: 'Express.js', filepath: './images/icons/express-js.png' },
    { name: 'Python', filepath: './images/icons/python-icon.png' },
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
    // console.log(skillHouse);
})


const ops = [
    { name: 'Git', filepath: './images/icons/git-icon.png' },
    { name: 'Vercel', filepath: './images/icons/vercel-icon.png' }
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
    // console.log(skillHouse);
})


const projects = [
    {
        Title: 'Weather App',
        Path: '/images/skymate-bg.jpeg',
        Description: 'A clean and responsive weather application that allows users to search for cities and view real-time weather conditions. Built with React.js and Tailwind CSS, SkyMate integrates the OpenWeather API to deliver accurate forecasts, temperature data, and a smooth, user-friendly experience.',
        stacks: ['React', 'Tailwind', 'OpenWeather API']
    },
    {
        Title: 'Ct-Converter',
        Path: '/images/ct-screenshot.png',
        Description: 'A modern, responsive web application that lets users convert between global currencies in real-time and perform temperature conversions instantly. Built with React.js and Tailwind CSS, the app delivers a clean user experience, API-driven data, and fast interactions.',
        stacks: ['React', 'Tailwind', 'ExchangeRate-API', 'REST Countries API']
    },
    {
        Title: 'Portfolio Site',
        Path: '/images/portfolio.png',
        Description: 'A personal portfolio website designed to showcase projects, skills, and experience as a frontend developer. Built with HTML, CSS, and JavaScript, the site features a clean layout, responsive design, smooth interactions, and a strong focus on usability and performance.',
        stacks: ['HTML', 'CSS', 'JavaScript']
    },
    {
        Title: 'TaskMaster (Backend)',
        Path: '/images/TaskMaster-server.png',
        Description: 'A scalable and secure task management backend system that supports user authentication and full CRUD operations for managing tasks. Built with Node.js and Express.js, TaskMaster uses RESTful APIs, JWT-based authentication, and database integration to handle tasks with priorities, deadlines, and user-specific data.',
        stacks: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt']
    }
]

const projectContainer = document.querySelector('.projects-container');

projects.forEach((project) => {

    const cards = document.createElement('div');
    cards.className = 'project-card';

    cards.innerHTML = `
    <div class='card pj'>
        <div class="projImg-container">
            <div class='imgDiv'><img src="${project.Path}" alt="${project.Title} image"></div>
        </div>
        <div class='projDetails'>
            <h2 class="proj-title">${project.Title}</h2>
            <p class="proj-descr">${project.Description}</p>
            <ul class='stackUl'>${project.stacks
                .map(stack => `<li>${stack}</li>`)
                .join('')}
            </ul>
        </div>
    </div>
        
    `
    projectContainer.appendChild(cards);


})

// Intersection Observer Section for scroll animation

const heroObserver = document.querySelectorAll('.hr');
const projObserver = document.querySelectorAll('.pj');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    }))
    // console.log(entries);
}, {
    threshold: 1,
});
heroObserver.forEach(val => observer.observe(val));
projObserver.forEach(val => observer.observe(val));

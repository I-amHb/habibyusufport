
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
    anchor.addEventListener("click", function(e) {
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
    {name: 'Express.js', filepath: './images/icons/express-js.png'},
    {name: 'Python', filepath: './images/icons/python-icon.png'},
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

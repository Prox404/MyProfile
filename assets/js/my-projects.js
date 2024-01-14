const projects = [
    {
        title: 'Baby Vaccination Tracker',
        description: 'Baby Vaccination Tracker is an Android application for tracking baby vaccination.',
        image: 'assets/img/BabyVaccinationTracker.jpg',
        technologies: ['Java', 'Android', 'Zxing', 'Langchain', 'Nodejs', 'Firebase', 'Retrofit', 'Gson', 'Material Design'],
        link: [
            'https://github.com/Prox404/Capstone1_Group15_BVT/tree/UserApp',
        ]
    },
    {
        title: 'Short Link',
        description: 'Short Link is a URL shortening web application.',
        image: 'assets/img/Shortlink.jpg',
        technologies: ['ReactJs', 'Babel', 'SASS', 'NodeJs', 'ExpressJs'],
        link: [
            'https://github.com/Prox404/ShortLink',
            'https://github.com/Prox404/ShortLink_FrontEnd'
        ]
    },
    {
        title: 'School Management System',
        description: 'School Management System is a web application for managing school activities.',
        image: 'assets/img/SchoolManagement.jpg',
        technologies: ['Bootstrap 5', 'Jquery', 'PHP', 'MySQL', 'Ajax', 'Blade', 'Laravel', 'Faker', 'ChartJs'],
        link: [
            'https://github.com/Prox404/doAn2J2schoolTeam21'
        ]
    }
]

function showProjectModal(index) {
    console.log(index);
    let modalTitle = document.getElementById('modalTitle');
    let modalImage = document.getElementById('modalImage');
    let modalAbout = document.getElementById('modalAbout');
    let modalTechnologies = document.getElementById('modalTechnologies');
    let modalURLs = document.getElementById('modalURLs');

    modalTitle.innerHTML = projects[index].title;
    modalImage.src = projects[index].image;
    modalAbout.innerHTML = projects[index].description;
    modalTechnologies.innerHTML = '';
    projects[index].technologies.forEach(technology => {
        modalTechnologies.innerHTML += `<p>${technology}</p>`;
    });
    modalURLs.innerHTML = '';
    projects[index].link.forEach(link => {
        modalURLs.innerHTML += `<a href="${link}" target="_blank">${link}</a>`;
    });

    let modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

function hideModal() {
    let modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

window.addEventListener("load", loading)
function loading() {
    let loading = document.getElementById('loading');
    loading.classList.add('hidden');
}
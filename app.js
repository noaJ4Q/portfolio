const data = {
    english: {
        userTitle: 'Hi, I\'m Noe Jara',
        userSubtitle: 'Full-Stack Developer',
        userDescription: 'A telecommunication engineering student at PUCP with interest ant experience in web development.',
        sections: [
            'Projects',
            'Skills',
            'Contact'
        ],
        projects: [
            {
                title: 'Registration and administration of clinic locations',
                description: 'Clinic system for appointment scheduling and management of patients, doctors and administrative staff',
            },
            {
                title: 'Registration and monitoring of incidents on the PUCP campus',
                description: 'Reporting and solution system for incidents that occur on the PUCP campus.'
            },
            {
                title: 'Analize and generate images with Azure AI',
                description: 'Analyze images using its URL or generate new ones based on text.'
            }
        ],
        buttons: {
            code: 'Code',
            live: 'Live',
            send: 'Send'
        },
        contact: {
            message: 'Email message'
        }
    },
    spanish: {
        userTitle: 'Hola, soy Noe Jara',
        userSubtitle: 'Desarrollador Full Stack',
        userDescription: 'Estudiante de Ingeniería de las Telecomunicaciones en la PUCP con interés y experiencia en el desarrollo web.',
        sections: [
            'Proyectos',
            'Habilidades',
            'Contacto'
        ],
        projects: [
            {
                title: 'Registro y administración de las sedes de una clínica',
                description: 'Sistema clínico para la programación de citas y gestión de pacientes, médicos y personal administrativo.',
            },
            {
                title: 'Registro y monitoreo de incidentes en el campus PUCP',
                description: 'Sistema de reporte y solución de incidentes ocurridos en el campus PUCP.'
            },
            {
                title: 'Analize and generate images with Azure AI',
                description: 'Analiza imágenes usando su URL o genera nuevas basadas en texto.'
            }
        ],
        buttons: {
            code: 'Código',
            live: 'Demo',
            send: 'Enviar'
        },
        contact: {
            message: 'Correo electrónico'
        }
    }
}

// switch language constants
const userTitle = document.getElementById('user-title');
const userSubtitle = document.getElementById('user-subtitle');
const userDescription = document.getElementById('user-description');
const sections = document.querySelectorAll('section > h2');
const projects = document.querySelectorAll('.project-textbox');
const buttons = document.querySelectorAll('.btn');
const contactMsg = document.querySelector('label[for=message]');

// functionalities
const title = document.getElementById('title');
const angle = document.getElementById('angle');
const langBtn = document.getElementById('lang-btn');
const sendBtn = document.getElementById('send-btn');

// emailjs constants
const EMAILJS_PUBLIC_KEY = '-6yTx2-ebqM2Fca8_';
const EMAILJS_SERVICE_ID = 'service_45f0qsv';
const EMAILJS_TEMPLATE_ID = 'template_w4w12zk';

// initialize emailjs
(function(){
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

title.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

angle.onclick = () => {
    const windowHeight = window.innerHeight;
    const navHeight = document.getElementById('nav').offsetHeight;
    window.scrollTo({top: windowHeight-navHeight, behavior: 'smooth'});
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        angle.style.display = 'none';
    } else {
        angle.style.display = 'block';
    }
}

langBtn.onclick = () => {
    let lang = langBtn.innerText;

    if (lang === 'eng'){ // switch to spanish
        langBtn.innerText = 'esp';

        // user data
        userTitle.innerText = data.spanish.userTitle;
        userSubtitle.innerText = data.spanish.userSubtitle;
        userDescription.innerText = data.spanish.userDescription;

        // sections
        sections.forEach((section, index) => {
            section.innerText = data.spanish.sections[index];
        });

        // projects
        projects.forEach((project, index) => {
            project.querySelector('h3').innerText = data.spanish.projects[index].title // change title
            project.querySelector('p').innerText = data.spanish.projects[index].description // change description
        });

        // buttons
        buttons.forEach((button) => {
            const text = button.getAttribute('data-type');
            const translatedText = data.spanish.buttons[text]
            
            let textNode = button.firstChild;
            textNode.nodeValue = translatedText;
        });

        // contact
        contactMsg.innerText = data.spanish.contact.message;

    }
    else{ // switch to english
        langBtn.innerText = 'eng';
        
        // user data
        userTitle.innerText = data.english.userTitle;
        userSubtitle.innerText = data.english.userSubtitle;
        userDescription.innerText = data.english.userDescription;

        // sections
        sections.forEach((section, index) => {
            section.innerText = data.english.sections[index];
        });

        // projects
        projects.forEach((project, index) => {
            project.querySelector('h3').innerText = data.english.projects[index].title // change title
            project.querySelector('p').innerText = data.english.projects[index].description // change description
        });

        // buttons
        buttons.forEach((button) => {
            const text = button.getAttribute('data-type');
            const translatedText = data.english.buttons[text]
            
            let textNode = button.firstChild;
            textNode.nodeValue = translatedText;
        });

        // contact
        contactMsg.innerText = data.english.contact.message;
    }
}

sendBtn.onclick = () => {
    const message = document.getElementById('message').value;
    const params = {
        from_name: 'Contact name',
        message: message
    }
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('message').value = '';
    }, (error) => {
        alert('Message could not be sent. Please try again later.');
        console.log('FAILED...', error);
    });
}
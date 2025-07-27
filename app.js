const data = {
  english: {
    userTitle: 'Hi, I\'m Noe Jara',
    userSubtitle: 'Full-Stack Developer',
    userDescription: 'Student passionate about software development.',
    sections: [
      'Experience',
      'Projects',
      'Skills',
      'Contact'
    ],
    experiences: [
      {
        title: 'Development Intern - Bitel Peru',
        description: 'May 2024 - Nov 2024',
        details: [
          'Developed functionalities on web platforms using Java, Apache Struts, and Hibernate, optimizing the user experience.',
          'Participated in meetings with the Sales team to identify and resolve bugs in multi-threaded Java processes.',
          'Maintained effective communication in English with an international team using Jira for task monitoring.'
        ]
      },
      {
        title: 'Professor Assistant - PUCP',
        description: 'Mar 2024 - Jul 2024',
        details: [
          'Prepared and evaluated practical labs focused on the use of RecyclerView, Sensors, Fragments, and Navigation Component for Android applications with Java.',
          'Guided students throughout the semester by providing technical support for the development of their projects.'
        ]
      },
    ],
    projects: [
      {
        title: 'Clinic WebApp',
        description: 'Clinic system for appointment scheduling and managment of clients, doctors and administrators.',
      },
      {
        title: 'Incidents Reporting WebApp',
        description: 'Reporting and solution system for incidents that occur within the PUCP campus.'
      },
      {
        title: 'Authentication WebApp',
        description: 'Web system that allows the registration and authentication of users.'
      },
      {
        title: 'Analyze and Generate Images WebApp',
        description: 'Analyze images using its URL or generate new ones based on text.'
      },
      {
        title: 'To-Do List WebApp',
        description: 'Organize your work and life through this simple to do list app.'
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
    userDescription: 'Estudiante apasionado por el desarrollo de software.',
    sections: [
      'Experiencia',
      'Proyectos',
      'Habilidades',
      'Contacto'
    ],
    experiences: [
      {
        title: 'Practicante de Desarrollo - Bitel Perú',
        description: 'May 2024 - Nov 2024',
        details: [
          'Desarrollé funcionalidades en plataformas web utilizando Java, Apache Struts y Hibernate, optimizando la experiencia del usuario.',
          'Participé en reuniones con el equipo de Ventas para identificar y resolver errores en procesos Java multihilo.',
          'Mantuve una comunicación efectiva en inglés con un equipo internacional utilizando Jira para el seguimiento de tareas.'
        ]
      },
      {
        title: 'Instructor - PUCP',
        description: 'Mar 2024 - Jul 2024',
        details: [
          'Preparé y evalué laboratorios prácticos enfocados en el uso de RecyclerView, Sensores, Fragmentos y Navigation Component para aplicaciones Android con Java.',
          'Guié a los estudiantes durante todo el semestre brindando soporte técnico para el desarrollo de sus proyectos.'
        ]
      },
    ],
    projects: [
      {
        title: 'Aplicación web clínica',
        description: 'Sistema clínico para la programación de citas y gestión de pacientes, médicos y personal administrativo.',
      },
      {
        title: 'Aplicación de reporte de incidentes',
        description: 'Sistema de reporte y solución de incidentes ocurridos en el campus PUCP.'
      },
      {
        title: 'Aplicación de autenticación',
        description: 'Sistema web que permite el registro y autenticación de usuarios.'
      },
      {
        title: 'Aplicación de análisis y generación de imágenes',
        description: 'Analiza imágenes usando su URL o genera nuevas basadas en texto.'
      },
      {
        title: 'Aplicación de lista de tareas',
        description: 'Organiza tu trabajo y vida a través de esta simple aplicación de lista de tareas.'
      }
    ],
    buttons: {
      code: 'Código',
      live: 'Demo',
      send: 'Enviar'
    },
    contact: {
      message: 'Mensaje'
    }
  }
}

// switch language constants
const userTitle = document.getElementById('user-title');
const userSubtitle = document.getElementById('user-subtitle');
const userDescription = document.getElementById('user-description');
const sections = document.querySelectorAll('section > h2');
const projects = document.querySelectorAll('.project-textbox');
const experiences = document.querySelectorAll('.experience-box');
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

// css configuration
const tooltips = document.querySelectorAll('.tooltip-text');
tooltips.forEach((tooltip) => {
  const iconWidth = tooltip.previousElementSibling.offsetWidth;
  const tooltipWidth = tooltip.offsetWidth;
  const shift = (iconWidth - tooltipWidth) / 2;
  tooltip.style.left = shift + 'px';

});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

// initialize emailjs
(function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

title.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

angle.onclick = () => {
  const windowHeight = window.innerHeight;
  const navHeight = document.getElementById('nav').offsetHeight;
  window.scrollTo({ top: windowHeight - navHeight, behavior: 'smooth' });
}

window.onscroll = () => {
  if (window.scrollY > 0) {
    angle.classList.add('hidden');
    // angle.style.display = 'none';
  } else {
    angle.classList.remove('hidden');
    // angle.style.display = 'block';
  }
}

langBtn.onclick = () => {
  let lang = langBtn.innerText;

  if (lang === 'eng') { // switch to spanish
    langBtn.innerText = 'esp';

    // user data
    userTitle.innerText = data.spanish.userTitle;
    userSubtitle.innerText = data.spanish.userSubtitle;
    userDescription.innerText = data.spanish.userDescription;

    // sections
    sections.forEach((section, index) => {
      section.innerText = data.spanish.sections[index];
    });

    // experiences
    experiences.forEach((experience, index) => {
      experience.querySelector('h3').innerText = data.spanish.experiences[index].title; // change title
      experience.querySelector('p').innerText = data.spanish.experiences[index].description; // change description

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
  else { // switch to english
    langBtn.innerText = 'eng';

    // user data
    userTitle.innerText = data.english.userTitle;
    userSubtitle.innerText = data.english.userSubtitle;
    userDescription.innerText = data.english.userDescription;

    // sections
    sections.forEach((section, index) => {
      section.innerText = data.english.sections[index];
    });

    // experiences
    experiences.forEach((experience, index) => {
      experience.querySelector('h3').innerText = data.english.experiences[index].title; // change title
      experience.querySelector('p').innerText = data.english.experiences[index].description; // change description

    })

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
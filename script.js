//navbar toggle
const icon = document.querySelector('.navbar-toggler');

icon.addEventListener('click', function() {
    // Verificamos si el menú está colapsado (por la clase de Bootstrap)
    const isCollapsed = this.classList.contains('collapsed');
    
    if (isCollapsed) {
        // Si está colapsado, cambiamos a icono X
        this.classList.replace('bx-x', 'bx-menu');
    } else {
        // Si está expandido, volvemos al icono de menú
        this.classList.replace('bx-menu', 'bx-x');
    }
});


//Active menu 
const allMenu = document.querySelectorAll('nav .navbar-nav a');
const sections = document.querySelectorAll('section:not(#contact)');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach( function(sect) {
        if (this.pageYOffset + 50 > sect.offsetTop){
            current = sect.getAttribute('id');
        }
    });
    allMenu.forEach( function(nav) {
        nav.classList.remove('active');
        if (nav.classList.contains(current)) {
            nav.classList.add('active');
        }
    });
});

//loading
const loader = $('.loader');
$(window).on('load', function() {
    loader.fadeOut();
 });




//Estilo de texto Principal Inicio

// Efecto de escritura - versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Verifica si el elemento existe
    const typedElement = document.querySelector('.typed-element');
    
    if (typedElement) {
        const options = {
            strings: ['Desarrollador Web', 'Diseñador Web'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            backDelay: 1500,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true,
            startDelay: 500
        };
        
        new Typed('.typed-element', options);
    } else {
        console.error('Elemento para Typed.js no encontrado');
    }
    
    // El resto de tu código...
});


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 




// Inicialización de particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});


/* Seccion VIdeo */
// Inicialización específica para la sección de video
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('video-particles', {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { 
          enable: true, 
          distance: 150, 
          color: "#ffffff", 
          opacity: 0.2, 
          width: 1 
        },
        move: {
          enable: true,
          speed: 1.5,  // Velocidad reducida
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "slow" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          slow: { speed: 0.3 },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  });
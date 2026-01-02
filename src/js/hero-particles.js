/**
 * Hero Particles Animation
 * Using particles.js library
 */

(function initHeroParticles() {
  const PARTICLES_CONTAINER_ID = 'particles-js';

  // Configuration adapted from user requirement
  // Optimized for performance and readability
  const config = {
    "particles": {
      "number": {
        "value": 100, // Balanced density
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": [
          "#f0fdfa", // Teal 50
          "#ccfbf1", // Teal 100
          "#99f6e4", // Teal 200
          "#5eead4", // Teal 300
          "#2dd4bf", // Teal 400
          "#14b8a6", // Teal 500
          "#0d9488", // Teal 600
          "#0f766e", // Teal 700
          "#115e59", // Teal 800
          "#134e4a", // Teal 900
          "#042f2e"  // Teal 950
        ]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.3, // Less visible
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.6, // Increased by 20%
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
        "color": "#115e59", // Teal 800
        "opacity": 0.2, // More discreet lines
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.4, // Extremely slow movement
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
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  // Safe initialization
  function loadParticles() {
    const container = document.getElementById(PARTICLES_CONTAINER_ID);
    if (container && window.particlesJS) {
      window.particlesJS(PARTICLES_CONTAINER_ID, config);
    }
  }

  // Hook into DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadParticles);
  } else {
    loadParticles();
  }

})();

$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
    
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
    
        });
      });
    
    });
    //HEROS
    ScrollReveal().reveal('#heroBackGround',{
      origin:'top',
      duration:2000,
      distance: '20%'
    })
    ScrollReveal().reveal('#HeroNav',{
      origin:'top',
      duration:2500,
      distance: '20%'
    })
    ScrollReveal().reveal('#heroPaiRelatos',{
      origin:'top',
      duration:2000,
      distance: '20%'
    })
    ScrollReveal().reveal('#heroFilhoRelatos',{
      origin:'top',
      duration:2500,
      distance: '20%'
    })
    //
    ScrollReveal().reveal('#idApresentacao',{
      origin:'left',
      duration:2000,
      distance: '20%'
    })
    ScrollReveal().reveal('#fotoPerfil',{
      origin:'right',
      duration:3000,
      distance: '10%'
    })
    //SOBRE MIM
    ScrollReveal().reveal('#cardEsquerdaSobre',{
      origin:'left',
      duration:3500,
      distance: '10%'
    })
    ScrollReveal().reveal('#cardMeioSobre',{
      duration:4500,
    })
    ScrollReveal().reveal('#cardDireitaSobre',{
      origin:'right',
      duration:3500,
      distance: '10%'
    })
      //RELATOS
      ScrollReveal().reveal('#relato1',{
        origin:'left',
        duration:2500,
        distance: '10%'
      })
      ScrollReveal().reveal('#relato2',{
        duration:3500,
      })
      ScrollReveal().reveal('#relato3',{
        origin:'right',
        duration:2500,
        distance: '10%'
      })
      //
  });

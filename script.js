function ready() {  
          var menu = document.querySelector('#mobile-menu');
          var meunLinks = document.querySelector('.navbar__menu');

          const mobileMenu = () => {
            menu.classList.toggle('is-active');
            meunLinks.classList.toggle('active');
          };

          menu.addEventListener('click', mobileMenu);

          const hideMobileMenu = () => {
            const menuBars = document.querySelector('.is-active');
            if(window.innerWidth < 426 && menuBars) {
              menu.classList.toggle('is-active');
              meunLinks.classList.remove('active');
            }
          }

          meunLinks.addEventListener('click', hideMobileMenu);
        };
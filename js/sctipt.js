let body = document.querySelector('body');
body.style.setProperty('--color', '#9503b3');
let navLinksAll = document.querySelectorAll('.nav__links a');
let sectionsAll = document.querySelectorAll('main section');
let length = sectionsAll.length;
let main = document.querySelector('main');
for (let navLinkNumber = 0; navLinkNumber < length; navLinkNumber++) {
  navLinksAll[navLinkNumber].onclick = function(){
    if ( navLinksAll[navLinkNumber].classList.contains('link_active')) {

    }else{
      for (let elementNumber = 0; elementNumber < length; elementNumber++){
        sectionsAll[elementNumber].classList.remove('section_active');
        navLinksAll[elementNumber].classList.remove('link_active');
        main.classList.remove('shadow0', 'shadow1', 'shadow2', 'shadow3');
      }
      setTimeout(() => {
        sectionsAll[navLinkNumber].classList.add('section_active');
        navLinksAll[navLinkNumber].classList.add('link_active');
        if (navLinkNumber == 0) {
          body.style.setProperty('--color', '#9503b3');
          main.classList.add('shadow0');
        }else if (navLinkNumber == 1) {
          body.style.setProperty('--color', '#4103b3');
          main.classList.add('shadow1');
        }else if (navLinkNumber == 2) {
          body.style.setProperty('--color', '#0364b3');
          main.classList.add('shadow2');
        }else if (navLinkNumber == 3) {
          body.style.setProperty('--color', '#a80702');
          main.classList.add('shadow3');
        }
      }, 400);
    }
  }
}
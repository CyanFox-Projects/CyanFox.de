document.addEventListener("DOMContentLoaded", function() {
    let cyanfoxHero = document.querySelector('#cyanfox .hero');
    let cyanfoxCards = document.querySelector('#cards');

    if(cyanfoxHero){
        cyanfoxHero.classList.add('animate__animated', 'animate__slideInDown');
    }

    if(cyanfoxCards){
        cyanfoxCards.classList.add('animate__animated', 'animate__slideInUp');
    }
});

window.addEventListener('scroll', function() {
    let cardElements = document.querySelectorAll('.card');
    let whatWeUseSection = document.querySelector('#what_we_are_using');
    let whoWeAreSection = document.querySelector('#who_we_are');

    cardElements.forEach(element => {
        if (element.getBoundingClientRect().top - window.innerHeight <= 0) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });

    if (whatWeUseSection.getBoundingClientRect().top - window.innerHeight <= 0) {
        whatWeUseSection.classList.add('animate__animated', 'animate__slideInUp');
    }

    if (whoWeAreSection.getBoundingClientRect().top - window.innerHeight <= 0) {
        whoWeAreSection.classList.add('animate__animated', 'animate__slideInUp');
    }
});
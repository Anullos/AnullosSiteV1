/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__card', { delay: 300 })
sr.reveal('.home__scroll', { delay: 400 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {})
sr.reveal('.skills__image', { origin: 'left' })
sr.reveal('.skills__name', { distance: '20px', delay: 250, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })
sr.reveal('.skills__icon', { distance: '20px', delay: 50, interval: 100 })

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })

var dialogo2;
var cerrar = document.getElementById('cerrar');

function dialogo(texto) {
    switch (texto) {
        case "uno":
            dialogo2 = document.getElementById('uno');
            break;
        case "dos":
            dialogo2 = document.getElementById('dos');
            break;
        case "tres":
            dialogo2 = document.getElementById('tres');
            break;
        case "cuatro":
            dialogo2 = document.getElementById('cuatro');
            break;
        case "cinco":
            dialogo2 = document.getElementById('cinco');
            break;
        case "seis":
            dialogo2 = document.getElementById('seis');
            break;
        default:
            break;
    }
    dialogo2.showModal();
}

function dialogocerrar() {
    dialogo2.close();
}

cerrar.addEventListener('click', function() {
    dialogo2.close();
});
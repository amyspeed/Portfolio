'use strict';

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
        $('nav').addClass('scrolling');
    }
    else {
    $('nav').removeClass('scrolling');
    }
  });
});

function handleNav() {
    let section;
    $('body').on('click', '.scrollTo', function(event) {
        event.preventDefault();
        section = $(this).attr('id');
        console.log(section);
        $('html,body').animate({
            scrollTop: $(`#scroll-${section}`).offset().top -42
        }, 'slow');
    })
}


const STORE = [
    {
        'image': './images/world.png',
        'alt': 'COVID-19 App screenshot',
        'title': 'COVID-19 Analytics',
        'description': '',
        'liveLink' : 'https://covid-19.amyspeed.dev',
        'liveButtonId' : 'js-covid-live',
        'codeButtonId' : 'js-covid-code',
        'aboutButtonId' : 'js-covid-about',
    },
    {
        'image': './images/IPA.png',
        'alt': 'IPA app screenshot',
        'title': '[ aI pi eI ] IPA Learning App',
        'description': `A gateway to your immersive International Phonetic Alphabet learning experience!<br />
                        React/Redux/HTML5/CSS3/JavaScript
                        Node.js/Express/MongoDB/Mongoose
                        Travis CI/mLab/Heroku`,
        'liveLink' : 'https://pacific-basin-65264.herokuapp.com/',
        'liveButtonId' : 'js-IPA-live',
        'codeButtonId' : 'js-IPA-code',
        'aboutButtonId' : 'js-IPA-about',
    },
    {
        'image': './images/Ditties.png',
        'alt': 'Ditties app screenshot',
        'title': `Ditties | The Songwriter's App`,
        'description': `Where users can create and track their amazing song ideas.<br />
                        JavaScript/jQuery/HTML5/CSS3
                        Node.js/Express/MongoDB/Mongoose
                        Travis CI/mLab/Heroku`,
        'liveLink' : 'https://cryptic-atoll-45082.herokuapp.com/',
        'liveButtonId' : 'js-Ditties-live',
        'codeButtonId' : 'js-Ditties-code',
        'aboutButtonId' : 'js-Ditties-about',
    },
    {
        'image': './images/EventsInTech.png',
        'alt': 'Events in Tech app screenshot',
        'title': 'Events In Tech',
        'description': `A front-end discovery application. Where users can search a third-party API for live Science and Technology events in their area.<br />
                        JavaScript/jQuery/HTML5/CSS3`,
        'liveLink' : 'https://amyspeed.github.io/EventsInTech/',
        'liveButtonId' : 'js-Events-live',
        'codeButtonId' : 'js-Events-code',
        'aboutButtonId' : 'js-Events-about',
    },
    {
        'image': './images/VocalLit.png',
        'alt': 'Vocal Lit app screenshot',
        'title': 'Art Song and Opera Composers',
        'description': `A Vocal Lit Quiz of Fun Facts!!!<br />
                        Along with an identifying work of vocal music, this front-end quiz features bizarre facts about each composer.<br />
                        JavaScript/jQuery/HTML5/CSS3`,
        'liveLink' : 'https://amyspeed.github.io/VocalLit-QuizApp/',
        'liveButtonId' : 'js-Lit-live',
        'codeButtonId' : 'js-Lit-code',
        'aboutButtonId' : 'js-Lit-about',
    },
]

function appendProjects() {
    for (let i = 0; i < STORE.length; i++) {
    $('.projects').append(
        `<div class="row">
            <div class="col-6">
                <div class = "box">
                    <img class = "screenshot" src="${STORE[i].image}" alt = "${STORE[i].alt}"/>
                </div>
            </div>
            <div class="col-6">
                <div class="box">
                <div class = "info">
                    <h4><a href = "${STORE[i].liveLink}" target = "_blank">${STORE[i].title}</a></h4>
                    <p>${STORE[i].description}</p>
                    <button id = "${STORE[i].liveButtonId}">live</button>
                    <button id = "${STORE[i].codeButtonId}">code</button>
                    <button id = "${STORE[i].aboutButtonId}">about</button>
                </div>
                </div>
            </div>
        </div>`

    );
    }
}

handleNav();
appendProjects();






const LINKS = {
    'js-IPA-live': 'https://pacific-basin-65264.herokuapp.com/',
    'js-IPA-code': 'https://github.com/amyspeed/IPA-Front-End',
    'js-IPA-about': 'https://github.com/amyspeed/IPA-Front-End/blob/master/README.md',
    'js-Ditties-live': 'https://cryptic-atoll-45082.herokuapp.com/',
    'js-Ditties-code': 'https://github.com/amyspeed/Ditties-Node-Capstone',
    'js-Ditties-about': 'https://github.com/amyspeed/Ditties-Node-Capstone/blob/master/README.md',
    'js-Events-live': 'https://amyspeed.github.io/EventsInTech/',
    'js-Events-code': 'https://github.com/amyspeed/EventsInTech',
    'js-Events-about': 'https://github.com/amyspeed/EventsInTech/blob/master/README.md',
    'js-Lit-live': 'https://amyspeed.github.io/VocalLit-QuizApp/',
    'js-Lit-code': 'https://github.com/amyspeed/VocalLit-QuizApp',
    'js-Lit-about': 'https://github.com/amyspeed/VocalLit-QuizApp/blob/master/README.md',
}

function handleButtons() {
    $('.projects').on('click', 'button', function(event) {
        event.preventDefault();
        const ID = $(this).attr('id');
        findKey(ID);
    })
}

function findKey(ID) {
    for(let key in LINKS){
        if(ID === key) {
            linkToUrl(LINKS[key]);
        }
    }
}

function linkToUrl(URL) {
    window.open(URL, '_blank');
}

handleButtons();
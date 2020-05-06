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


function appendProjects() {
    $('.projects').append(
        `<div class="row">
            <div class="col-6">
                <div class = "box">
                    <img class = "screenshot" src="./images/IPA.png" alt = "landing page of IPA app"/>
                </div>
            </div>
            <div class="col-6">
                <div class="box">
                <div class = "info">
                    <h4><a href = "https://pacific-basin-65264.herokuapp.com/" target = "_blank">[ aI pi eI ] IPA Learning App</a></h4>
                    <p>A gateway to your immersive International Phonetic Alphabet learning experience!<br />
                        React/Redux/HTML5/CSS3/JavaScript
                        Node.js/Express/MongoDB/Mongoose
                        Travis CI/mLab/Heroku</p>
                    <button id = "js-IPA-live">live</button>
                    <button id = "js-IPA-code">code</button>
                    <button id = "js-IPA-about">about</button>
                </div>
                </div>
            </div>
        </div>`

    );
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
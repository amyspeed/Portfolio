'use strict';

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
    $('.portfolio').on('click', 'button', function(event) {
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
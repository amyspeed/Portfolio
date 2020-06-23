'use strict';

const STORE = [
    {
        'image': './images/cameron.png',
        'alt': 'Cameron Speed Landing',
        'title': 'Cameron Speed | Harmonica',
        'description': `This progressive web app is a musician's marketing platform<br/>to connect to live and remote recording gigs.<br />
            React/React Hooks/JavaScript/CSS3<br />
            Node.js/Nodemailer/Netlify/Heroku<br />
            Mailchimp API/Facebook Pixel/Google Analytics`,
        'liveLink' : 'https://www.cameronspeed.com',
        'liveButtonId' : 'js-cam-live',
        'codeButtonId' : 'js-cam-code',
        'aboutButtonId' : 'js-cam-about',
    },
    {
        'image': './images/world.png',
        'alt': 'COVID-19 App screenshot',
        'title': 'COVID-19 Analytics',
        'description': `An analytics dashboard with live COVID-19 Statistics. Created as a fun front end project 
            during the "Shelter-in-place" order.<br />
            React/Redux/HTML5/CSS3/JavaScript
            Recharts/jVectorMap/NewsAPI`,
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
        'liveLink' : 'https://ipa-learning.herokuapp.com/',
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
        'liveLink' : ' https://ditties.herokuapp.com/',
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
        'liveLink' : 'https://events-in-tech.amyspeed.dev/',
        'liveButtonId' : 'js-Events-live',
        'codeButtonId' : 'js-Events-code',
        'aboutButtonId' : 'js-Events-about',
    },
    {
        'image': './images/VocalLit.png',
        'alt': 'Vocal Lit app screenshot',
        'title': 'A Vocal Lit Quiz of Fun Facts!!!',
        'description': `Along with an identifying work of vocal music, this front-end quiz features bizarre facts about each art song or opera composer.<br />
                        JavaScript/jQuery/HTML5/CSS3`,
        'liveLink' : 'https://vocal-lit-quiz.amyspeed.dev/',
        'liveButtonId' : 'js-Lit-live',
        'codeButtonId' : 'js-Lit-code',
        'aboutButtonId' : 'js-Lit-about',
    },
]

$(document).ready(function() {

    // watch for a scroll away from the top of doc to change navigation menu styles
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
          $('nav').addClass('scrolling');
      }
      else {
      $('nav').removeClass('scrolling');
      }
    });

    // Watch for a scroll to each image container to add animation into view
	$(window).scroll(function() {
        for (let i = 0; i < STORE.length; i++) {
            const topOfElement = $(`#js-img-cont-${i}`).offset().top;
            const bottomOfElement = $(`#js-img-cont-${i}`).offset().top + $('.screenshot-container').outerHeight();
            const bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
            const topOfScreen = $(window).scrollTop();
  	        if((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement)) {
                $(`#js-img-cont-${i}`).addClass('in-view');
            }
            else {
                $(`#js-img-cont-${i}`).removeClass('in-view');
            }
        }
    });
});



function handleNav() {
    let section;
    $('body').on('click', '.scrollTo', function(event) {
        event.preventDefault();
        section = $(this).attr('id');
        // To avoid using the same ID on two elements, "hamburger-" 
        // has been added to the ID of the second iteration.
        // Let's check for it and slice it off!
        if(section.slice(0, 10) === "hamburger-") {
            section = section.slice(10);
            scrollTo(section);
            // close the hamburger menu
            $('.toggler').prop('checked', false);
        }
        else {
            scrollTo(section);
        }
    })
}

function scrollTo(section) {
    $('html,body').animate({
        scrollTop: $(`#scroll-${section}`).offset().top -45
    }, 'slow');
}


function appendProjects() {
    for (let i = 0; i < STORE.length; i++) {
        if (isEven(i) || isMobile()) {
            $('.projects').append(
                `<div class="main-row row projects-row">
                    <div class="col-6">
                        <div class = "screenshot-container" id="js-img-cont-${i}">
                            <a href = "${STORE[i].liveLink}" target = "_blank" rel="noreferrer">
                                <img class = "screenshot" src="${STORE[i].image}" alt = "${STORE[i].alt}"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info-container">
                            <div class = "info">
                                <a href = "${STORE[i].liveLink}" target = "_blank" rel="noreferrer"><h4 class="title">${STORE[i].title}</h4></a>
                                <p>${STORE[i].description}</p>
                                <button id = "${STORE[i].liveButtonId}">live</button>
                                <button id = "${STORE[i].codeButtonId}">code</button>
                                <button id = "${STORE[i].aboutButtonId}">about</button>
                            </div>
                        </div>
                    </div>
                </div>`

            );
        } else {
            // on Odd numbered projects, the orientation of img to description is swapped.
            // The use of "hidden-desktop" and "hidden-mobile" is intended to switch the 
            // orientation back for mobile view.
            $('.projects').append(
                `<div class="main-row row projects-row">

                    <div class="col-6">
                        <div class="info-container">
                            <div class = "info">
                                <a href = "${STORE[i].liveLink}" target = "_blank" rel="noreferrer"><h4 class="title">${STORE[i].title}</h4></a>
                                <p>${STORE[i].description}</p>
                                <button id = "${STORE[i].liveButtonId}">live</button>
                                <button id = "${STORE[i].codeButtonId}">code</button>
                                <button id = "${STORE[i].aboutButtonId}">about</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 hidden-mobile">
                        <div class = "screenshot-container" id="js-img-cont-${i}">
                            <a href = "${STORE[i].liveLink}" target = "_blank" rel="noreferrer">
                                <img class = "screenshot" src="${STORE[i].image}" alt = "${STORE[i].alt}"/>
                            </a>
                        </div>
                    </div>
                </div>`

            );
        }
    }
}

function isEven(i) {
    if(i%2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isMobile() {
    if ($( document ).width() < 640) {
        return true;
    } else {
        return false;
    }
}


const LINKS = {
    'js-cam-live': 'https://www.cameronspeed.com',
    'js-cam-code': 'https://github.com/amyspeed/cameron-speed-harmonica',
    'js-cam-about': 'https://github.com/amyspeed/cameron-speed-harmonica/blob/master/README.md',
    'js-covid-live': 'https://covid-19.amyspeed.dev',
    'js-covid-code': 'https://github.com/amyspeed/COVID-19',
    'js-covid-about': 'https://github.com/amyspeed/COVID-19/blob/master/README.md',
    'js-IPA-live': 'https://ipa-learning.herokuapp.com/',
    'js-IPA-code': 'https://github.com/amyspeed/IPA-Front-End',
    'js-IPA-about': 'https://github.com/amyspeed/IPA-Front-End/blob/master/README.md',
    'js-Ditties-live': ' https://ditties.herokuapp.com/',
    'js-Ditties-code': 'https://github.com/amyspeed/Ditties-Node-Capstone',
    'js-Ditties-about': 'https://github.com/amyspeed/Ditties-Node-Capstone/blob/master/README.md',
    'js-Events-live': 'https://events-in-tech.amyspeed.dev/',
    'js-Events-code': 'https://github.com/amyspeed/EventsInTech',
    'js-Events-about': 'https://github.com/amyspeed/EventsInTech/blob/master/README.md',
    'js-Lit-live': 'https://vocal-lit-quiz.amyspeed.dev/',
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
    window.open(URL, '_blank', 'noreferrer');
}

handleNav();
appendProjects();
handleButtons();
'use strict';

function handleFormSumbit() {
    $('.form-row').on('click', '#contact-button', function(e) {
        e.preventDefault();
        let data = {};
            data.firstName = $('#first-name').val();
            data.lastName = $('#last-name').val();
            data.email = $('#email').val();
            data.subject = $('#subject').val();
            data.message = $('#message').val();
        // console.log(data);
        createLoadingButton();
        sendData(data);
    });
};

function createLoadingButton() {
    $('#contact-button').empty();
    $('#contact-button').append('loading...');
};

function revertSendButton() {
    $('#contact-button').empty();
    $('#contact-button').append(`<i id="plane-icon" class="fas fa-paper-plane"></i>`);

};

function sendData(data) {
    // console.log(data);
    fetch('https://cameron-speed-api.herokuapp.com/api/email-amy', {
    // fetch('http://localhost:8080/api/email-amy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    .then( res => {
        // console.log(res)
        emptyForm();
        appendSuccess(data);
    })
    .catch( err => {
        // console.log(err)
        emptyForm();
        appendError(data);
    })
}

function emptyForm() {
    $('.form-row').empty();
}

function appendSuccess(data) {
    $('.form-row').append(`
        <div class="col-12">
            <h2>Thank you, ${data.firstName}!</h2>
            <p>Your message has been sent successfully!</p>
            <button id="success-button" class="contact-button">Okay!</button>
        </div>
    `)
}

function appendError(data) {
    $('.form-row').append(`
        <div class="col-12">
            <h2>So Sorry, ${data.firstName}!</h2>
            <p>Something went wrong. Please try again.</p>
            <button id="error-button" class="contact-button">Okay</button>
        </div>
    `)
    handleOkayError(data);
}

function handleOkay() {
    $('.form-row').on('click', '#success-button', function(e) {
        e.preventDefault();
        emptyForm();
        appendNewForm();
    })
}

function handleOkayError(data) {
    $('.form-row').on('click', '#error-button', function(e) {
        emptyForm();
        appendFilledForm(data);
    })
}

function appendNewForm() {
    $('.form-row').append(`
        <div class = "col-12">
            <form class="contact-form">
                <div class="col-6 form-col">
                    <label class="name" for="first-name">First Name</label>
                    <br/>
                    <input 
                        name="first-name"
                        id="first-name"
                        class="contact-input"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div class="col-6 form-col">
                    <label class="name" for="last-name">Last Name</label>
                    <br/>
                    <input 
                        name="last-name"
                        id="last-name"
                        class="contact-input"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="email" for="email">Your Email</label>
                    <br/>
                    <input 
                        name="email"
                        id="email"
                        class="contact-input"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="subject" for="subject">How can I help you?</label>
                    <br/>
                    <input 
                        name="subject"
                        id="subject"
                        class="contact-input"
                        type="text"
                        placeholder="Email Subject"
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="message" for="message">Your Message</label>
                    <br/>
                    <textarea 
                        name="message"
                        id="message"
                        class="message"
                        type="text"
                        placeholder="Please write your message here"
                        required
                    ></textarea>
                </div>

                <div class="col-12 form-col">
                    <button id="contact-button" class="contact-button"><i id="plane-icon" class="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    `)
}

function appendFilledForm(data) {
    $('.form-row').append(`
        <div class = "col-12">
            <form class="contact-form">
                <div class="col-6 form-col">
                    <label class="name" for="first-name">First Name</label>
                    <br/>
                    <input 
                        name="first-name"
                        id="first-name"
                        class="contact-input"
                        type="text"
                        placeholder="First Name"
                        value=${data.firstName}
                        required
                    />
                </div>
                <div class="col-6 form-col">
                    <label class="name" for="last-name">Last Name</label>
                    <br/>
                    <input 
                        name="last-name"
                        id="last-name"
                        class="contact-input"
                        type="text"
                        placeholder="Last Name"
                        value=${data.lastName}
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="email" for="email">Your Email</label>
                    <br/>
                    <input 
                        name="email"
                        id="email"
                        class="contact-input"
                        type="email"
                        placeholder="your@email.com"
                        value=${data.email}
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="subject" for="subject">How can I help you?</label>
                    <br/>
                    <input 
                        name="subject"
                        id="subject"
                        class="contact-input"
                        type="text"
                        placeholder="Email Subject"
                        value=${data.subject}
                        required
                    />
                </div>
                <div class="col-12 form-col">
                    <label class="message" for="message">Your Message</label>
                    <br/>
                    <textarea 
                        name="message"
                        id="message"
                        class="message"
                        type="text"
                        placeholder="Please write your message here"
                        required
                    >${data.message}</textarea>
                </div>

                <div class="col-12 form-col">
                    <button id="contact-button" class="contact-button"><i id="plane-icon" class="fas fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    `)
}


handleFormSumbit();
handleOkay();
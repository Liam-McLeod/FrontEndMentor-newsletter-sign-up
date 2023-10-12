const registration_card = document.querySelector('.registration-card');
const success_card = document.querySelector('.success-card');
const form = document.querySelector('form');
const emailInput = document.querySelector('form input');

const error_message = document.querySelector('.error-message');
const success_message = document.querySelector('.success-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    var emailValue = emailInput.value.trim();

    // Error
    if(!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        error_message.classList.remove('hidden');
        emailInput.classList.add('error');
        return
    }

    //Success
    registration_card.classList.add('hidden');
    success_card.classList.remove('hidden');
    success_message.innerText = emailValue;


});
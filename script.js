const emailInput = document.getElementById('email');//Email.
const validateButton = document.getElementById('validateButton');//Button.
const resultMessage = document.getElementById('result');//Message.

validateButton.addEventListener('click', function() {
    const email = emailInput.value.trim();//Trim white space in email.

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regex.test(email)) {
        window.open('thanks.html');//For true email.
    } else {
        resultMessage.textContent = 'Wrong email.';//For wrong email.
        resultMessage.style.color = 'red';
    } if(email == '') {
        resultMessage.textContent = alert('Input email!');//For empty email.
    }
});
const ROOT_URL = 'https://localhost:7166/';
const REGISTER_URL = `${ROOT_URL}api/login`

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=None; Secure";
}

function Login(login, password) {
    fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Login: login, Password: password})
    })
        .then(response => {
            response.json().then(data => {
                window.location = ROOT_URL;
                setCookie('kristal_auth', data['accessToken'], 30);
            });
        });
}

document.getElementById('go').addEventListener('click', function(){
    var name = document.getElementById('имя').value;
    var password = document.getElementById('пароль').value;

    var mainContent = document.querySelector('.main-content-3');

    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Имя и фамилия: ' + name;
    mainContent.appendChild(nameParagraph);

    var passwordParagraph = document.createElement('p');
    passwordParagraph.textContent = 'Пароль: ' + password;
    mainContent.appendChild(passwordParagraph);

    Login(name, password);
});

document.getElementById('go').addEventListener('click', function(){
    var name = document.getElementById('имя').value;
    var password = document.getElementById('пароль').value;

    var mainContent = document.querySelector('.main-content-3');/////////////

    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Имя и фамилия: ' + name;
    mainContent.appendChild(nameParagraph);

    var passwordParagraph = document.createElement('p');
    passwordParagraph.textContent = 'Пароль: ' + password;
    mainContent.appendChild(passwordParagraph);
});

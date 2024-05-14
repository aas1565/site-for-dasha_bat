document.getElementById('go').addEventListener('click', function(){
    var fact = document.getElementById('факт').value;

    var mainContent = document.querySelector('.main-content');

    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Факт: ' + fact;
    mainContent.appendChild(nameParagraph);

});

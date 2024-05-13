const button = document.getElementById('go');

button.addEventListener('click', function(){
    const name = document.getElementById('имя').value;
    const password = document.getElementById('пароль').value;
    const description = document.getElementById('описание').value;
    const image = document.getElementById('изображение').value;

    console.log('Имя и фамилия: ' + name);
    console.log('Пароль: ' + password);
    console.log('Описание: ' + description);
    console.log('Изображение: ' + image);
});





const button2 = document.getElementById('go-2');

button2.addEventListener('click', function(){
    const fact = document.getElementById('факт').value;

    console.log('факт: ' + fact);
});




const button3 = document.getElementById('go-3');

button3.addEventListener('click', function(){
    const proc = document.getElementById('процедура').value;
    const price = document.getElementById('цена').value;
    const teg = document.getElementById('тэг').value;

    console.log('Название процедуры: ' + proc);
    console.log('Цена: ' + price);
    console.log('Тэг: ' + teg);
});
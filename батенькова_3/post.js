/*const fs = require('fs');
const cheerio = require('cheerio');

// Загрузка HTML документа из локального файла
const html = fs.readFileSync('/Users/admin/Desktop/портфолио сайты/site-for-dasha_bat-main/батенькова_2/employees.html');

// Парсинг HTML с помощью cheerio
const $ = cheerio.load(html);

// Извлечение имени и фамилии из элемента с классом "name-s"
const fullName = $('.name-s').text();

// Разделение имени и фамилии
const [lastName, firstName] = fullName.split(' ');


const fullNames = $('.name-s');

// Проход по каждому элементу и извлечение имени и фамилии
fullNames.each((index, element) => {
  const fullName = $(element).text()
  const [lastName, firstName] = fullName.split(' ');
  console.log('Фамилия:', lastName);
  console.log('Имя:', firstName);
});*/



/*const http = require('http');

const options = {
    hostname: 'localhost',
    port: 5111,
    path: '/Assistants', // Убираем один слеш перед Assistants
    method: 'POST'
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Успешный ответ: ' + data);
    });
});

req.on('error', (error) => {
    console.error('Ошибка: ' + error.message);
});

req.end();
*/


/*
const assistantsData = [{"id":0,"name":"Alena","description":"Good assistant"}];

const cardsContainer = document.getElementById('cardsContainer');

assistantsData.forEach((assistant) => {
    const card = document.createElement('li');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'girl-1';
    img.src = 'img/girl1.jpg'; // Путь к изображению может быть изменен
    img.alt = assistant.name;

    const name = document.createElement('p');
    name.className = 'name-s';
    name.textContent = assistant.name;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button-1';
    button.innerHTML = '<span>Записаться</span>';

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(button);

    cardsContainer.appendChild(card);
});
*/







function createAssistantCards(assistantsData) {
    console.log('ok')
    const cardsContainer = document.getElementById('cardsContainer');

    assistantsData.forEach((assistant) => {
        console.log('2ok')
        const card = document.createElement('li');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'girl-1';
        img.src = 'img/girl1.jpg'; // Путь к изображению может быть изменен
        img.alt = assistant.name;

        const name = document.createElement('p');
        name.className = 'name-s';
        name.textContent = assistant.name;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'button-1';
        button.innerHTML = '<span>Записаться</span>';

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(button);

        cardsContainer.appendChild(card);
    });
}

const http = require('http');

const options = {
    hostname: 'localhost',
    port: 5111,
    path: '/Assistants', // Убираем один слеш перед Assistants
    method: 'POST'
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Успешный ответ: ' + data);
        //let assistantsData = JSON.parse(data); // Преобразуем полученные данные в объект JavaScript
        console.log(data)

        createAssistantCards(data); // Вызываем функцию для создания карточек ассистентов
    });
});

req.on('error', (error) => {
    console.error('Ошибка: ' + error.message);
});

req.end();


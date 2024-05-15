/*const ROOT_URL = 'https://localhost:7166/';
const ASSISTANT_URL = `${ROOT_URL}api/assistants`;

fetch(ASSISTANT_URL, {
    method: 'GET'
})
    .then(
        response => {
            if (response.ok) {
                response.json()
                    .then(json => {
                        const cardsContainer = document.getElementById('cardsContainer');

                        json.forEach(card => {
                            const newCard = document.createElement('li');
                            newCard.classList.add('card');

                            const newImage = document.createElement('img');
                            newImage.classList.add('girl-1');
                            newImage.src = `./img/${card['imageURL']}`;
                            newImage.alt = 'Сотрудник';
                            newCard.appendChild(newImage);

                            const newName = document.createElement('p');
                            newName.classList.add('name-s');
                            newName.textContent = card['name'];
                            newCard.appendChild(newName);

                            const newButton = document.createElement('button');
                            newButton.type = 'button';
                            newButton.classList.add('button-1');
                            newButton.innerHTML = '<span>Записаться</span>';
                            newCard.appendChild(newButton);

                            cardsContainer.appendChild(newCard);
                        });
                    });
            } else {
                throw new Error('Ошибка...');
            }
        }
    )
    .catch(
        error => {
        }
    )*/



// Массив с информацией о карточках
const cardsData = [
    {
        name: 'Новое имя 3',
        imgSrc: 'img/girl1.jpg',
        alt: 'Новая девушка 1'
    },
    {
        name: 'Новое имя 4',
        imgSrc: 'img/girl2.jpg',
        alt: 'Новая девушка 2'
    }
];

// Получаем контейнер для карточек
const cardsContainer = document.getElementById('cardsContainer');

// Создаем новые элементы для каждой карточки
cardsData.forEach(card => {
    const newCard = document.createElement('li');
    newCard.classList.add('card');

    const newImage = document.createElement('img');
    newImage.classList.add('girl-1');
    newImage.src = card.imgSrc;
    newImage.alt = card.alt;
    newCard.appendChild(newImage);

    const newName = document.createElement('div');
    newName.classList.add('name-s');

    const nameText = document.createElement('p');
    nameText.textContent = card.name;
    newName.appendChild(nameText);

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add('rep');
    buttonsWrapper.style.display = 'flex';

    const newButton1 = document.createElement('button');
    newButton1.type = 'button';
    newButton1.classList.add('button-1');
    newButton1.innerHTML = '<span>Записаться</span>';
    buttonsWrapper.appendChild(newButton1);

    const newButton2 = document.createElement('button');
    newButton2.classList.add('rub-button');

    const newButton2Image = document.createElement('img');
    newButton2Image.src = 'img/rubish.png';
    newButton2Image.alt = 'корзина';
    newButton2.appendChild(newButton2Image);

    buttonsWrapper.appendChild(newButton2);

    newName.appendChild(buttonsWrapper);

    newCard.appendChild(newName);

    cardsContainer.appendChild(newCard);
});


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

    const newName = document.createElement('p');
    newName.classList.add('name-s');
    newName.textContent = card.name;
    newCard.appendChild(newName);

    const newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.classList.add('button-1');
    newButton.innerHTML = '<span>Записаться</span>';
    newCard.appendChild(newButton);

    cardsContainer.appendChild(newCard);
});

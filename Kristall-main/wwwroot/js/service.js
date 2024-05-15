const ROOT_URL = 'https://localhost:7166/';
const SERVICE_URL = `${ROOT_URL}api/procedures`;
const blockPrototype = document.querySelector('.block');

const tagNames = {
    'depil-zone-komplex': '#Комплексные зоны',
    'depil-zone-body': '#Депиляция тела',
    'depil-zone-hand': '#Депиляция рук',
    'depil-zone-foot': '#Депиляция ног',
    'depil-zone-face': '#Депиляция лица',
    'face': '#Уход за лицом',
    'body': '#Уход за телом',
    'massage': '#Ручной массаж',
    'face-body': '#Уход за телом и лицом'
}

function createServiceNode(name, description, tag, price) {
    const divBlock = document.createElement('div');
    divBlock.classList.add('block');
    divBlock.setAttribute('data-category', tag);

    const divInf = document.createElement('div');
    divInf.classList.add('inf');

    const h3 = document.createElement('h3');
    h3.classList.add('block-h');
    h3.textContent = name;

    const p = document.createElement('p');
    p.classList.add('block-p');
    p.textContent = description;

    divInf.appendChild(h3);
    divInf.appendChild(p);

    const divInf2 = document.createElement('div');
    divInf2.classList.add('inf-2');

    const spanPrice = document.createElement('span');
    spanPrice.classList.add('price-komplex');
    spanPrice.textContent = `${price}₽`;

    const spanHash = document.createElement('span');
    spanHash.classList.add('hash-komplex');
    spanHash.textContent = tagNames[tag];

    divInf2.appendChild(spanPrice);
    divInf2.appendChild(spanHash);

    divBlock.appendChild(divInf);
    divBlock.appendChild(divInf2);

    return divBlock;
}


fetch(SERVICE_URL, {
    method: 'GET'
})
    .then(
        response => {
            if (response.ok) {
                response.json()
                    .then(json => {
                        if (!json) {
                            throw new Error('Ошибка...');
                        }

                        for (const procedure of json) {
                            blockPrototype.parentNode.appendChild(createServiceNode(procedure['name'], procedure['description'], procedure['tag'], procedure['price']));
                        }
                    });
            } else {
                throw new Error('Ошибка...');
            }
        }
    )
    .catch(
        error => {
        }
    )
const ROOT_URL = 'https://localhost:7166/';
const FACTS_URL = `${ROOT_URL}api/information`;
const mainContent = document.querySelector('.main-content');

fetch(FACTS_URL, {
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

                        for (const fact of json) {
                            const nameParagraph = document.createElement('p');
                            nameParagraph.textContent = fact['text'];
                            mainContent.appendChild(nameParagraph);
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
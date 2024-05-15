const ROOT_URL = 'https://localhost:7166/';
const ADD_INFO_URL = `${ROOT_URL}api/newInformation`
const ADD_SERVICE_URL = `${ROOT_URL}api/newProcedure`
const ADD_ASSISTANT_URL = `${ROOT_URL}api/newAssistant`

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}
const kristalAuth = `Bearer ${getCookie('kristal_auth')}`;

function addNewInformation(info) {
    fetch(ADD_INFO_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': kristalAuth,
        },
        body: JSON.stringify({Text: info})
    })
        .then(response => {
            if (response.ok) {
            }
        });
}

function addNewService(service) {
    fetch(ADD_SERVICE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': kristalAuth,
        },
        body: JSON.stringify(service)
    })
        .then(response => {
            if (response.ok) {
            }
        });
}

function addNewAssistant(assistant) {
    const formData = new FormData();
    for (const key of assistant.keys()) {
        formData.append(key, assistant.get(key));
    }

    fetch(ADD_ASSISTANT_URL, {
        method: 'POST',
        headers: {
            'Authorization': kristalAuth,
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
            }
        });
}

const button = document.getElementById('go');

button.addEventListener('click', function(){
    const name = document.getElementById('имя').value;
    const password = document.getElementById('пароль').value;
    const description = document.getElementById('описание').value;

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Description', description);
    formData.append('Image', document.getElementById('изображение').files[0]);

    addNewAssistant(formData);
});



const button2 = document.getElementById('go-2');

button2.addEventListener('click', function(){
    const fact = document.getElementById('факт').value;
    document.getElementById('факт').value = '';
    addNewInformation(fact);
});




const button3 = document.getElementById('go-3');

button3.addEventListener('click', function(){
    const proc = document.getElementById('процедура').value;
    const price = document.getElementById('цена').value;
    const description = document.getElementById('procedureDescription').value;
    const teg = document.getElementById('тэг').value;

    const service = {
        name: proc,
        description: description,
        tag: teg,
        price: price};

    addNewService(service);
});
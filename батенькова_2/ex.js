document.getElementById('go').addEventListener('click', function(){
    var name=document.getElementById('имя').value
    var password=document.getElementById('пароль').value

    var url="https://example.com"//делаем url куда будет отправлен post- запрос
    var option={
        method:'POST',//метод запроса
        headers:{//заголовки запроса с типом контента-application/json
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name:name, password:password})//тело запроса с данными в формате JSON- данные из поля ввода
    }

    fetch(url, option)//выполняем post-запрос по заданному url с переданными опциями
    .then(function(response){
        if(response.ok){//успешен ли ответ
            return response.json()
        }
        throw new Error('ошибка при выполнении запроса')
    })
    .then(function(data){//полученный ответ от сервера выводится в консоль
        console.log(data)
    })
    .catch(function(error){//если ошибка
        console.log(error)
    })
})

document.getElementById('go').addEventListener('click', function(){
    var name=document.getElementById('имя').value
    var password=document.getElementById('пароль').value
    var url="https://example.com"
    var xhr= new XMLHttpRequest()//создаем объект для ajax запросов
    xhr.open('GET', url, true)//устанавливаем тип запроса get и url адрес, куда будет отправлен запрос
    xhr.onload=function(){//onload- срабатывает при получении ответа из сервера
        if(xhr.status >=200 && xhr.status < 400){
            var data=xhr.responseText//ответ от сервера
            console.log(data)
        }
    }
    xhr.send()//отправка запроса на сервер
})

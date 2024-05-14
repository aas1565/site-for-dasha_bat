let filter=document.querySelector('.filter-item')
let articles=document.querySelectorAll('.block')

filter.onchange= function(e){
    target=e.target.value
    for (let article of articles){
        if (article.dataset.category !== target && target!='all'){
            article.classList.add('hidden')
        }
        else{
            article.classList.remove('hidden')
        }
    }
}

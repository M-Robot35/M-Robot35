
const params= {
    "python":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
    },
    "php":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
    },
    "html":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
    },
    "javascript":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/919/919828.png"
    },
    "css":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
    },
    "laravel":{
        "imgUrl":"https://e7.pngegg.com/pngimages/719/649/png-clipart-laravel-software-framework-php-web-framework-model-view-controller-framework-angle-text.png"
    },
    "scss":{
        "imgUrl":"https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
    }    
}

function gitHubApi(){
    const usuario = "M-Robot35"
    fetch(`https://api.github.com/users/${usuario}/repos`)
    
    .then(async res=>{
        if(res.status != 200){
            throw new Error(res.status);
        }
        let response = await res.json();
        document.getElementById('photo-user').src= response[0]['owner']['avatar_url'];

        formarHtml(response)
    })
}

const formarHtml = (apiResult)=>{
    let conteiner= document.querySelector('.github-repositories');
    
    apiResult.map( items =>{
        if( items['language'] == null) return

        const linguagem= items['language'].toLowerCase();
        const today = new Date(items['created_at']);
        let divisao = document.createElement("div");   
         
        let html = `
        <div class="card tilt-in-bl">
            <img title='${items['description']}' src="${params[linguagem]['imgUrl']}" class="card-img-top size-image" alt="imagem">
            <div class="card-body">
                <h5 title='${items['name']}' class="card-title">${items['name']}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Linguagem : ${items['language']}</li>
                <li class="list-group-item">Data : ${ today.toLocaleDateString() }</li>
            </ul>
            <div class="card-body">
                <a href="${items['html_url']}" target='_blank' class="btn btn-outline-success">Ver Repositorio</a>
            </div>
        </div>
    `
    divisao.innerHTML= html
    conteiner.appendChild(divisao);    
    })
}


gitHubApi()





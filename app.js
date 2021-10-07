//array --> variável com subdivisões (índices)
let filmes = [
    "images/guerra.jpg" , 
    "images/viuva.jpg" , 
    "images/pantera.jpg" , 
    "images/capita.jpg" , 
    "images/guardioes.jpg" , 
    "images/formiga.jpg" , 
    "images/spider.jpg"
]

//refatoração
//melhorar um código existente.

function CarregarFilmes(){
    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")

    divListaFilmes.innerHTML = ""
    
    //laço de repetição
    for(let i = 0 ; i < totalFilmes ; i++){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [i] + ">"

    }
}

function AdicionarFilme(){
    let nomeFilme = document.querySelector("#nome-do-filme").value
    let caminhoCompleto = "images/" + nomeFilme

    filmes.push(caminhoCompleto)

    CarregarFilmes()
}
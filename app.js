function CarregarFilmes(){
    //array --> variável com subdivisões (índices)
    let filmes = [
        "images/guerra.jpg" , 
        "images/viuva.jpg" , 
        "images/pantera.jpg" , 
        "images/capita.jpg" , 
        "images/guardioes.jpg" , 
        "images/formiga.jpg" , 
        "images/spider.jpg" , 
        "images/thor.jpg"
    ]

    let totalFilmes = filmes.length
    
    //laço de repetição
    for(let i = 0 ; i < totalFilmes ; i++){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [i] + ">"

    }
}
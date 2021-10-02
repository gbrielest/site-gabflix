function CarregarFilmes(){
    //array --> variável com subdivisões (índices)
    let filmes = ["images/guerra.jpg", "images/viuva.jpg", "images/pantera.jpg", "images/capita.jpg" , "images/guardioes.jpg" , "images/formiga.jpg" , "images/spider.jpg" , "images/thor.jpg"]
    
    //laço de repetição
    for(let controle = 0; controle < 8 ; controle = controle + 1){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [controle] + ">"

    }
}
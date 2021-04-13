const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promessa.then(catalogarFilmes);

const filmes = document.querySelector(".movies")
let catalogoFilmes = [];

function catalogarFilmes(resposta){
    catalogoFilmes = resposta.data;
    popularCatalogo();
}

function popularCatalogo(){
for(let i = 0; i < catalogoFilmes.length; i++ ){
    filmes.innerHTML += `        
    <div class="movie">
    <img src= ${catalogoFilmes[i].imagem}>
    <div class="title">${catalogoFilmes[i].titulo}</div>
    <button onClick="comprar(${catalogoFilmes[i].id})">
      Comprar
      <ion-icon name="cart-outline"></ion-icon>
    </button>
    </div>`
};
}

function comprar(id){
    const nome = prompt("Qual o seu nome ?")
    const qtd = prompt("Quantos ingressos ?")
    const dados = {
        nome: nome,
        quantidade: qtd
    }
    const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`, dados);
    console.log(requisicao)
    requisicao.then(tudoCerto)
    requisicao.catch(erro)
}

function tudoCerto(){
    alert("Ingresso comprado com sucesso!")

}

function erro(){
    alert("Os ingressos para este filme estão esgotados!")
}


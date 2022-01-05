const produtos = [
  {
    id: 0,
    nome: "camisa",
    img: "camisaAzul.jpg",
    quantidade: 0,
  },

  {
    id: 1,
    nome: "camisa",
    img: "camisaAzul.jpg",
    quantidade: 0,
  },

  {
    id: 2,
    nome: "camisa",
    img: "camisaAzul.jpg",
    quantidade: 0,
  },

  {
    id: 3,
    nome: "camisa",
    img: "camisaAzul.jpg",
    quantidade: 0,
  },

  {
    id: 4,
    nome: "blusaPreta",
    img: "blusaPreta.jpg",
    quantidade: 0,
  },
];

const Loja = () => {
  var containerProdutos = document.getElementById("produto-item");
  produtos.map((unico) => {
    containerProdutos.innerHTML +=
      `
        <div class="div-produto">
            <img src="` +unico.img +`" alt="camisa" />
            <p>` +unico.nome +`</p>
            <button key="` +unico.id +`">Comprar</button>
        </div>
        `;
  });
};

Loja();

var quantidade = 0;

atulizarCarrinho = () => {
  var carrinho = document.getElementById("wrap-icon");
  carrinho.innerHTML="";
  quantidade ++

  produtos.map((unico) => {
    if (unico.quantidade > 0) {
        carrinho.innerHTML =
        `
        <img src="icone.ico" alt="icone" class="iconebag" /> 

        <div class="iconebag-itens">
        <p id="carrinho-item" class="number">`+quantidade+`</p>
        </div>

        `;
    }
  });
};

var targetButton = document.getElementsByTagName('button');

for (var i = 0; i < targetButton.length; i++){
    targetButton[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        produtos[key].quantidade++;
        atulizarCarrinho();
    })
}


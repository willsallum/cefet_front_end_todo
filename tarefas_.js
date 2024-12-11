let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

// >>>> EXECERCÍCIO 1: Carregar tarefas existentes
let paiEl = document.querySelector("#lista-tarefas");             // captura o elemento pai dos elementos <li>
paiEl.innerHTML = "";                                             // remove todos os filhos que possam existir em UL   
//categoriaEl = document.querySelector("#nova-tarefa-categoria");   // captura o elemento selecionado do SELECT

for (let i = 0; i < tarefas.length; i++) {                          // varre o objeto 'tarefas'
  insereTarefaNaPagina(tarefas[i]);                               // evoca a função 'insereTarefaNaPagina e em cada iteração,
  // passa um objeto de cada vez (total: 2)
}

function insereTarefaNaPagina(tarefa) {
  let filhoEl = document.createElement("li");                     // cria um novo elemento <li> vazio
  filhoEl.classList.add("item-tarefa");                           // adiciona classe "item-tarefa" ao novo elemento <li> criado
  //classeCategoria = "categoria-" + categoriaEl.value;             // cria um nome de classe concatenando a palavra 'categira-' ao elelemento do SELECT
  //filhoEl.classList.add(classeCategoria);                         // atribui class a nova tarefa
  filhoEl.innerHTML = tarefa.nome;                                // item nome do objeto tarefas recebido via prâmetro
  //paiEl.appendChild(filhoEl);
  paiEl.insertBefore(filhoEl, paiEl.children[0]);                 // insere no elemento pai dos <li>, o elemento filho na posição inicial
  if (tarefa.marcado)                                              // se o item 'marcado', do objeto tarefa, estiver com o valor 'true', 
    // adiciona a classe 'marcado' à nova tarefa; caso contrário, remove a mesma
    filhoEl.classList.add("marcado");
  else
    filhoEl.classList.remove("marcado");
}


// >>>> EXECERCÍCIO 2: Incluir uma nova tarefa    

var novoItemEl = document.querySelector("#nova-tarefa-nome");     // captura o elemento 'nova-tarefa-nome'
botaoEl = document.querySelector("#incluir-nova-tarefa");         // captura o elemento 'incluir-nva-tarefa' (+)
botaoEl.addEventListener("click", function () {                     // cria evento de 'click' para o elemento 'incluir-nova-tarefa'
  let tarefa = { nome: novoItemEl.value, categoria: 'outros', marcado: false }; // na função do evento 'click', crie novo objeto 'tarefa'
  // contendo elementos nome, categorria e marcado com os devidos valoes
  insereTarefaNaPagina(tarefa);                                   // evoque a função do EX1 'insereTarefaNaPagina' passando o novo objeto 
  novoItemEl.value = "";                                          // limpe conteúdo do elemento 'nova-tarefa-nome'
  novoItemEl.focus();                                             // coloque o foco para o elemento 'nova-tarefa-nome'
});

// >>>> DESAFIO 1: Mostrar as novas tarefas no início da lista
var novoItemEl = document.querySelector("#nova-tarefa-nome");     // capture o elemento 'nova-tarefa-nome' 
botaoEl = document.querySelector("#incluir-nova-tarefa");         // capture o elemento 'incluir-nova-tarefa' 
botaoEl.addEventListener("click", function () {                     // cria evento de 'click' para o elemento 'incluir-nova-tarefa' 
  let tarefa = {
    nome: novoItemEl.value,                           // na função do evento 'click', crie objeto 'tarefa', atribuindo aos seus  elementos od devidos valores   
    categoria: 'outros',
    marcado: false
  };
  insereTarefaNaPagina(tarefa);                                   // evoque a função 'insereTarefaNaPagina', passando como parâmetro o objeto criando 
  novoItemEl.value = "";                                          // limpe o conteúdo do elemento 'nova-tarefa-nome'
  novoItemEl.focus();                                             // coloque o foco para o elemento 'nova-tarefa-nome'
});

// >>>> DESAFIO 2: Pressionar “Enter” inclui a tarefa
novoItemEl.addEventListener("keyup", function (e) {               // crie evento  "keyup" para o elemento 'nova-tarefa-nome' 
  if (e.isComposing || e.keyCode === 13) {                       // se a tecla "ENTER" (keyup=13) for pressionada, crie novo objeto 'tarefa' com seus respectivos atributos e valores
    let tarefa = {
      nome: novoItemEl.value,
      categoria: 'outros',
      marcado: false
    };
    insereTarefaNaPagina(tarefa);                               // ecovque a função 'insereTarefaNaPagina' passando o novo objeto criado
    novoItemEl.value = "";                                      // limpe o conteúdo do elemento 'nova-tarefa-nome'
    novoItemEl.focus();                                          // coloque o foco para o elemento 'nova-tarefa-nome'
  }
});

let categorias = []; // Variável para armazenar a lista de categorias

function listar() {
  fetch("https://localhost:5092/api/FormData", {
    method: "GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())
  .then((result) => {
    categorias = result; // Armazena a lista de categorias na variável categorias
    renderizar(result);
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Problema Verificado',
      text: 'Contate um administrador para a resolução do problema.',
    })
  });
}

function excluir(ramal) {
  var login = prompt("Digite o login:");
  var senha = prompt("Digite a senha:");
  if (login === "sicoobEmpresas" && senha === "myNGim9RFRj3dVyMdI6Jc2@Dh%GAY1") {
    fetch("https://localhost:5092/api/FormData/" + ramal, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((result) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Credenciais Inválidas',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuário Excluído.',
        showConfirmButton: false,
        timer: 1500
      });
      window.location.reload(true);
    });
  }
}

function renderizar(Categorias) {
  let tabela = document.querySelector('.ramal-princ');
  tabela.innerHTML = ''; // Limpa a tabela antes de renderizar novamente

  for (let categoria of Categorias) {
    let linha = `
      <div class="ramal-card-container">
        <div class="ramal-top">
          <h2 class="medium-white-normal">${categoria.nome}</h2>
          <p class="small-white-normal">${categoria.setor}</p>
          <p class="small-white-normal local-pa">PA - ${categoria.pa}</p>
        </div>
        <div class="ramal-bottom">
          <p class="ramal-telefone more-small-black-normal">Ramal</p>
          <h1 class="ramal-n big-black-normal">${categoria.ramal}</h1>
          <br>
          <p class="ramal-email more-small-black-normal"><i class="fa fa-envelope"></i> | ${categoria.email}</p>
          <p class="ramal-telefone more-small-black-normal"><i class="fa fa-phone fa-rotate-90"></i> | ${categoria.cell}</p>
          <div class="ramal-buttons">
            <button class="ramal-button-edit small-white-normal" onclick="abrirModalEditar(${categoria.ramal})">Editar</button>
            <button class="ramal-button-remove small-white-normal"><a class="remove-btn" href="javascript: excluir(${categoria.ramal})">Excluír</button>
          </div>
        </div>
      </div>
    `;
    let div = document.createElement("div");
    div.innerHTML = linha;
    tabela.appendChild(div);
  }
}

const cadastramento = document.querySelector('.cadastramentoLink');
cadastramento.addEventListener('click', verificarCredenciais);

const pesquisaInput = document.querySelector('#pesquisa-input');
pesquisaInput.addEventListener('input', pesquisar);

const criterioPesquisa = document.querySelector('#criterio-pesquisa');
criterioPesquisa.addEventListener('change', pesquisar);

function pesquisar() {
  // Implemente a lógica de pesquisa aqui, se necessário
}

// Função executada quando o botão "Excluir" é clicado
function verificarCredenciais(event) {
  var login = prompt("Digite o login:");
  var senha = prompt("Digite a senha:");

  if (login === "sicoobEmpresas" && senha === "myNGim9RFRj3dVyMdI6Jc2@Dh%GAY1") {
    alert("Credenciais corretas!");
    // Coloque aqui o código para realizar a exclusão
  } else {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Credenciais Inválidas',
      showConfirmButton: false,
      timer: 1500
    });
    event.preventDefault();
  }
}


function pesquisar() {
  const termoPesquisa = pesquisaInput.value.toLowerCase();
  const criterio = criterioPesquisa.value; // Obtém o critério selecionado
  const ramaisContainer = document.querySelector('.ramal-princ');
  const ramaisCards = ramaisContainer.querySelectorAll('.ramal-card-container');

  ramaisCards.forEach((card) => {
    const nome = card.querySelector('.medium-white-normal').textContent.toLowerCase();
    const ramal = card.querySelector('.ramal-n').textContent.toLowerCase();
    const pa = card.querySelector('.local-pa').textContent.toLowerCase();

    let correspondencia = false;

    // Verifica o critério selecionado e compara com o termo de pesquisa correspondente
    if (criterio === 'nome' && nome.includes(termoPesquisa)) {
      correspondencia = true;
    } else if (criterio === 'pa' && pa.includes(termoPesquisa)) {
      correspondencia = true;
    } else if (criterio === 'ramal' && ramal.includes(termoPesquisa)) {
      correspondencia = true;
    }

    if (correspondencia) {
      card.style.display = 'block'; // Exibe o card se houver correspondência
    } else {
      card.style.display = 'none'; // Oculta o card se não houver correspondência
    }
  });
}
listar();

// Variáveis para o modal
const modalOverlay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');
const editForm = document.getElementById('editForm');



function abrirModalEditar(ramal) {
  var login = prompt("Digite o login:");
  var senha = prompt("Digite a senha:");
  // Encontra o ramal específico na lista de Categorias
  const ramalSelecionado = categorias.find((categoria) => categoria.ramal === ramal);
  if (login === "sicoobEmpresas" && senha === "myNGim9RFRj3dVyMdI6Jc2@Dh%GAY1") {
  // Verifica se o ramal selecionado foi encontrado
  if (ramalSelecionado) {
    // Preenche os campos do formulário do modal com as informações do ramal selecionado
    const editForm = document.getElementById('editForm');
    editForm.reset(); // Limpa o formulário antes de preencher com novos dados

    // Preenche os campos do formulário com as informações do ramal
    editForm.elements['ramal'].value = ramalSelecionado.ramal;
    editForm.elements['nome'].value = ramalSelecionado.nome;
    editForm.elements['setor'].value = ramalSelecionado.setor;
    editForm.elements['pa'].value = ramalSelecionado.pa;
    editForm.elements['email'].value = ramalSelecionado.email;
    editForm.elements['telefone'].value = ramalSelecionado.cell;

    // Exibe o modal
    modalOverlay.style.display = 'flex';
  } else {
    // Caso o ramal não seja encontrado, exiba uma mensagem de erro ou trate de acordo com a sua necessidade.
    console.error('Ramal não encontrado:', ramal);
  }
}
}

// Adiciona um evento de clique ao botão "Cancelar" do modal para fechá-lo
const fecharModalButton = document.getElementById('fecharModal');
fecharModalButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

editForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Constrói o objeto formDataObject a partir dos dados do formulário
  const formDataObject = {
    nome: editForm.elements['nome'].value,
    setor: editForm.elements['setor'].value,
    pa: editForm.elements['pa'].value,
    ramal: editForm.elements['ramal'].value,
    email: editForm.elements['email'].value,
    cell: editForm.elements['telefone'].value,
  };

  // Envia os dados atualizados para o servidor via requisição PUT
  fetch("https://localhost:5092/api/FormData/" + formDataObject.ramal, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json', // Define o tipo de mídia como JSON
    },
    body: JSON.stringify(formDataObject), // Converte o objeto em uma string JSON
  })
  .then((response) => {
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Ramal Editado',
        text: 'As informações do ramal foram atualizadas com sucesso!',
      });
      modalOverlay.style.display = 'none';
      listar(); // Atualiza a lista após a edição ser concluída
    } else {
      throw new Error('Erro ao atualizar o ramal.');
    }
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Ocorreu um erro ao atualizar o ramal. Tente novamente mais tarde.',
    });
  });
});


// Carrega a lista inicial de ramais
listar();
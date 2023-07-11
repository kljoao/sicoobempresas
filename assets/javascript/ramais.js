function listar(){
    fetch("https://localhost:5092/api/FormData", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json())
    .then((result) => {
        renderizar(result)
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Problema Verificado',
            text: 'Contate um administrador para a resolução do problema.',
          })
    });
}

function excluir(ramal){
    var login = prompt("Digite o login:");
    var senha = prompt("Digite a senha:");
    if (login === "sicoobEmpresas" && senha === "myNGim9RFRj3dVyMdI6Jc2@Dh%GAY1") {
    fetch("https://localhost:5092/api/FormData/" + ramal, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((response) => response.json())
      .then((result) => {
          listar()
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Credenciais Inválidas',
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((error) => {
        listar()
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Credenciais Inválidas',
          showConfirmButton: false,
          timer: 1500
        });
    })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Credenciais Inválidas',
            showConfirmButton: false,
            timer: 1500
          });
    }
}

function renderizar(Categorias){
    let tabela = document.querySelector('.ramal-princ');
    for(let categoria of Categorias){

        let linha = `
        <div class="ramal-card-container">
        <div class="ramal-top">
            <h2 class="medium-white-normal">${categoria.nome}</h2>
            <p class="small-white-normal">${categoria.setor}</p>
            <p class="small-white-normal">PA - ${categoria.pa}</p>
        </div>
        <div class="ramal-bottom">
            <p class="ramal-telefone more-small-black-normal">Ramal</p>
            <h1 class="ramal-n big-black-normal">${categoria.ramal}</h1>
            <br>
            <p class="ramal-email more-small-black-normal"><i class="fa fa-envelope"></i> | ${categoria.email}</p>
            <p class="ramal-telefone more-small-black-normal"><i class="fa fa-phone fa-rotate-90"></i> | ${categoria.cell}</p>
            <div class="ramal-buttons">
                <button class="ramal-button-edit small-white-normal" onclick="verificarCredenciais()">Editar</button>
                <button class="ramal-button-remove small-white-normal"><a href="javascript: excluir(${categoria.ramal})">Excluír</button>
            </div>
        </div>
    </div>
        `

        let tr = document.createElement("tr");
        tr.innerHTML = linha;
        
        tabela.appendChild(tr)
    }
}


const cadastramento = document.querySelector('.cadastramentoLink');
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

  cadastramento.addEventListener('click', verificarCredenciais)
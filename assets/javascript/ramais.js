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

function renderizar(Categorias){
    console.log(Categorias)
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
            </div>
        </div>
        `

        let tr = document.createElement("tr");
        tr.innerHTML = linha;
        
        tabela.appendChild(tr)
    }
}
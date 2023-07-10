const nomeInput = document.querySelector('#nome-input');
let validNome = false;

nomeInput.addEventListener('keydown', () => {
    if(nomeInput.value.length <= 6){
        nomeInput.setAttribute('style', 'outline: 3px solid red;');
        validNome = false;
    }
    else{
        nomeInput.setAttribute('style', 'outline: 3px solid green');
        validNome = true;
    }
})

const setorInput = document.querySelector('#setor-input');
let validSetor = false;

setorInput.addEventListener('blur', () => {
    Swal.fire({
        icon: 'info',
        title: 'Tipos de Setores',
        text: 'Comercial, Tecnologia, Financeiro, Credito, Controladoria, Diretoria, Secretaria, RH, Tecnologia ou Marketing',
      })
})

setorInput.addEventListener('keydown', () => {
    if(setorInput.value.length <= 3){
        setorInput.setAttribute('style', 'outline: 3px solid red;');
        validSetor = false;
    }
    else{
        setorInput.setAttribute('style', 'outline: 3px solid green');
        validSetor = true;
    }
})

const ramalInput = document.querySelector('#ramal-input');
let validRamal = false;

ramalInput.addEventListener('keydown', () => {
    if(ramalInput.value.length <= 2){
        ramalInput.setAttribute('style', 'outline: 3px solid red;');
        validRamal = false;
    }
    else{
        ramalInput.setAttribute('style', 'outline: 3px solid green');
        validRamal = true;
    }
})

const emailInput = document.querySelector('#email-input');
let validEmail = false;

emailInput.addEventListener('keydown', () => {
    if(emailInput.value.length <= 5 ){
        emailInput.setAttribute('style', 'outline: 3px solid red;');
        validEmail = false;
    }
    else{
        emailInput.setAttribute('style', 'outline: 3px solid green');
        validEmail = true;
    }
})

const telefoneInput = document.querySelector('#telefone-input');
let validTell = false;

telefoneInput.addEventListener('keydown', () => {
    if(telefoneInput.value.length <= 8){
        telefoneInput.setAttribute('style', 'outline: 3px solid red;');
        validTell = false;
    }
    else{
        telefoneInput.setAttribute('style', 'outline: 3px solid green');
        validTell = true;
    }
})

const paInput = document.querySelector('#pa-input')

function cadastrar(){
    if(validNome && validSetor && validRamal && validEmail && validTell == true){
        const data = {
            Nome: nomeInput.value,
            Email: emailInput.value,
            Setor: setorInput.value,
            Ramal: ramalInput.value,
            Cell: telefoneInput.value,
            PA: paInput.value,
          };
          
          fetch("https://localhost:5092/api/FormData", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Erro na requisição.');
              }
            })
            .then((result) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuário Cadastrado',
                showConfirmButton: false,
                timer: 1500
              });
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: 'Problema Verificado',
                text: 'Contate um administrador para a resolução do problema.',
                footer: '<a href="">Clique aqui e tente novamente.</a>'
              });
            });
          
    }
}
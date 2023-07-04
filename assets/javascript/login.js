const nameInput = document.querySelector("#name");

const corporateName = document.querySelector('.corporate-name');

const emailInvalido = document.querySelector('.invalidEmail')
const emailColor = document.querySelector('.emailColor');
const emailInput = document.querySelector('.emailInput');

const cellphoneInput = document.querySelector('.cellphone');
const invalidCell = document.querySelector('.invalidCell');
const cellphoneColor = document.querySelector('.cellphoneColor')

let validLoginT = false;
let validCPFT = false;
let validEmailT = false;
let validEmailConfirmT = false;
let validCell = false;

function alternLoginButton(){
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
}

function checkName(){
nameInput.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-zA-Z ^~´`óòõãáàéèê]';
    if (char.match(pattern)) {
      return true;
  }
}
//BlOQUEIO CARACTERES ESPECIAIS E NUMEROS - INPUTNOME

//Validador Nome
const colorName = document.querySelector('.name-color');
const invalidName = document.querySelector('.invalidName')

nameInput.addEventListener('keyup', () => {
  if(nameInput.value.length < 7){
    colorName.setAttribute('style', 'color: red;')
    nameInput.setAttribute('style', 'color: red;')
    invalidName.setAttribute('style', 'display: block;')
    validLoginT = false;
  }
  else{
    colorName.setAttribute('style', 'color: green;')
    nameInput.setAttribute('style', 'color: black;')
    invalidName.setAttribute('style', 'display: none;')
    validLoginT = true;
  }
})
//Validador Nome
}


function checkCPF(){
//MASCARA CPF

corporateName.addEventListener('keypress', () => {
  let cpfLength = corporateName.value.length;
  
  if(cpfLength <= 11){
    if(cpfLength === 3 || cpfLength === 7){
      corporateName.value += '.';
    }
    else if(cpfLength === 11){
      corporateName.value += '-'
    }
  }

})
//MASCARA CPF

//Validador CPF
const cpfColor = document.querySelector('.cpf-color');
const cpfInput = document.querySelector('#cpf')
const invalidCPF = document.querySelector('.invalidCPF');

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  var soma = 0;
  var resto;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf[i - 1]) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf[9])) {
    return false;
  }

  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(cpf[j - 1]) * (12 - j);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf[10])) {
    return false;
  }

  return true;
}

cpfInput.addEventListener('input', function() {
  var cpf = this.value;

  if (validarCPF(cpf)) {
    invalidCPF.setAttribute('style', 'display: none;')
    cpfColor.setAttribute('style', 'color: green;')
    cpfInput.setAttribute('style', 'color: black;')
    validCPFT = true;
  } else {
    invalidCPF.setAttribute('style', 'display: block;')
    cpfColor.setAttribute('style', 'color: red;')
    cpfInput.setAttribute('style', 'color: red;')
    validCPFT = false;
  }
});
//Validador CPF
}

function checkEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=3) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        emailInvalido.setAttribute('style', 'display: none;')
        emailColor.setAttribute('style', 'color: green;')
        emailInput.setAttribute('style', 'color: black;')
        validEmailT = true;
  }
  else{
    emailInvalido.setAttribute('style', 'display: block;')
    emailColor.setAttribute('style', 'color: red;')
    emailInput.setAttribute('style', 'color: red;')
    validEmailT = false;
  }
  }

function checkEmailConfirm(){
  const confirmaInput = document.querySelector('.email-confirm')
  const invalidEmail = document.querySelector('.invalidConfirmEmail');
  const confirmaIcon = document.querySelector('.confirmColor');

  confirmaInput.addEventListener('keyup', () => {
    if(confirmaInput.value != emailInput.value){
      emailColor.setAttribute('style', 'color: red;')
      emailInput.setAttribute('style', 'color: red;')
      confirmaIcon.setAttribute('style', 'color: red;')
      confirmaInput.setAttribute('style', 'color: red;')
      validEmailConfirmT = false;
      invalidEmail.setAttribute('style', 'display: block;')
    }
    else{
      emailColor.setAttribute('style', 'color: green;')
      emailInput.setAttribute('style', 'color: black;')
      confirmaIcon.setAttribute('style', 'color: green;')
      confirmaInput.setAttribute('style', 'color: black;')
      validEmailConfirmT = true;
      invalidEmail.setAttribute('style', 'display: none;')
    }
  })
}

function checkCell(input) {
  // Remove tudo que não for número
  var telefone = input.value.replace(/\D/g, '');
  
  // Formata o telefone com a máscara
  if (telefone.length >= 10) {
    invalidCell.setAttribute('style', 'display: none;');
    cellphoneInput.setAttribute('style', 'color: black;')
    cellphoneColor.setAttribute('style', 'color: green;')
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    validCell = true;
  } else {
    telefone = telefone.replace(/(\d{5})(\d{4})/, '$1-$2');
    invalidCell.setAttribute('style', 'display: block;');
    cellphoneInput.setAttribute('style', 'color: red;')
    cellphoneColor.setAttribute('style', 'color: red;')
    validCell = false;
  }
  
  // Atualiza o valor do campo de entrada
  input.value = telefone;
}

function cadastrar(event){
  event.preventDefault()

  const btnCadastro = document.querySelector('.btn')

  if(validLoginT && validEmailT && validEmailConfirmT && validCPFT && validCell == true){

    const data = {
      Nome: nameInput.value,
      Email: emailInput.value,
      Cell: cellphoneInput.value,
    }

    fetch("https://localhost:7232/Categorias", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Usuário Cadastrado',
        text: 'As suas informações foram enviadas para a equipe de tecnologia da empresa para serem cadastradas.',
        footer: 'Informações de acesso serão disponibilizadas via e-mail.',
    })
    })
    .catch((error) => {
      Swal.fire({
      icon: 'error',
      title: 'Problema Verificado',
      text: 'Contate um administrador para a resolução do problema.',
      footer: '<a href="">Clique aqui e tente novamente.</a>'
    })
    });
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Problema Verificado',
      text: 'As informações não são válidas, verifique os campos e tente novamente.',
      footer: '<a href="">Clique aqui e tente novamente.</a>'
    })
  }
}
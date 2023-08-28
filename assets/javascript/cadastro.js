const nomeInput = document.querySelector('#nome-input');
const select = document.querySelector('#setor');
const ramalInput = document.querySelector('#ramal-input');
const emailInput = document.querySelector('#email-input');
const telefoneInput = document.querySelector('#telefone-input');
const pa = document.querySelector('#pa')


// Adiciona o evento de input ao elemento
telefoneInput.addEventListener('input', formatarTelefone);

function formatarTelefone() {
  // Remove todos os caracteres não numéricos
  const numeroTelefone = telefoneInput.value.replace(/\D/g, '');

  if (numeroTelefone.length >= 10) {
    // Formata o número de telefone
    const numeroFormatado = `(${numeroTelefone.substring(0, 2)}) ${numeroTelefone.substring(2, 7)}-${numeroTelefone.substring(7, 11)}`;

    // Define o valor formatado no campo de input
    telefoneInput.value = numeroFormatado;
  }
}

select.addEventListener('change', () => {
  console.log(select.value)
})

pa.addEventListener('change', () => {
  console.log(pa.value)
})

function cadastrar() {
  const data = {
    Nome: nomeInput.value,
    Email: emailInput.value,
    Setor: select.value,
    Ramal: ramalInput.value,
    Cell: telefoneInput.value,
    PA: pa.value
  };

  fetch("https://192.168.32.10:5092/api/FormData", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Algo deu errado',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuário Cadastrado',
        showConfirmButton: false,
        timer: 1500
      });
    });

}
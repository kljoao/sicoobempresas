const stopAni = document.querySelectorAll('.stop-thing');

function stopAnimation(event){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este recurso ainda não está disponível!',
      })
    event.preventDefault();
}

stopAni.forEach((item) => {
  item.addEventListener('click', stopAnimation)
})
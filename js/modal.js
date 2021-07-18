// Pegando o modal
const modal = document.getElementById("modal");

// Pegando a imagem e inserindo dentro do modal e adicionando o texto alternativo na legenda
const photo = document.getElementById("photo");
const modalPhoto = document.getElementById("modal-photo");
const description = document.getElementById("description");

photo.onclick = function(){
  modal.style.display = "block";
  modalPhoto.src = this.src;
  description.innerHTML = this.alt;
}

// Span sendo o botão de fechar
const span = document.getElementsByClassName("close")[0];

// Função de fechar o modal
span.onclick = function() {
  modal.style.display = "none";
}

//função que permite climar fora da imagem para fechar, sem precisar clicar no X
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
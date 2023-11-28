// Função para obter a hora atual
function getHoraAtual() {
  return new Date().getHours();
}

// Função para atualizar a hora do dia
function atualizarHoraDoDia() {
  let horaDoDia = `Agora são ${getHoraAtual()} horas. `;
  document.querySelector(".hour_of_day").innerText = horaDoDia;
}

// Função para atualizar o plano de fundo e a imagem com base na hora atual
function atualizarBackgroundEImagem() {
  let agora = getHoraAtual();
  let backgroundAtual = document.getElementById("contentArea");
  let img = document.querySelector(".image");

  if (agora >= 6 && agora < 12) {
    backgroundAtual.className = "morning";
  } else if (agora < 18) {
    img.src = "../assets/img/Tarde.webp";
    backgroundAtual.className = "afternoon";
  } else {
    img.src = "../assets/img/noite.jpg";
    backgroundAtual.className = "night";
  }
}

// Chamar as funções
atualizarHoraDoDia();
atualizarBackgroundEImagem();

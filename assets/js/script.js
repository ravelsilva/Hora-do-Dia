let data = new Date();
let agora = data.getHours();

let horaDoDia = `Agora são ${agora} horas. `;

let hora = document.querySelector(".hour_of_day");
let img = document.querySelector(".image");

hora.innerText = horaDoDia;

img;

function horaAtual() {
  let backgroundAtual = document.getElementById("contentArea");

  if (agora >= 6 && agora < 12) {
    backgroundAtual.classList.remove("night");
    backgroundAtual.classList.add("morning");
  } else if (agora < 18) {
    img.src = "../assets/img/Tarde.webp";
    backgroundAtual.classList.remove("morning");
    backgroundAtual.classList.add("afternoon");
  } else {
    img.src = "../assets/img/noite.jpg";
    backgroundAtual.classList.remove("afternoon");
    backgroundAtual.classList.add("night");
  }
  console.log(agora);
}
horaAtual();

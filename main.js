// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi
const image = document.getElementById("lightbulb");
const button = document.getElementById("on-off");

//valori di default
image.src = "./img/white_lamp.png";
button.append("Accendi");

button.addEventListener("click", () => {
  if (button.textContent.includes("Accendi")) {
    button.textContent = "Spegni";
    image.src = "./img/yellow_lamp.png";
  } else {
    button.textContent = "Accendi";
    image.src = "./img/white_lamp.png";
  }
});

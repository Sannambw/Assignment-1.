
/* Const betyder att listan på gåtor är desamma och upprepas varje gång*/
const songs = ["Vad har ett huvud, en fot men inga ben?", "Vilket ord blir kortare när du lägger till två bokstäver?", "Vad kan resa världen runt utan att lämna sin plats?", "Vilket djur går på fyra ben på morgonen, två ben på dagen och tre ben på kvällen?", "Vad kan du fånga men inte kasta?"];
/* Här berättar den att den ska hitta HTML Id som heter Gåtor för att kunna publicera på sidan*/
const list = document.getElementById("Gator");
let index = 0;
/*När alla gåtor har visats, tas listan bort och börjar om från början när man klicka på knappen igen*/
const button = document.getElementById("showButton");
/* I funktionen nedan förklarar den att
- För varje gång man klickar på knappen kommer de upp en ny gåta*/
button.addEventListener("click", function() {
  if (index < songs.length) {
    const li = document.createElement("li");
    li.textContent = songs[index];
    list.appendChild(li);
  /* Betyder att de visas en gåta till när man klickar på knappen */
    index++;
    /* Här berättar den att om det inte finns några gåtor kvar nollställs den och börjar om vid nästa klick*/
  } else {
    /* Här rensas hela innehållet och listan börjar om och den behövs för att
    när du klickar på knappen ska inte listan fyllas på med gamla gåtor */
    list.innerHTML = "";
    index = 0; /* Nollställer listan så den börjar om när den är slut*/
  }
});

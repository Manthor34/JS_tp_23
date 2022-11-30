let citations = [
    ["Amonbofis", `"Pas d'pierre, pas d'construction. Pas d'construction, pas d'palais. Pas d'palais... pas d'palais."`],
    ["Nexusis", `"J'voulais dire « Bande de chacals, vous allez crever comme des chacals ». Mais ça faisait deux fois « chacals »... Quoi, on dit des « chacaux » ?"`],
    ["Caius Céplus", `"Oh ! Cette nuit j'ai fait un rêve, je gagnais 1 million de sesterces... Et avec je m'achetais une paire de chaussure, trop grande et puis moche en plus !"`],
    ["Noël Flantier", `"Joyeux Noël."`]
    ["Hubert Bonnisseur de la Bath ", `"Enfin ça fait un peu Jacques a dit a dit pas de charcuterie !"`]
]


var buttonSelector = document.querySelector("button");
var pSelector = document.querySelector("p");
var hSelector = document.querySelector("h3");

var previousCitation = null
var actualCitation = null

buttonSelector.addEventListener("click", function (event) {
    var tamp = previousCitation 
        
    do previousCitation = foundCitation()
    while(tamp == previousCitation)
    
    displayCitation(previousCitation)
});


function displayCitation(actualCitation) {
  
  hSelector.textContent = `${citations[actualCitation][0]}`
  
  pSelector.textContent = `${citations[actualCitation][1]}`;
  
}

function foundCitation() {
    random = Math.floor(Math.random() * citations.length);
    return random
}
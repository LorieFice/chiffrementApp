//var mot = prompt("Votre mot").toUpperCase();
//var clé = prompt("Votre clé").toUpperCase();
var mot = document.getElementById('mot');
var clé = document.getElementById('clé');
var texte = document.getElementById('texte');
var compteur1 = 0;
var compteur2 = 0;
var buttonEffacer1 = document.getElementById('buttonEffacer1');
var buttonEffacer2 = document.getElementById('buttonEffacer2');
var bouton1 = document.getElementById('button1');
var bouton2 = document.getElementById('button2');


bouton1.addEventListener('click', function() {
  if (mot.value != '' && clé.value != '') {
    texte.className = "alert alert-secondary";
    texte.innerHTML = codage(mot.value, clé.value);
  } else if(mot.value != '' && clé.value == '') {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Veuillez entrer une clé";
  } else if (mot.value == '' && clé.value != '') {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Veuillez entrer une phrase dans le premier champ";
  } else {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Le premier champ correspond au texte que vous voulez chiffrer, par exemple : Jambon; Le second champ correspond à la clé, par exemple : EZ; Et lorsque l'on va chiffrer Jambon avec EZ, cela devrait renvoyer un message illisbile, par exemple : Nzqés. Envoyez ce mot à un ami avec la clé EZ et il entrera Nzqés dans le premier champ et mettra EZ en clé. Et enfin il cliquera sur Déchiffrer pour révéler Jambon";
  }
})

bouton2.addEventListener('click', function() {
  if (mot.value != '' && clé.value != '') {
    texte.className = "alert alert-secondary";
    texte.innerHTML = décodage(mot.value, clé.value);
  } else if(mot.value != '' && clé.value == '') {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Veuillez entrer une clé";
  } else if (mot.value == '' && clé.value != '') {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Veuillez entrer une phrase dans le premier champ";
  } else {
    texte.className = "alert alert-danger";
    texte.innerHTML = "Le premier champ correspond au texte que vous voulez chiffrer, par exemple : Jambon; Le second champ correspond à la clé, par exemple : EZ; Et lorsque l'on va chiffrer Jambon avec EZ, cela devrait renvoyer : Nzqés. Envoyer ce mot à un ami avec la clé EZ et il entrera Nzqés. dans le premier champ et mettra EZ en clé. Et enfin il cliquera sur Déchiffrer pour révéler Jambon";
  }
})

mot.addEventListener('keydown', function() {
  if (mot.value == "") {
    texte.innerHTML = "";
    texte.className = "alert alert-secondary.d-none";
  }
})

clé.addEventListener('keydown', function() {
  if (clé.value == "") {
    texte.innerHTML = "";
    texte.className = "alert alert-secondary.d-none";
  }
})

buttonEffacer1.addEventListener('click', function() {
    mot.value = "";
    texte.innerHTML = "";
    texte.className = "alert alert-secondary.d-none";
})

buttonEffacer2.addEventListener('click', function() {
    clé.value = "";
    texte.innerHTML = "";
    texte.className = "alert alert-secondary.d-none";
})

function copyToClip() {
  if (texte.className == "alert alert-secondary") {
    const el = document.createElement('textarea');
    el.value = texte.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}


//Codé par Thibault le best

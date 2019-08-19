const lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "é", "'", "è", '"', "à", "ç", "(", ")", "î", "ù", "!", "?", ".", ",", ";", ":", "-", "+", "/", "*", "@", "=", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Ç", "#", "^", "Â", "Ê", "Î", "Ô", "Û", "Ä", "Ë", "Ï", "Ö", "Ü", "À", "Æ", "æ", "É", "È", "Œ", "œ", "Ù", "ê"];
rangeModif = 4;

function codage(mot, clé) {
  //clear();
  var modif = [];
  for (var i = 0; i < rangeModif; i++) {
    modif.push(Math.floor(Math.random() * lettres.length))
  }

  var motDécomposé = mot.split('');
  var cléDécomposée = clé.split('');
  var motEnChiffres = toNombres(motDécomposé);
  var cléEnChiffres = toNombres(cléDécomposée);
  var finAj = ajout(motEnChiffres, cléEnChiffres, true, modif);
  var motFin = backToMot(finAj);
  var modif = backToMot(modif);
  motFin = modif.concat(motFin);
  motFin.reverse();
  return motFin.join('');
}

function décodage(mot, clé) {
  var motDécomposé = mot.split('');
  var cléDécomposée = clé.split('');
  motDécomposé.reverse();

  var motEnChiffres = toNombres(motDécomposé);
  var cléEnChiffres = toNombres(cléDécomposée);
  var modif = motEnChiffres.splice(0, rangeModif);

  var finAj = ajout(motEnChiffres, cléEnChiffres, false, modif);
  var motFin = backToMot(finAj);
  return motFin.join('');
}

function clear() {
  motDécomposé = [];
  cléDécomposée = [];
  motEnChiffres = [];
  cléEnChiffres = [];
  motFinalChiffres = [];
  motFinal = [];
}

function toNombres(word) {
  var chiffres = [];
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < lettres.length; j++) {
      if (lettres[j] == word[i]) {
        chiffres.push(j);
      }
    }
  }
  return chiffres;
}

function ajout(mot, clé, condition, modif) {
  var s = [];
  if (condition) {
    for (var i = 0; i < mot.length; i++) {
      var a = (i % clé.length);
      var b = (i % modif.length);
      s.push((mot[i] + clé[a] + modif[b]) % lettres.length);
    }
  } else {
    for (var i = 0; i < mot.length; i++) {
      var a = (i % clé.length);
      var b = (i % modif.length)
      s.push(((mot[i] - clé[a])+lettres.length**2 - modif[b]) % lettres.length);
    }
  }
  return s;
}

function backToMot(word) {
  var z = [];
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < lettres.length; j++) {
      if (word[i] == j) {
        z.push(lettres[j]);
      }
    }
  }
  return z;
}

//Codé par titi le best
//Dédicace à GUIGUI qui m'a donné des idées pour améliorer ce programme <3

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [];

for (var i = 0; i < 5; i++) {

  var inputUser = prompt("Inserisci il nome di una squadra.");

  var squadra = {
    'nome': inputUser,
    'punti': 0,
    'falli': 0
  }

  squadre.push(squadra);
};
console.log(squadre);

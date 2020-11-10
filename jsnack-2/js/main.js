// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var bici = [
  {
    'nome': 'mountainbike',
    'peso': 10
  },
  {
    'nome': 'graziella',
    'peso': 25
  },
  {
    'nome': 'bmx',
    'peso': 8
  },
  {
    'nome': 'downhill',
    'peso': 15
  }
];
console.log(bici);

var biciLeggera = bici[0];
for (var i = 1; i < bici.length; i++) {

  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
};
console.log(biciLeggera);

// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.

var triangolo = {
  'base': 10,
  'altezza': 12,
  'ipotenusa': function() {
    return (this.altezza ** 2 + this.base ** 2) ** .5;
  },
  'area': function() {
    return (this.base * this.altezza) / 2;
  },
  'perimetro': function() {
    return this.base + altezza + this.ipotenusa();
  }
};
// console.log(triangolo);

var base = triangolo.base;
var altezza = triangolo.altezza;

var area = triangolo.area();
var perimetro = triangolo.perimetro();
var ipotenusa = triangolo.ipotenusa();
console.log(perimetro);
console.log(area);

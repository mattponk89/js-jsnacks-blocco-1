// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

triangolo = {
  'base': 10,
  'altezza': 15,
  'area': (this.base * this.altezza) / 2,
  'ipotenusa': undefined,
  'perimetro': undefined
}

triangolo.ipotenusa = ((( triangolo.base ** 2 ) + ( triangolo.altezza ** 2 )) ** .5);
triangolo.perimetro = triangolo.ipotenusa + triangolo.base + triangolo.altezza;

console.log('perimetro', triangolo.perimetro, 'ipotenusa', triangolo.ipotenusa)

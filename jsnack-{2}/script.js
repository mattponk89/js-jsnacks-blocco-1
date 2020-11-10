// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
$(document).ready(function () {
  var bici = [{
    'nome' : 'Graziella',
    'peso' : 10
    },
    {
    'nome' : 'Maria',
    'peso' : 14
    },
    {
    'nome' : 'Graziella',
    'peso' : 10
    },
    {
    'nome' : 'Pippo',
    'peso' : 9
    }

  ]
  var bestBici = {
    'biciLeggera' : [],
    'pesoMin' : undefined
  };
  for(var i=0; i < bici.length; i++){
    if(bestBici.pesoMin == undefined){
      bestBici.pesoMin = bici[i].peso
    } else if (bici[i].peso == bestBici.pesoMin){
      bestBici.biciLeggera.push(i)
    } else if (bici[i].peso < bestBici.pesoMin){
      bestBici.pesoMin = bici[i].peso
      bestBici.biciLeggera = [i]
    }
  }
  var boxEl = $('#box');
  if(bestBici.biciLeggera.length == 1){
    boxEl.append('<h2>Il nome della bici leggera è: ' + bici[bestBici.biciLeggera[0]].nome + ' il suo peso è di: ' + bestBici.pesoMin + '</h2>');
  } else if ( bestBici.biciLeggera.length > 1){
    for(var j = 0; j < bestBici.biciLeggera.length; j++){
      boxEl.append('<h2>Parimerito di: '+ bici[bestBici.biciLeggera[j]].nome + 'il peso di: ' + bestBici.pesoMin +'</h2>');
      console.log('più bici leggere');
    }
  }
})

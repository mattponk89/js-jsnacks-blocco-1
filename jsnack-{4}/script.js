// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0.

var squadre = [
  { 'nome': 'Juve', 'punti': 0, 'falliSubiti': 0},
  { 'nome': 'Inter', 'punti': 0, 'falliSubiti': 0},
  { 'nome': 'Milan', 'punti': 0, 'falliSubiti': 0}
];

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

function genNum(){
  return Math.floor((Math.random() * 100) + 1);
}
for(var i=0; i < squadre.length; i++){
  squadre[i].punti = genNum();
  squadre[i].falliSubiti = genNum();
  console.log('Nome: ' + squadre[i].nome + ' Punti: ' + squadre[i].punti + ' Falli Subiti: '+ squadre[i].falliSubiti)
}

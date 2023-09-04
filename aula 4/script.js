//condicionais

var jogador1 = 0;
var jogador2 = 0;
var placar = 0;

console.log(jogador1, jogador2);

if (jogador1 > 0 && jogador1 <=3){
    console.log('O jogador 1 marcou '+ jogador1);
}else if (jogador1 >=4){
    console.log('O miseravel é um genio');
}else{
    console.log('Jogador 1 ainda não marcou ponto');
}

if (jogador2 > 0){
    console.log('O jogador 2 marcou '+ jogador2);
}else{
    console.log('Jogador 2 ainda não marcou ponto');
}

//if ternário a primeira condição é verdadeira e a a segunda condição é falsa
jogador1 > 0 ? console.log('Marcou ponto'):console.log('não marcou ponto. ')

//usando o switch case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//usando o for, for se repete aaté condição ser falsa

let testarrayy = ['Indio', 'Teste', 'Lod', 'abc']

for (indice = 0; indice < testarrayy.length; indice++) {
    console.log(indice);
    console.log(testarrayy[indice]);

}

//for/in funciona como uma repetição a partir de uma propriedade funciona com objetos

let array22 = ['Eita',' Lasca', 'teste', 'chatooo'];

for(i in array22){
    console.log(i);
    console.log(array22[i]);
}

//for of funciona como uma repetição apartir de um valor não funciona de forma correta com objetos

var arrayyteste3 = ['sem', 'criatividade', 'para', 'ser', 'divertido'];
for(i of arrayyteste3){
    console.log(i);
}

//while literalmente faça enquanto uma coisa não acontece.

var a = 0;
while (a <=10){
    console.log(a);
    a++
}

//do while repete até que uma condição conteça. 

var b = 0;
do{
    b++
    console.log(b);
}while(b<10)
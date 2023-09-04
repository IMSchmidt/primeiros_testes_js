
var testevetor = ['Igor', 'Marques', 'Schmidt', 43, true, 'Brasileiro', 'Paulista'];
console.log(testevetor);
console.log('-------------------------------------------------------------');
//bora brincar com arrey ou vetor

/* o foeEch é um função que percorre o array*/
testevetor.forEach(function(item, index){console.log(index, item)});
console.log('-------------------------------------------------------------');
//adicionando item no final do array
testevetor.push(['Teste']);
testevetor.forEach(function(item, index){console.log(index, item)});
console.log('-------------------------------------------------------------');
//removendo o ultimo item da array
testevetor.pop();
testevetor.forEach(function(item, index){console.log(index, item)});
console.log('-------------------------------------------------------------');
//removendo o primeiro item
testevetor.shift();
testevetor.forEach(function(item, index){console.log(index, item)});
console.log('-------------------------------------------------------------');
//adiciona um item no começo do array
testevetor.unshift('Joselito');
testevetor.forEach(function(item, index){console.log(index, item)});
console.log('-------------------------------------------------------------');
//pegando o indice de um valor
console.log(testevetor.indexOf(43));
console.log('-------------------------------------------------------------');
//remove ou substitui um item pelo índice
testevetor.splice(0, 3);
console.log(testevetor);
console.log('-------------------------------------------------------------');
//copia parte do arrey para outro array.
var testevetor = ['Igor', 'Marques', 'Schmidt', 43, true, 'Brasileiro', 'Paulista'];
console.log(testevetor);
novoarray = testevetor.slice(0, 3);
console.log(novoarray);
console.log(testevetor);    

console.log('-------------------------------------------------------------');

//objetos

//declarando objetos

var xicara = {
    cor:'azul',
    tamanho: 'p',
    funcao: 'tomar café'
}

//deesestruturando o objeto ou seja usando suas caracteriscasem variáveis diferentes

var mesmacorxicara = xicara.cor;
var mesmotamanhodaxixxara = xicara.tamanho;
var mesmafuncaodaxicara = xicara.funcao;

console.log(xicara);
console.log(mesmacorxicara);
console.log(mesmotamanhodaxixxara);
console.log(mesmafuncaodaxicara);

//outra forma de desestruturar é pegar os obbjetos e passar para uma variavel, exemplo abaixo usa xicara novamente

var {cor, tamanho}=xicara;
console.log(cor, tamanho);  
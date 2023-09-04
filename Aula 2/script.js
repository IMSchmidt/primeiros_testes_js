console.log("Variaveis e seus tipos!")
var vOUf = false;
console.log(vOUf);
console.log(typeof(vOUf));
console.log("Viu como se faz um print na log da variavel e do tipo dela? Viu como se faz!")


//temos 2 formas de declara rvariáveis em JS

// a mais comum é o var tem escopo global ou local, se o valor inicial não for definido será tratada como null
//Exemplo de variavel com valor nulo
var indefinida;
console.log(indefinida);

console.log('-----------------------------------------------------------------');

//variavel boolean
console.log("Usando variárveis no console");
var vOUf = false;
console.log(vOUf);
console.log(typeof(vOUf));
var vOUf = true;
console.log(vOUf);
console.log(typeof(vOUf));
console.log('-------------------------------------------------------------');
//variavel numerica
console.log("Usando variárveis no console");
var vOUf = 22;
console.log(vOUf);
console.log(typeof(vOUf));
console.log('-------------------------------------------------------------');
//variavel string
console.log("Usando variárveis no console");
var vOUf = 'Texto dentro da variavel';
console.log(vOUf);
console.log(typeof(vOUf));
console.log('-------------------------------------------------------------');

console.log("Bora ver mais exemplos de variáveis");

//let escopo local de bloco, não pode ser global e pode ser nulo
let variavellet = 'Escopo local animal!';
console.log(variavellet);
console.log(typeof(variavellet));

console.log('-------------------------------------------------------------');    
/*se temos variáveis tbm temos as contantes ou const, escopo local de bloco (sei lá o que sigbifica, devo pesquisar 
    depois), o mais importante aqui é que ela não pode variar e deve ter um valor inicial, não podendo ser nulo. */
//exxemplo de uso de const
const constante = 'Teste';
console.log(constante);
console.log(typeof(constante))

console.log('-------------------------------------------------------------');  

console.log('Calculando as coisas')

var soma = 2 + 3;
var subtracao = 5 - 2;
var divisaoreal = 10 / 2;
var divisaointeira = 5 % 2;
var potenciacao = 2 ** 10;

console.log('Resultado da soma 2 + 3 = ' + soma);
console.log('Resultado da subtração 5 - 2 = ' + subtracao);
console.log('Resultado da divisão real 10 / 2 = ' + divisaoreal);
console.log('Resultado da divisão inteira 5 % 2 = ' + divisaointeira);
console.log('Resultado da potenciação 2 ** 10= ' + potenciacao );

console.log('-------------------------------------------------------------');  

console.log('Operadores relacionais');

var maiorque = 2 < 3;
var menorque = 2 < 3;
var maiorigua = 2 >= 2;
var menorigua = 3 <= 5;

console.log('2 é maior que 3 ' + maiorque);
console.log('2 é menor que 3 ' + menorque);
console.log('2 é maior ou igual a 2? ' + maiorigua);
console.log('3 é menor ou igual a 5? ' + menorigua);

console.log('-------------------------------------------------------------');

console.log('Operadores lógicos');

var usandoe = true && false;
var usandou = true || false;
console.log(usandoe);
console.log(usandou);
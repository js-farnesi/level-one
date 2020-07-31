
// Ping para divisivel por 3, pong divisivel por 5 e ping-pong divisivel por 3 e 5
for (num = 0; num <= 100; num++){
    if (num % 3 === 0 && num % 5 === 0){
        console.log(`Se número é ${num} então a mensagem é PING-PONG`);
    } else if (num % 3 === 0) {
        console.log(`Se número é ${num} então a mensagem é PING`);
    }else if (num % 5 === 0) {
        console.log(`Se número é ${num} então a mensagem é PONG`);
    }
}

// Arrow funcion

// Function com parâmetro rest - pode passar até 20 complementos
function escreverEndereco(rua, cidade, pais, ...complementos){
    for (var par in escreverEndereco){
        console.log(`O / A ${escreverEndereco(par)}`);
        console.log(rua);
    }
}

escreverEndereco('Rua Programador', 'Contagem', 'Brasil', 'Bairro do povo', 'Estado Minas Gerais', 'Apto 10', 'CEP 1000-000');

// Functino autoinvocavel - não pode esquecer do parenteses de inicio/fim e abrir/fechar parametro no final para invocar a função
(function autoExecuta(){
    console.log("Funciona");
}())

/* Pesquisar por que dá erro TypeError: (intermediate value)(...) is not a function, mas continua executando
(function autoExecutaComNome(nome) {
    console.log('Funciona', nome);
}('mesmo colocando nome'));

*/

// Função Anonima
var subtraiTresNumeros = function (a, b, c) {
    return a - b - c;
}
console.log(subtraiTresNumeros(20,3,8));

/* Mesmo se a função tivesse nome, não seria possível chama a função SomaNum por estar dentro da variável
retornando o erro somaNum is not defined */
var somaTresNumeros = function somaNum (a, b, c) {
    return a + b + c;
}
console.log(somaTresNumeros(20,3,8));
//console.log(somaNum);

/* Podemos usar funções anônimas para trabalhar o resultado de alguma função*/
function somaCallback (a, b, fnCallback){
    return fnCallback(a + b);
}
console.log(somaCallback(10,20, function(total){
    return total * 2;
}))

// Ou podemos usar uma variável para armazenar uma função que multiplica
function somaCallback (a, b, fnCallback){
    return fnCallback(a + b);
}
var multiplica = function(total){
    return total * 2;
}
console.log(somaCallback(100, 200, multiplica));


// Para definir valores padrões em funções atribua o valor no parâmetro para evitar retornar undefined
function retornaDados(nome = "Preencha o nome", idade = 18) {
    console.log(nome);
    console.log(idade);
 }
 retornaDados("Pedro",31);
 retornaDados();

 var seriesFavoritasDaAna = 
["Game of Thrones", "Breaking Bad", "House of Cards"]
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"]

var mundo = ["olá","mundo!"]
var ola = ["olá","olá"]

console.log(seriesFavoritasDaAna)
console.log(seriesFavoritasDoHeitor)
console.log(mundo)
console.log(ola)


var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];

    console.log(numerosDeLoteria)
    console.log(saiuCara)
    console.log( [[1, 2, 3], [4, 5, 6]])
    console.log(girosDeDado)
    console.log(listaDeNumeros)

[ 2, 11, 17, 32, 36, 39 ]
[ false, false, true, false ]
[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
[ 1, 6, 6, 2, 2, 4 ]
[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//Em breve mais funções disponíveis
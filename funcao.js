
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


Tente escrever umArrayVazio no terminal
var umArrayVazio = []


    Realize as seguintes consultas no terminal utilizando o console.log, para facilitar o seu entendimento nos já declaramos o array numerosDeLoteria para você:

        “[] .length”
        “numerosDeLoteria.length”
        “[4, 3].length”

var numerosDeLoteria = [22,40,12]

        console.log([] .length)
        console.log(numerosDeLoteria.length)
        console.log([4, 3].length)

0
3
2

Os arrays são muito úteis para conter vários elementos e nos ajudam a consultar quantos elementos eles contêm. Mas há outra coisa: podemos também adicionar elementos a qualquer momento, o que resolvemos usando o método push. Novamente, para adicionar um elemento a um array, devemos indicar o array seguido por um '.' e o método push com o elemento que queremos adicionar entre parenteses. Por exemplo:

var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4

Como podemos ver, o “push” adiciona um elemento à lista, o que faz com que seu tamanho aumente. Mas em que parte da lista você adiciona? No princípio? Ao final? No meio?

    Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o console.log.

    Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o console.log.

var pertences = ["espada","escudo","crossbow"]
console.log(pertences)
pertences.push ("cross")
console.log(pertences)

[ "espada", "escudo", "crossbow" ]
[ "espada", "escudo", "crossbow", "cross" ]

    Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

    Exemplo:

    var umArray = [1, 2, 3];
    var outroArray = [4, 5];

    mover(umArray, outroArray);

    umArray //deveria ser [1, 2]
    outroArray //deveria ser [4, 5, 3]

Você tem dúvidas sobre como remover e adicionar elementos? Vamos rever: “push”: método de arrays que adiciona o elemento de parâmetro ao final do array “pop”: método de arrays que remove o último elemento Lembre-se que vc pode utilizar mais de um método na mesma linha.

function mover (umArray,outroArray){
  var num = umArray.pop();
  outroArray.push(num);
}


Outro método útil dos arrays é o “indexOf”, que nos diz em que posição um elemento está dentro do array:

var meuArray = ["a", "la", "grande", "le", "puse", "cuca"]
var posicao = meuArray.indexOf("grande"); //devolve 2

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
var umDia = diasDeTrabalho.indexOf ("segunda-feira"); // retorna 0

Como você pode ver, a “curiosidade” do método "indexOf" é que ele sempre retorna um número à menos que o esperado. Será que os criadores de JavaScript estavam errados? o.O

Não, é que em JavaScript, como em muitas linguagens, as posições das matrizes começam em 0: o primeiro elemento é a posição 0, a segunda é a posição 1, a terceira 2 e assim por diante.

    E o que acontece se você passar por parâmetro para indexOf um elemento que não tem? Descubra você mesmo!

    Tente o seguinte no console:

var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
console.log(diasDeTrabalho.indexOf ("osvaldo"))

-1


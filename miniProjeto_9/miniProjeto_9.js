/*Neste miniprojeto iremos montar uma função
que exibe a quantidade de asteriscos que a 
linha possui.
*/
var qtd = Number(prompt("Digite a quantidade de linhas: "));
printLinhas(qtd);

function printLinhas(ln) {
    for (var j = 1; j <= ln; j++) {
        var soma = '';
        for (var i = 0; i < j; i++) {
            soma += '*';
        }
        console.log(soma);
    }
}

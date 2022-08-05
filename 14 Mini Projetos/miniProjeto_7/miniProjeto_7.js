/*Neste Miniprojeto 7, vamos criar uma função que
leia um número e retorne a somatória de múltiplos
de 3 e de 5.
*/

var num = prompt("Digite o limite de numeros para a operação: ");

console.log("A soma dos Números Multiplos de 3 e de 5 é = ", multiplos(num));

function multiplos(num) {
    var mult3 = 0;
    var mult5 = 0;
    for (j = 0; j <= num; j++) {
        if (j % 3 === 0)
            mult3 += j;
        if (j % 5 === 0)
            mult5 += j;
    }
    return (mult3 + mult5);
}

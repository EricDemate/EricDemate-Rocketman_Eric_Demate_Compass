/*Neste Miniprojeto 5, vamos montar um 
programa que leia um número e retorne 
dizendo se o mesmo é par ou ímpar.  
 */

let num = parseInt(prompt("Digite um número: "));
console.log(impar_par(num));

function impar_par(num) {
    for (let j = 0; j <= num; j++) {
        if (j % 2 == 0)
            console.log("O número ", j, " é PAR");
        else
            console.log("O número ", j, " é IMPAR");
    }

}


/*Neste miniprojeto iremos montar uma função
que recebe um número como limite e retorna os números 
primos de 0 ao número digitado.
*/
// Neste exercicio foi nescessario ajuda do codigo https://github.com/RENANFPS/Rocketman_Renan_Mattos_Compass/blob/Develop/Mini%20Projetos/miniProjeto10.js

var num = Number(prompt("Digite um número a livre escolha: "));

numeroPrimo(num);

function numeroPrimo(lim) {
    for (var i = 2; i <= lim; i++) {
        var primo = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) console.log(i);
    }
}
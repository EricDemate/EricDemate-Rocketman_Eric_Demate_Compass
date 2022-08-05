/*Neste miniprojeto 3 iremos fazer um exercício
de FizzBuzz, nele se o valor for divisível 3 
retornará o Fizz e se o valor for divisível por 5, será 
apresentado Buzz. Porem se o valor for divisível tanto
para 3 quanto para 5 deverá apresentar o retorno como FizzBuzz! 
*/

var n1 = (prompt("Digite o valor do numero que será analizado: "));

function FizzBuzz(res) {
    if (res % 3 === 0 && res % 5 === 0)
        return "FizzBuzz";
    if (res % 3 === 0)
        return "Fizz";
    if (res % 5 === 0)
        return "Buzz";
    else return "Não é divisivel 3 e nem por 5!";
}

if ((Number.isInteger(Number(n1))) === 'false') {
    console.log("Não é um numero");
}
else console.log(FizzBuzz(n1));


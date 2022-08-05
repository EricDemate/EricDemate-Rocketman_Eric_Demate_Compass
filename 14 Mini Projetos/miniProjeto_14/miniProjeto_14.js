/*Neste miniprojeto iremos criar um array de objetos 
com faixa de preço para que ele possa ser utilizado 
em um site semelhante ao ML.

Este miniprojeto foi realizado com o auxilio 
https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=12489s

*/

let faixas = [
    { tooltip: 'ate R$500', minimo: 0, maximo: 500 },
    { tooltip: 'de R$500 a R$1000', minimo: 500, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 }
];


console.log(faixas);

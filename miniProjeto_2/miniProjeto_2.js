/*Neste Miniprojeto 2 teremos uma função 
que recebe 2 números e retorna dizendo qual o maior 
valor entre os dois. 
*/

var n1 = parseInt(prompt("Digite o valor do Nº 1: "));
var n2 = parseInt(prompt("Digite o valor do Nº 2: "));
//let n1 = 10;
//let n2 = 15;
let resultado = val_Maior(n1,n2);

function val_Maior(n1,n2){
    if(n1>n2)
        return n1;
            if(n1==n2)
                return "Números Iguais";
        else return n2;      
}
console.log(resultado);
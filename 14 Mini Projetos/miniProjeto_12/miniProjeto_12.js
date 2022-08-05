/*Neste miniprojeto iremos comparar dois objetos 
criados.
Este miniprojeto foi realizado com auxílio de 
https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=11611s
*/

function end(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

var end1 = new end('a','b','c');
var end2 = new end('a','b','c');

function saoIguais(end1,endend2){
    
    return end1.rua === end2.rua &&
            end1.cidade === end2.cidade &&
            end1.cep === end2.cep
        }

        console.log(saoIguais(end1,end2)); //informa que ambos são iguais

function temEnderecoMemoriaIguais(end1,end2){
    return end1 === end2;

}

    console.log(temEnderecoMemoriaIguais(end1,end2)); //informa que os locais são diferentes na memoria
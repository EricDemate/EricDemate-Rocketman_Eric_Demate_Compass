/*Neste miniprojeto iremos criar um objeto 
que deverá conter:

Rua:
Cidade:
Cep:
function exibirEndereco(endereco)
*/

//Busquei ajuda no video https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=11408s

var end = {
    rua: prompt("Digite a sua rua: "),
    cidade: prompt("Digite a sua Cidade: "),
    cep: prompt("Digite seu CEP:"),
};

function exibirEndereco(end) {
    for(var i in end)
    console.log(i,end[i]);
}
exibirEndereco(end);
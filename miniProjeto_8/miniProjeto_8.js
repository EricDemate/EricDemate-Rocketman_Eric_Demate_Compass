/*Neste miniprojeto vamos montar uma função na qual 
será recebido um array com as notas e será retornado 
o valor da média atribuído a uma nota escolar do aluno.
*/

/*Notas:
0-50:F
60-69:D
70-79:C
80-89:B
90-100:A
*/
//referência de ajuda: https://devenum.com/3-methods-to-take-array-input-from-user-in-javascript/


var notas = [];

var qtd = Number(prompt("Digite a quantidade de Notas: "));

for (var j = 0; j < qtd; j++) {
    notas[j] = prompt("Digite a " + (j + 1) + " nota do aluno com 2 digitos: ");
}


function media(notas) {
    var somatoria = 0;
    for (var i = 0; i < notas.length; i++) {
        somatoria += parseInt(notas[i]);
    }
    return somatoria / (notas.length);
}

function notaFinal(notas) {
    var valor = media(notas);
    if (valor >= 90 && valor <= 100)
    return "A média de sua nota foi "+ media(notas)+"\nPortanto você tirou um 'A'";
    if (valor >= 80 && valor < 90)
    return "A média de sua nota foi "+ media(notas)+"\nPortanto você tirou um 'B'";
    if (valor >= 70 && valor < 80)
    return "A média de sua nota foi "+ media(notas)+"\nPortanto você tirou um 'C'";
    if (valor >= 60 && valor < 70)
    return "A média de sua nota foi "+ media(notas)+"\nPortanto você tirou um 'D'";
    if (valor < 60)
    return "A média de sua nota foi "+ media(notas)+"\nPortanto você tirou um 'F'";
    if (valor > 100)
        return "Valor incorreto!";

}
 
console.log(notaFinal(notas));
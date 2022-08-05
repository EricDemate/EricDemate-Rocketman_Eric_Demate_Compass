/*Neste Miniprojeto iremos 
inicialmente inverter as variaveis 
cor_A com a cor_B 
*/

let cor_A = "Amarelo";
let cor_B = "Verde";
let cor_C = null;
console.log("As cores iniciais são: \ncor_A: ",cor_A,"\ncor_B: ",cor_B);

cor_C = cor_A;
cor_A = cor_B;
cor_B = cor_C;

console.log("Agora após a inversão as respectivas cores serão: ","\ncor_A: ",cor_A,"\ncor_B: ",cor_B);

console.log("\n\n----FIM----");


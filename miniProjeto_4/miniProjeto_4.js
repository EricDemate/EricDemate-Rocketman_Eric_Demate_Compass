/*Neste Miniprojeto 4, vamos montar um mini 
radar que verificará a velocidade e de acordo
 com o excesso de velocidade será aplicada uma 
 multa
 Velocidade Max: 70 km/h
 A cada 5 km/h em excesso será adicionado 1 ponto 
 na carteira.
 Após 12 pontos a carteira será suspensa. 
 */

let vel = parseInt(prompt("Digite a velocidade registrada: "));
let pontos,excesso = 0;

    if (vel <= 70 )
        console.log("Velocidade esta abaixo da Max permitida!");
     else { (vel > 70)
        excesso = (vel-70); 
        pontos = Math.floor((vel-70)/5);
            if (pontos > 12) 
            console.log("A sua carteira foi suspensa!"); 
            else {console.log("Você teve um excesso de velocidade em ",excesso," KM/h além dos 70 KM/h Max");
                 console.log("Você será altuado em ",pontos," pontos.");
            }}
       
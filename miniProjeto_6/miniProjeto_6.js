/*Neste Miniprojeto 6, vamos montar um 
programa que leia um objeto e retorne 
somente as propriedades de uma string que está
neste objeto.
*/

let carros = {
    marca: "Nissan",
    ano: 2016,
    modelo: "Sentra flex fuel SL",
    local_fab: "Mexico"
}

propriedades(carros);

function propriedades(caracteristicas) {
    for (prop in caracteristicas)
        if (typeof caracteristicas[prop] == "string")
            console.log(prop, caracteristicas[prop])
}




export default class Calculadora {

    static soma(a, b) { //realiza operações de soma
        var total = (a + b)
        return parseFloat(total.toFixed(2))
    }

    static sub(a, b) { //realiza operações de subtração
        var total = (a - b)
        return parseFloat(total.toFixed(2))
    }

    static mult(a, b) { //realiza operações de multiplicação
        var total = (a * b)
        return parseFloat(total.toFixed(2))
    }
    
    static div(a, b) { //realiza operações de divisão
        var total = (a / b)
        return parseFloat(total.toFixed(2))
    }

    static expow(a, b) { //realiza operações exponenciais
        var total = Math.pow(a , b)
        return parseFloat(total.toFixed(2)) 
    }
    
    static percentil(a, b) { //realiza operações de medidas divididas em até 100 partes
        var total = ((a/100)*b)
        return parseFloat(total.toFixed(2))
    }

    static permil(a, b) { //realiza operações de medidas divididas em até 1000 partes
        var total = ((a/1000)*b)
        return parseFloat(total.toFixed(2))
    }
    static raiz(a) { //realiza operações raiz quadrada de um número
        var total = Math.sqrt(a)
        return parseFloat(total.toFixed(2))
    }
}
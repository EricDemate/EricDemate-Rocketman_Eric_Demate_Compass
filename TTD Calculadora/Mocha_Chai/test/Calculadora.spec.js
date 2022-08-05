import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Teste de Soma', () => {
    it('1- Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.equal(9)
    })
    it('2- Deve somar -4 e 6 resultando em -2', () => {
        let resultado = Calculadora.soma(-4, 6)
        expect(resultado).to.be.equal(2)
    })
    it('3- Deve somar -9 e -5 resultando em 4', () => {
        let resultado = Calculadora.soma(-9, -5)
        expect(resultado).to.be.equal(-14)
    })
    it('4- Deve somar 2,4 e 5,8 resultando em 8,2', () => {
        let resultado = Calculadora.soma(2.4, 5.8)
        expect(resultado).to.be.equal(8.2)
    })
    it('5- Deve somar .4 e 8 resultando em 12', () => {
        let resultado = Calculadora.soma(.4, 8)
        expect(resultado).to.be.equal(12)
    })
    it('6- Deve somar 6 e 4 NÃO resultando em 11', () => {
        let resultado = Calculadora.soma(6, 4)
        expect(resultado).and.not.equals(11)
    })
})

describe('Teste de Subtração', () => {
    it('1- Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.equal(-1)
    })
    it('2- Deve subtrair -8 e 6 resultando em -14', () => {
        let resultado = Calculadora.sub(-8, 6)
        expect(resultado).to.be.equal(-14)
    })
    it('3- Deve subtrair -5 e -9 resultando em 4', () => {
        let resultado = Calculadora.sub(-5, -9)
        expect(resultado).to.be.equal(4)
    })
    it('4- Deve subtrair 5,8 e 9,3 resultando em -3,5', () => {
        let resultado = Calculadora.sub(5.8, 9.3)
        expect(resultado).to.be.equal(-3.5)
    })
    it('5- Deve subtrair 9 e 3 NÃO resultando em 7', () => {
        let resultado = Calculadora.sub(9, 3)
        expect(resultado).and.not.equals(7)
    })
})

describe('Teste de Multiplicação', () => {
    it('1- Deve multiplicar 3 e 4 resultando em 12', () => {
        let resultado = Calculadora.mult(3, 4)
        expect(resultado).to.be.equal(12)
    })
    it('2- Deve multiplicar -7 e 5 resultando em -35', () => {
        let resultado = Calculadora.mult(-7, 5)
        expect(resultado).to.be.equal(-35)
    })
    it('3- Deve multiplicar -8 e -2 resultando em 16', () => {
        let resultado = Calculadora.mult(-8, -2)
        expect(resultado).to.be.equal(16)
    })
    it('4- Deve multiplicar 6,4 e 3 resultando em 19,2', () => {
        let resultado = Calculadora.mult(6.4, 3)
        expect(resultado).to.be.equal(19.2)
    })
    it('5- Deve multiplicar 9 e 3 NÃO resultando em 7', () => {
        let resultado = Calculadora.sub(9, 3)
        expect(resultado).and.not.equals(7)
    })
})

describe('Teste de Divisão', () => {
    it('1- Deve dividir 6 e 2 resultando em 3', () => {
        let resultado = Calculadora.div(6, 2)
        expect(resultado).to.be.equal(3)
    })
    it('2- Deve dividir -7 e 5 resultando em -1,4', () => {
        let resultado = Calculadora.div(-7, 5)
        expect(resultado).to.be.equal(-1.4)
    })
    it('3- Deve dividir -5 e -3 resultando em 1,67', () => {
        let resultado = Calculadora.div(-5, -3)
        expect(resultado).to.be.equal(1.67)
    })
    it('4- Deve dividir 6,4 e 3 resultando em 19,2', () => {
        let resultado = Calculadora.div(6.4, 3)
        expect(resultado).to.be.equal(2.13)
    })
    it('5- Deve dividir 9 e 3 NÃO resultando em 7', () => {
        let resultado = Calculadora.div(9, 3)
        expect(resultado).and.not.equals(7)
    })
})

describe('Teste de Função Exponencial', () => {
    it('1- Deve ter base 6 elevada à potência 2 resultando em 36', () => {
        let resultado = Calculadora.expow(6, 2)
        expect(resultado).to.be.equal(36)
    })
    it('2- Deve ter base -7 elevada à potência 5 resultando em -16807', () => {
        let resultado = Calculadora.expow(-7, 5)
        expect(resultado).to.be.equal(-16807)
    })
    it('3- Deve ter base -2 elevada à potência -2 resultando em 0,25', () => {
        let resultado = Calculadora.expow(-2, -2)
        expect(resultado).to.be.equal(0.25)
    })
    it('4- Deve ter base 6,4 elevada à potência 3 resultando em 262,14', () => {
        let resultado = Calculadora.expow(6.4, 3)
        expect(resultado).to.be.equal(262.14)
    })
    it('5- Deve ter base 7 elevada à potência ,2 resultando em 49', () => {
        let resultado = Calculadora.expow(6, .2)
        expect(resultado).to.be.equal(49)
    })
})

describe('Teste de Função Percentil', () => {
    it('1- Deve ter 6% sobre o valor de 2 resultando em 0,12', () => {
        let resultado = Calculadora.percentil(6, 2)
        expect(resultado).to.be.equal(0.12)
    })
    it('2- Deve ter -10% sobre o valor de 50 resultando em -5', () => {
        let resultado = Calculadora.percentil(-10, 50)
        expect(resultado).to.be.equal(-5)
    })
    it('3- Deve ter -50% sobre o valor de -20 resultando em 10', () => {
        let resultado = Calculadora.percentil(-50, -20)
        expect(resultado).to.be.equal(10)
    })
    it('4- Deve ter 90% sobre o valor de 22 resultando em 19,8', () => {
        let resultado = Calculadora.percentil(90, 22)
        expect(resultado).to.be.equal(19.8)
    })

})

describe('Teste de Função PerMille', () => {
    it('1- Deve ter 6‰ sobre o valor de 2 resultando em 0,01', () => {
        let resultado = Calculadora.permil(6, 2)
        expect(resultado).to.be.equal(0.01)
    })
    it('2- Deve ter -10‰ sobre o valor de 50 resultando em -0,5', () => {
        let resultado = Calculadora.permil(-10, 50)
        expect(resultado).to.be.equal(-0.5)
    })
    it('3- Deve ter -50‰ sobre o valor de -20 resultando em 1', () => {
        let resultado = Calculadora.permil(-50, -20)
        expect(resultado).to.be.equal(1)
    })
    it('4- Deve ter 90‰ sobre o valor de 22 resultando em 1,98', () => {
        let resultado = Calculadora.permil(90, 22)
        expect(resultado).to.be.equal(1.98)
    })

})

describe('Teste de Raiz Quadrada', () => {
    it('1- Raiz de 100 resultando em 10', () => {
        let resultado = Calculadora.raiz(100)
        expect(resultado).to.be.equal(10)
    })
    it('1- Raiz de 6,7 resultando em 2,59', () => {
        let resultado = Calculadora.raiz(6.7)
        expect(resultado).to.be.equal(2.59)
    })
    it('1- Raiz de -20 NÃO resultando em 1', () => {
        let resultado = Calculadora.raiz(-20)
        expect(resultado).and.not.equals(1)
    })
})
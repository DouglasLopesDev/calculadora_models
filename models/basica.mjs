import OperacoesMatematicas from '../classes/operacoes_matematicas.mjs'

class CalculadoraBasica extends OperacoesMatematicas {
    potencia = (base, coeficiente) => {

        let fatores = []
        for (let i=0; i < coeficiente; i++) {
            fatores.push(base)
        } 
        return this.multiplicar(fatores)
    }
}

export default new CalculadoraBasica()
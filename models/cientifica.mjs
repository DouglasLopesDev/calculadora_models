import OperacoesMatematicas from '../classes/operacoes_matematicas.mjs'

class CalculadoraCientifica extends OperacoesMatematicas {

    raiz = (x) => Math.sqrt(x)

    porcentage = (percentual, valor) => (valor / 100) * percentual

}

export default new CalculadoraCientifica()


export default class OperacoesMatematicas {
  
  somar = ([...numbers]) => numbers.reduce((acc, current) => acc + current);

  subtrair = ([...numbers]) => numbers.reduce((acc, current) => acc - current);

  multiplicar = ([...numbers]) => numbers.reduce((acc, current) => acc * current);

  dividir = ([...numbers]) => numbers.reduce((acc, current) => acc / current);
}

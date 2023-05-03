import cientifica from './models/cientifica.mjs'
import basica from './models/basica.mjs'

console.log(basica.somar([938, 134]))
console.log(basica.subtrair([841, 392]))
console.log(basica.dividir([450, 50]))
console.log(basica.multiplicar([32, 3]))
console.log(basica.potencia(22, 2))
console.log(cientifica.raiz(9))
console.log(cientifica.porcentage(80, 525))

// 938 + 134 = 1072         param(a,b)
// 841 - 392 = 449          param(a,b)
// 450 / 50 = 9             param(a,b)
// 32 * 3 = 96              param(a,b)
// 22² = 484                param(a)
// raiz quadrada de 9 = 3   param(a)
// 80% de 525 = 420         param(a,b)

function verificarParImpar(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        return "Por favor, ingresa un valor numérico.";
    }

    
    if (numero % 2 === 0) {
        return `El número ${numero} es PAR.`;
    } else {
        return `El número ${numero} es IMPAR.`;
    }
}


const miNumero1 = 15;
const miNumero2 = 22;

console.log(verificarParImpar(miNumero1));
console.log(verificarParImpar(miNumero2));
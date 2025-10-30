const limite = 30;
const numerosPares = [];
const numerosImpares = [];

for (let i = 1; i <= limite; i++) {
    
    if (i % 2 === 0) {
        
        numerosPares.push(i);
    } else {
        
        numerosImpares.push(i);
    }
}

console.log(`--- Listado de Números del 1 al ${limite} ---`);
console.log(`Números Pares:`);
console.log(numerosPares.join(', ')); 

console.log(`\nNúmeros Impares:`);
console.log(numerosImpares.join(', '));
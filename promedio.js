
const nombreEstudiante = "Jhostyn";
const notaMateria1 = 4.0;
const notaMateria2 = 3.2;
const notaMateria3 = 4.5;
const notaMinimaAprobacion = 3.5;

const promedio = (notaMateria1 + notaMateria2 + notaMateria3) / 3;


const aprobado = promedio >= notaMinimaAprobacion;


console.log(`Resultados de las notas`);
console.log(`Nombre del estudiante: ${nombreEstudiante}`);
console.log(`Notas: ${notaMateria1}, ${notaMateria2}, ${notaMateria3}`);
console.log(`Promedio de las materias: ${promedio.toFixed(2)}`);

if (aprobado) {
    console.log(`Estatus: PASOOO`);
} else {
    console.log(`Estatus: REPROBADO. La nota mínima para aprobar era ${notaMinimaAprobacion}.`);
}
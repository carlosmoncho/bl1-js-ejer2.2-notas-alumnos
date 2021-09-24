'use strict'

function buscaAlumno(arrayAlumnos,nia) {
	return arrayAlumnos.find((alumno) => alumno.nia == nia)
}

function modulosAprobadosDelAlumno(notas) {
	return notas.filter((nota) => nota.nota >= 5).map((item) => item.modulo)
}

function media(notas) {
	let totalNotas = notas.reduce((totalNotas,nota) => totalNotas += nota)
	return (totalNotas / notas.length).toFixed(2)
	
}

function ordenaAlumnosPorNia(arrayDatos) {
	return arrayDatos.sort((alumno1, alumno2) => alumno1.nia-alumno2.nia);
}

function ordenaAlumnosPorApellido(arrayDatos) {
	return arrayDatos.sort((alum1, alum2) => alum1.alumno.apellido.localeCompare(alum2.alumno.apellido))
}

function alumnosConSuspensos(arrayDatos) {
	return arrayDatos.filter((alumno) => alumno.notas.some((notas) => notas.nota < 5)).map((item) => item.alumno.nombre+' '+item.alumno.apellido)
}

function alumnosConTodoAprobado(arrayDatos) {
	return arrayDatos.filter((alumno) => alumno.notas.every((notas) => notas.nota >= 5)).map((item) => item.alumno.nombre+' '+item.alumno.apellido)
}

function alumnosAprobadosDelModulo(arrayDatos, modulo) {
	return arrayDatos.filter(alumno => alumno.notas.some(notas => notas.nota >= 5 && notas.modulo === modulo )).map((item) => item.alumno.nombre+' '+item.alumno.apellido)
}

function notasModulo(arrayDatos, modulo) {
	return arrayDatos.map(alumno => alumno.notas.find((item) => item.modulo === modulo)).map((item) => item.nota)
}

module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
    alumnosConSuspensos,
    alumnosConTodoAprobado,
	alumnosAprobadosDelModulo
}
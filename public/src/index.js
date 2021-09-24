'use strict'

let entradaDatos = prompt('Introduce un nia o un módulo')
if(entradaDatos===""){
    console.log('Debes de introducir algo')
}else{
    if(isNaN(entradaDatos)){
        let alumnosAprovadosModulo = alumnosAprobadosDelModulo(datosAlumnos,entradaDatos)
        if(alumnosAprovadosModulo.length===0){
            console.log('No se encontro el modulo')
        }else{
            console.log('Los alumnos aprobadoos en el módulo '+entradaDatos+' son')
            console.log(alumnosAprovadosModulo)
            let notas = notasModulo(datosAlumnos,entradaDatos)
            let mediaNotasModulo = media(notas)
            console.log('La nota media del modulo es '+mediaNotasModulo)
        }    
    }else{
        let alumno = buscaAlumno(datosAlumnos, entradaDatos)
        if(alumno===undefined){
            console.log('No se encontro al alumno')
        }else{
            let notas = alumno.notas.map((item) => item.nota)
            let modulosAprovados = modulosAprobadosDelAlumno(alumno.notas)
            console.log('Los módulos aprovados por el alumnos con nia '+entradaDatos+' son')
            console.log(modulosAprovados)
            let medianotas = media(notas)
            console.log('La nota media del alumno es '+medianotas)
        }
    }
    let alumnosOrdenadosPorApellido = ordenaAlumnosPorApellido(datosAlumnos)
    let listaNombresAlumnosOrdenadorPorApellido= alumnosOrdenadosPorApellido.map((item) => item.alumno.nombre+' '+item.alumno.apellido)
    console.log('La lista alfabética de alumnos es')
    console.log(listaNombresAlumnosOrdenadorPorApellido)
    let alumnosOrdenadosPorNia = ordenaAlumnosPorNia(datosAlumnos)
    let listaNombresAlumnosOrdenadorPorNia= alumnosOrdenadosPorNia.map((item) => item.alumno.nombre+' '+item.alumno.apellido)
    console.log('La lista de alumnos por nia es ')
    console.log(listaNombresAlumnosOrdenadorPorNia)
    let alumnosSuspensos = alumnosConSuspensos(datosAlumnos)
    console.log('Los alumnos con algun módulo suspenso son')
    console.log(alumnosSuspensos)
    let alumnosAprovados = alumnosConTodoAprobado(datosAlumnos)
    console.log('Los alumnos con todo aprovado son')
    console.log(alumnosAprovados)
}
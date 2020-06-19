const descripcion = {
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
    demand: true
};

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Mostrar listas de tareas', {
        completado: {
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea',
            default: ""
        }
    })
    .command('actualizar', 'Actualiza el estado compleado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
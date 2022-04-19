const colors = require('colors');

const mostrarMenu = () => {


    return new Promise( resolve => {

        console.log('==================='.brightMagenta);
        console.log('       TASKS       '.bold);
        console.log('==================='.brightMagenta);
    
        console.log(`${'1'.cyan}.Crear tarea`);
        console.log(`${'2'.cyan}.Mostrar tareas`);
        console.log(`${'3'.cyan}.Mostrar tareas completadas`);
        console.log(`${'4'.cyan}.Mostrar tareas pendientes`);
        console.log(`${'5'.cyan}.Completar tarea`);
        console.log(`${'6'.cyan}.Borrar tarea`);
        console.log(`${'0'.cyan}.Salir tarea`);
    
    
        //Creamos una interface para enviar y recibir información por parte del user
        //Esta funcionalidad ya viene por defecto con node
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //Abrimos la funcionalidad de input
        readline.question('\nSeleccione una opción: ', (opcion)=>{
            
            resolve(opcion);

            readline.close(); //Cerramos la funcionalidad
        })

    })
}

module.exports = {
    mostrarMenu
}
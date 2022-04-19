const colors = require('colors');
const { guardarInformacion, leerInformacion } = require('./helpers/archivosTareas');
const { inquirerMenu, pausaMenu, inputInquirer, listadoBorrarTareas, confirmarAccion, listadoCheckTareas } = require('./helpers/inquirerMenu');
const { Tareas, cargarTareaFromArchivos } = require('./models/listadoTareas');



const main = async () => {


    let opcionMenu;
    let tareas = new Tareas;


    const informacionArchivos = leerInformacion(); //Trae info de los archivos
    if (informacionArchivos) {
        tareas.cargarTareaFromArchivos(informacionArchivos);
    }



    do {
        console.clear();

        //Para evitar que entremos en un ciclo infinito
        opcionMenu = await inquirerMenu();    //Esto actuaria como un tipo de pausa sobre el do-while

        switch (opcionMenu) {
            case '1': //Crear tarea
                const descripcionTarea = await inputInquirer('Ingrese el nombre de la tarea: ');
                tareas.insertarTarea(descripcionTarea);

                break;

            case '2': //Listar tareas 
                tareas.mostrarTareas();
                break;
            case '3': //Listar tareas completadas
                tareas.mostrarPendientes_Completadas(true);
                break;
            case '4': //Listar tareas pendientes
                tareas.mostrarPendientes_Completadas(false);
                break;
            case '5': //Completar tarea

                const ids = await listadoCheckTareas(tareas.listadoArray);
                tareas.toogleCompletadas(ids);
                

                break;
            case '6': //Borrar tarea

                const idBorrar = await listadoBorrarTareas(tareas.listadoArray);

                if (idBorrar !== '0') {
                    const confirmarBorrar = await confirmarAccion('¿Está seguro?');
                    if (confirmarBorrar) {
                        tareas.borrarTarea(idBorrar);
                        console.log('Tarea borrada'.red);
                    }
                }


                break;
            default:
                break;
        }


        //GUARDAR TAREAS EN ARCHIVOS
        guardarInformacion(tareas.listadoObjetos);

        await pausaMenu();



    } while (opcionMenu !== '0');

}

main();
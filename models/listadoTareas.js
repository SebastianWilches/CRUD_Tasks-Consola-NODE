const { Tarea } = require("./tarea");
const colors = require('colors');

//Sera un objeto que contenga varias tareas
class Tareas {

    listadoObjetos = {};

    constructor() {
        this.listadoObjetos = {};
    }

    insertarTarea(descripcion) {

        let tarea = new Tarea(descripcion);

        //Dentro del listadoObjetos quiero meter una propiedad con el ID unico de la tarea
        //Y que este apunte al nuevo objeto de la tarea
        this.listadoObjetos[tarea.id] = tarea;
    }

    get listadoArray() {

        const arrayTareas = []

        //Voy a pasar los objetos a un listado array
        Object.keys(this.listadoObjetos).forEach((key) => { //Extraigo las keys de los objetos
            const tarea = this.listadoObjetos[key]; //Saco la tarea

            arrayTareas.push(tarea); //Lo meto en el array

        });

        return arrayTareas;
    }


    cargarTareaFromArchivos = (data = {}) => {

        this.listadoObjetos = data;

    }

    mostrarTareas = () => {
        let contador = 1;

        console.log();
        this.listadoArray.forEach((tarea) => {
            let completada;
            if (tarea.completada == null) {
                completada = 'Pendiente'.red;
            } else {
                completada = 'Completada'.green;
            }

            console.log(`${colors.cyan(contador++)}${'.'.cyan} ${tarea.descripcion} :: ${completada}`);
        })

    }

    mostrarPendientes_Completadas = (estado) => {
        if (estado) { //TRUE = Tareas completadas

            const completadasArr = this.listadoArray.filter(tarea => tarea.completada !== null);

            completadasArr.forEach((tarea, index) => {

                const indice = `${index + 1}`.cyan
                console.log(`${indice}${'.'.cyan} ${tarea.descripcion} :: ${colors.green(tarea.completada)}`);
            });
        }

        if (!estado) { //FALSE = Tareas pendientes
            const completadasArr = this.listadoArray.filter(tarea => tarea.completada == null);

            completadasArr.forEach((tarea, index) => {

                const indice = `${index + 1}`.cyan;

                console.log(`${indice}${'.'.cyan} ${tarea.descripcion} :: ${'Pendiente'.red}`);
            });
        }
    }

    borrarTarea = (id = '') => {
        if (this.listadoObjetos[id]) {
            delete this.listadoObjetos[id];
        } 
    }

    toogleCompletadas = (ids=[]) => {
        ids.forEach(id => {
            const tarea = this.listadoObjetos[id];
            if(!tarea.completada){
                tarea.completada = new Date().toISOString(); //Para que cuando quede completada quede la fecha en la que se logro
            }
        })

        /* Aqui con las opciones que estan en el checkbox vamos a barrer nuestra informacion
        En caso de que no este marcada, la tarea va a quedar como incompleta */
        this.listadoArray.forEach( tarea => { 
            if(!ids.includes(tarea.id)){
                this.listadoObjetos[tarea.id].completada = null;
            }
        })
    }

}

module.exports = {
    Tareas
}
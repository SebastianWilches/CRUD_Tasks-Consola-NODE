const { v4: uuidv4 } = require('uuid') //<- Requerimos la funcionalidad de v4, y le damos el alias de uuidv4

class Tarea {
    //Atributos
    id = ''; //<- Para este usaremos el package uuid
    descripcion = '';
    completada = null;

    constructor(descripcion) {
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completada = null;
    }


}

module.exports = {
    Tarea
}
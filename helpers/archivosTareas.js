const fs = require('fs');

const path = './persistencia/tareas.json';

const guardarInformacion = (data) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

const leerInformacion = () => {
    if (!fs.existsSync(path)) { //Si el path no existe salga de la función
        return null;
    }

    const informacionString = fs.readFileSync(path, { encoding: 'utf-8' }) //El encoding es para use un formato unicode
    const informacion = JSON.parse(informacionString);
    // console.log(informacion);

    return informacion
}

module.exports = {
    guardarInformacion,
    leerInformacion
}
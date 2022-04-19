const inquirer = require('inquirer');
const colors = require('colors');

const preguntasMenu = [
    {
        type: 'list',
        name: 'opcionMenu',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.cyan} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.cyan} Mostrar tareas`
            },
            {
                value: '3',
                name: `${'3.'.cyan} Mostrar tareas compleatadas`
            },
            {
                value: '4',
                name: `${'4.'.cyan} Mostrar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.cyan} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.cyan} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.cyan} Salir del programa`
            },
        ]
    }
];



const inquirerMenu = async () => {


    console.log('==================='.brightMagenta);
    console.log('       TASKS       '.bold);
    console.log('==================='.brightMagenta);

    //Uso deestructuración para que no devuleva el objeto completo
    const { opcionMenu } = await inquirer.prompt(preguntasMenu);
    // console.log(opcion);
    return opcionMenu;

}


const pausaMenu = async () => {
    console.log('');
    const pausa = await inquirer.prompt([
        {
            type: 'input',
            name: 'pausaMenu',
            message: `Presione ${'enter'.green} para continuar`
        }
    ])
}

const inputInquirer = async (mensaje) => {
    const parametrosInquirer = [
        {
            type: 'input',
            name: 'inputUser',
            message: mensaje,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { inputUser } = await inquirer.prompt(parametrosInquirer);
    return inputUser;


}


const listadoBorrarTareas = async (tareas = []) => { //Mostrara las opciones de tareas a borrar

    const choicesDelete = tareas.map((tarea, indice) => {
        const corrimientoIndice = indice + 1;


        return {
            value: tarea.id,
            name: `${colors.red(corrimientoIndice)}${'.'.red} ${tarea.descripcion}`
        }

    });

    choicesDelete.unshift({
        value: '0',
        name: `${colors.red('0')}${'.'.red} ${'Cancelar'}`
    })

    console.log(choicesDelete);

    const preguntasDelete = [
        {
            type: 'list',
            name: 'idDelete',
            message: 'Borrar tarea',
            choices: choicesDelete
        }
    ];

    const { idDelete } = await inquirer.prompt(preguntasDelete);
    return idDelete;
}

const listadoCheckTareas = async (tareas = []) => { //Mostrara las opciones de tareas a borrar

    const choicesDelete = tareas.map((tarea, indice) => {
        const corrimientoIndice = indice + 1;


        return {
            value: tarea.id,
            name: `${colors.cyan(corrimientoIndice)}${'.'.cyan} ${tarea.descripcion}`,
            checked: (tarea.completada) ? true : false
        }

    });


    console.log(choicesDelete);

    const preguntasDelete = [
        {
            type: 'checkbox',
            name: 'idsLista',
            message: 'Borrar tarea',
            choices: choicesDelete
        }
    ];

    const { idsLista } = await inquirer.prompt(preguntasDelete);
    return idsLista;
}

const confirmarAccion = async (mensaje) => {
    const preguntaConfirmar = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ]

    const { ok } = await inquirer.prompt(preguntaConfirmar);
    return ok;
}


module.exports = {
    inquirerMenu,
    pausaMenu,
    inputInquirer,
    listadoBorrarTareas,
    confirmarAccion,
    listadoCheckTareas
}
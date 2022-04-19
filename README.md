## Generalidades

Para poder trabajar con procesos asincronos, creo una función main asincrona que en su interior nos dejara poner awaits.

## Disposición de carpetas

**1. Helpers**
Alli iran todas las funcionalidades como extras para que el proyecto funcione

**2. Models**
Va todo lo que respecta a la logica del negocio

tarea.js: Tiene la forma en la que una tarea UNICA esta modelada.

tareas.js: Modela un conjunto de tareas de la siguiente forma.

Listado va a ser un objeto que contenga a otros, y cada objeto en su interior tendra la key del uuidv4
En el interior de este objeto estaran las propiedades de una tarea unica. (Similar a la forma en lo que lo hace una BD no relacional en Firebase)


```
listado{
    UUIDV4-123-123--32: {
        id:'',
        descripcion
        compleatdo
    },
    UUIDV4-123-123--32: {
        id:'',
        descripcion
        compleatdo
    }
}
```

Practicas curso UDEMY  
'use strict'

/*  Antes de nada: Maquetar

    1. Boton 'Añadir' tiene que recoger el valor del INPUT:
        - Seleccionar el Input
        - Comprobar si el Valor es vacio 
        - Coger y guardar el Valor en una variable
        - Vaciar el Input despues de añadir la tarea a la lista por Hacer

        Guardar el Valor en el Array de tareas por Hacer // push
        Guardar los valores en Local Storage ---> falta por verlo

        y PINTAR en la zona de tareas por HACER 
    
    2. Completar tarea:
        - Eliminar tarea de la seccion por hacer:
            1. Crear el evento con boton(svg borrar)
        - Añadir la tarea a la seccion completadas (pintar) en esta seccion el boton tiene estar en verde --> Tiene
          asociado evento de descompletar tarea
        - Eliminar tarea del array de tareas por Hacer
        - Añadirlo en tareas Completadas

    3. Eliminar tarea
        - Eliminar tarea del array que corresponde
        - Borrar la tarea de donde este
        -Actualizar local Storage

    4. Crear funciones para cada proceso que se repite
    5. Poner tareas en los objetos y array
*/



// ESTADO. Opciones de crear OBJETOS de dos tipos. EJEMPLOS:
let tareas = {
    porHacer:[
        'HTML', 'CSS'
    ],
    completadas:[
        {nombre: 'HTML'},
        {nombre: 'JS'},
    ]
}

let tareas = [
    {nombre: 'HTML', estado: 'TO DO'},
    {nombre: 'HTML', estado: 'DONE'},
]
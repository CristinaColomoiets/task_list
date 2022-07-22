'use strict'

/*  Antes de nada: Maquetar --- ✓

    1. Boton 'Añadir' tiene que recoger el valor del INPUT:
        - Crear el Evento con el boton ADD --- ✓
        - Seleccionar el Input --- ✓
        - Comprobar si el Valor es vacio 
        - Coger y guardar el Valor en una variable --- ✓
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
// let tareas = {
//     porHacer:[
//         'HTML', 'CSS'
//     ],
//     completadas:[
//         {nombre: 'HTML'},
//         {nombre: 'JS'},
//     ]
// }

// let tareas = [
//     {nombre: 'HTML', estado: 'TO DO'},
//     {nombre: 'HTML', estado: 'DONE'},
// ]




//---------------------------------------------------------------------------------------------




// Accedo al INPUT:
let node_input = document.querySelector('#input');
console.log(node_input);


// Creo el EVENTO con el BOTON 'add' 
// Accedo al BOTON:
let btn_add = document.querySelector('#button_add');

btn_add.addEventListener('click', function(){
    console.log('Boton ADD conectado');

    // Recojo el VALOR del INPUT:
    let input_value = node_input.value;
    console.log('Valor del INPUT es:', input_value);
});



// Creo la FUNCION que me pinte tareas en la web:
// Acedo a la seccion donde van a aparecer las tareas del input:
let node_list_box = document.querySelectorAll('#section-list-box');

function add_task(text){
    // Creo el contenido dinamico para HTML:
    let task_box = document.createElement('li');
    task_box.classList.add('to_do-li-task-box');

    let task_txt = document.createElement('p');
    task_txt.classList.add('to_do-task_txt');
    task_txt.innerHTML = text;

    task_box.appendChild(task_txt);

    let box_buttons = document.createElement('div');
    box_buttons.classList.add('to_do-box-buttons');

    let btn_trash = document.createElement('button');
    btn_trash.classList.add('to_do-button-task');

    let svg_trash = '<svg class="to_do-svg-task" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

    btn_trash.appendChild(svg_trash);

    let btn_check = document.createElement('button');
    btn_check.classList.add('to_do-button-task');

    let svg_check =  '<svg class="to_do-svg-task" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="to_do-svg-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg>';

    btn_check.appendChild(svg_check);

    task_box.appendChild(btn_trash);
    task_box.appendChild(btn_check);
}
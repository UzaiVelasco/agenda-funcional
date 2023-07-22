//ahora para hacer que las funciones no esten al alcance del usuario 
//para modificar
//JS IIFE funciones que en cuanto se declaran se ejecutan

//para importar los metodos que estan en otros js
import tareaCompletada from "./components/checkComplete.js"
import botonEliminar from "./components/deleteIcono.js"

(() => {
    //seleccionamos los elementos mediante el data atribute
    //ya que si lo hacemos por clase o ID si llega a cambiar
    //se pierde la conexion.
    const btn = document.querySelector("[data-form-btn]"); //data atribute
    const input = document.querySelector("[data-form-input]");//el inut
    const list = document.querySelector("[data-list]");//La UL del html

    //arrow function o funciones anonimas
    //esto es una funcion anonima
    const createTask = (parametro) => {
        //para evitar que la pagina se recargue cada que se seleccione el bton
        parametro.preventDefault();

        //para capturar y guardar el contenido del input que es escrito  
        const value = input.value;

        //para resetear el input y dejarlo con string vacio al momentos
        //de dar clic
        input.value = "";

        //aqui se crea el elemnto li (esto porque es el que se
        //creara dinamicamente cada qe se de clic el boton.
        //Si lo dejamos en el html desde un inicio se vera vacio
        //y solo se sobre escribira el primero)
        const task = document.createElement("li");
        //agregando la clase a la li que se creo, esto para que el 
        //css pueda darle los estilos de, en este caso "card"
        task.classList.add("card");

        //a la UL le agregamos el elemento hijo html que contedra
        //en este caso "task" tiene como contenido la crecion de 
        //un elemento li ya con la clase card
        /**
         * de esta manera tendriamos algo asi
         * <ul>--->que ya esta en el html desde un inicio y seleccionado con varible list en este js
         *  <-y aqui el elemento li agregado con su clase card->
         *  <li class="card">
         *      //vacio aun porque el contenido aun no lo agregamos
         *  </li>
         * </ul>
         */
        list.appendChild(task);

        //sustituiremos lo de contenido que son strings que se
        //consiguen con el metodo 
        //innerHtml
        //por puros objetos html.

        /**
         * es decir esto que teniamos
         *  const contenido = 
            `<div>
                ${tareaCompletada()}
                <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
        *    no podra ser porque estamos combinando strings
            con objetos html (cuando llamamos a la funcion
                tarea completada)
            y como debemos de mantener esa estructura 
            dinamicamente. crearemos puros objetos html:
        */

        //primero el div (que es el contenedor que tiene a
        //la i y al span)
        const divTareas = document.createElement("div");
        //ahora aqui al div le meteremos otro elemento i
        //que es el de el icono palomita
        divTareas.appendChild(tareaCompletada());
        /*
        * de esta manera ya el div estaría así
        * <div>
        *   <i ya con sus clases></i>
        * </div>
        */

        //ahora se crea el span ojo no va dentro del i
        //ya que el appendChild agrega elementos hijos al
        //padre en este caso al div    
        const spanTareas = document.createElement("span");
        //se agrega la clase al span para que se le de
        //estilos css
        spanTareas.classList.add("task");
        //se le da el valor que es capturado por el usuario
        spanTareas.textContent = value;
        //y ahora si se agrega al div, de esta manera tenemos:
        divTareas.appendChild(spanTareas);
        /**
         * <div>
         *     <i class="card"></i>
         *     <span clas="task">value</span>    
         * </div>
         */
        
        //por ultimo al elemento padre del div que es la li
        //le agregaremos el div
        task.appendChild(divTareas);

        /**<ul>      
         *      <li class="">
         *        AQUI primero el div pero ya como objeto    
         *          <div>
         *              <i class="card"></i>
         *              <span clas="task">value</span>    
         *          </div>
         *          
         *      </li>
         * </ul>
         */
        //aqui agregamos el icono de basura ya con su metodo
        task.appendChild(botonEliminar());
            /**<ul>      
         *      <li class="card">
         *        AQUI primero el div pero ya como objeto    
         *          <div>
         *              <i class="card"></i>
         *              <span clas="task">value</span>    
         *          </div>
         *          <i class="">//basicamente las clases que hacen que sea un icono con forma de basura</i>
         *      </li>
         * </ul>
         */
    };
    //agregamos al boton el evento
    btn.addEventListener("click", createTask);

})();//=>los parentesis del final es para mandarla a llamar
//inmediatamente pero para que no sean tantas lineas 
//crearemos los modulos. pero es muy importante que en el html
//cuando referenciemos el js principal si esta segmentado
//en modulos debemos de escribir type="module"
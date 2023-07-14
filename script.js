const btn = document.querySelector("[data-form-btn]"); //data atribute
const input = document.querySelector("[data-form-input]");//el inut
const list=document.querySelector("[data-list]");//La UL del html

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

    //templates strins para meter codigo html desde JS
    const contenido = 
    `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
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


    //le agregamos el codigo html al task es decir a la li
    // para tener algo como esto:
    /**
     * <ul>
      * <li class="card">--> esta es la que se creo con la varibale task
          <-este de abajo es el codigo html de la variable contenido-->
     *      <div>
                <i class="far fa-check-square icon"></i>
                <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
     *  </li>-->aqui se cierra el li
     * </ul>
     * 
     */
    task.innerHTML= contenido;
};

btn.addEventListener("click", createTask);
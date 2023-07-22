//para eliminar las tareas con el boton "i" que es el icono 
//de basura
const botonEliminar = () => {
    const icono = document.createElement("i");
    icono.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    icono.addEventListener("click", funcionBorrar);
    return icono;
}

const funcionBorrar = (iconoSeleccionado) => {
    //ahora queremos saber 
    //y seleccionar el elemento padre
    //para eliminar todo el elemento padre, en este
    //caso la "card" que contiene el div y los iconos
    /**<ul>      
     *      <li class="card">  -->es decir toda esta
     *        AQUI primero el div pero ya como objeto    
     *          <div>
     *              <i class="card"></i>
     *              <span clas="task">value</span>    
     *          </div>
     *          <i class="">//basicamente las clases que hacen que sea un icono con forma de basura</i>
     *      </li>------->hasta aqui
     * </ul>
     */
    const padre_seleccionado = iconoSeleccionado.target.parentElement;
    //console.log(padre_seleccionado);
    padre_seleccionado.remove();
}

export default botonEliminar;
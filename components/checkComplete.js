//para tareas completadas
//primero capurareos el elemento que va a ser modificado
//en una funcion, para que cuando llamemos a la fucion
//nos retorne el elemento
const tareaCompletada = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    //le agregamos tambien el evento para que haga su accion
    //mediante una funcion no es necesario las () cuando se 
    //llama la funcion
    i.addEventListener("click", marcarTareaCompletada);
    return i;
}

//constante para funcion de tareas completadas
const marcarTareaCompletada = (seleccionada) => {
    //se creo el nombre seleccionada que en realidad es un evento
    //este nos ayudara para que cuando demos click sobre algun elemento
    //en este caso sobre el "i" que es el icono. Sepa la funcion
    //a cual de todooooooos los posibles "i" que tengamos en pantallas
    //hace referencia y esto se logra con el metodo target
    console.log(seleccionada.target);//-> estos solo para ver si se esta seleccionando bien
    const tareaSeleccionada = seleccionada.target;
    //ahora ya le daremos el estilo que deseemos para que se vea el cambio
    //como son iconos se los estan trayendo de una libreria asi como boostrap 
    //y por tanto maneja clases, entonces cambiaremos la clase para que
    //se cambie el icono
    //agregando las clases

    /*
    tareaSeleccionada.classList.add("fas","completeIcon")
    //quitando las clases anteriores
    tareaSeleccionada.classList.remove("far");
    */
    //sin embargo hay un metodo comodin que es muy util para 
    //intercalar las clases, es decir, si por ejemplo quiero
    //cambiar de tarea seleccionada a des-seleccionada
    //para no hacer otro metodo que sea para deseleccionar, 
    //simplemente uso el metodo toggle (este dice:
    //verifico la clase que me pases como parametro, si existe la quito
    //si no existe la pongo.
    tareaSeleccionada.classList.toggle("fas");
    tareaSeleccionada.classList.toggle("completeIcon");
    tareaSeleccionada.classList.toggle("far");
}

export default tareaCompletada;
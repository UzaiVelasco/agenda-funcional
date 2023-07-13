const btn=document.querySelector("[data-form-btn]"); //data atribute
const input=document.querySelector("[data-form-input]");

//arrow function o funciones anonimas
//esto es una funcion anonima
const createTask = (parametro)=>{
    parametro.preventDefault();
    const input=document.querySelector("[data-form-input]");   
    console.log(input.value);
};

btn.addEventListener("click",createTask);
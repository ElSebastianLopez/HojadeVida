const open = document.getElementById("open");
const abrir = document.getElementById("abrir");
const model = document.getElementById("model");
const close = document.getElementById("close");

open.addEventListener("click", ()=> {
    model.classList.add("show");
});
abrir.addEventListener("click",()=>{
    model.classList.add("show");
});
close.addEventListener("click", ()=> {
    model.classList.remove("show");
})



//CODIGO DE LA SECIION DE TRADUCCION
const idioma= document.getElementById("idioma");
const cambiarLenguaje= async lenguage=>{
const respuestaJASON=await fetch(`./lenguajes/${lenguage}.json`)
const texts=await respuestaJASON.json();
const cambiatTextos=document.querySelectorAll("[data-section]")
for(const textToChange of cambiatTextos){
    const seccion=textToChange.dataset.section;
    const valor=textToChange.dataset.value;
    textToChange.innerHTML=texts[seccion][valor];
    //console.log(seccion,valor);
}
}

idioma.addEventListener('click',(e)=>{
    cambiarLenguaje(e.target.parentElement.dataset.lenguage);
});
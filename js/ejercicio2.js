let listaNumeros=[];

let formulario=document.getElementById("formulario");
let numero=document.getElementById("numero");

let lista=document.getElementById("lista");
let suma=document.getElementById("suma");
let promedio=document.getElementById("promedio");
let mayor=document.getElementById("mayor");
let menor=document.getElementById("menor");

formulario.addEventListener("submit", agregarNumeros);
function agregarNumeros(event){
    event.preventDefault();
    //validaciones
    if(numero.value.trim()===""){
        alert("ingrese un numero.");
        numero.style.backgroundColor="#cb3234"
    }else{
        numero.style.backgroundColor="#fff"
        let valor=parseFloat(numero.value);
        listaNumeros.push(valor);
        numero.value="";
        mostrarResultados();
    }
}
function mostrarResultados(){
    lista.innerHTML="";
    let total=0;
    let numMayor=listaNumeros[0];
    let numMenor=listaNumeros[0];
    
    for(let i=0; i<listaNumeros.length; i++){
        lista.innerHTML +=`<li>${listaNumeros[i]}</li>`;
        total+=listaNumeros[i];

        if(listaNumeros[i]>numMayor){
            numMayor=listaNumeros[i];

        }
        if(listaNumeros[i]<numMenor){
            numMenor=listaNumeros[i];
            
        }
    }
    let media=total/listaNumeros.length;
    suma.textContent=`Suma: ${total}`;
    promedio.textContent=`Promedio: ${media.toFixed(2)}`;
    mayor.textContent=`Numero Mayor: ${numMayor}`;
    menor.textContent=`Numero Menor: ${numMenor}`;





}




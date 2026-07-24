import { Materia } from './materia.js';

const botonAgregar = document.getElementById("btn-agregar");
const botonCalcular = document.getElementById("btn-calcular");
const tabla = document.querySelector("#tabla-materias tbody");
function revisarTexto(texto){
    let coso = texto.value;
    if(coso.length == 0 || /\d/.test(coso)){
        texto.classList.add('cajon-error');
    }else{
        texto.classList.remove('cajon-error');
    }
}
function revisarEntero(numero){
    let coso = Number(numero.value);
    if(coso < 1 ){
        numero.classList.add('cajon-error');
    }else{
        numero.classList.remove('cajon-error');
    }
}
function revisarCreditos(numero) {
    let coso = Number(numero.value);
    if (coso.length === 0 || !Number.isInteger(coso) || coso < 1) {
        numero.classList.add('cajon-error');
    } else {
        numero.classList.remove('cajon-error');
    }
}
botonAgregar.addEventListener("click", function(){
    const nuevaFila = tabla.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaNota = nuevaFila.insertCell(1);
    const celdaCreditos = nuevaFila.insertCell(2);
    celdaNombre.innerHTML = '<input type="text" placeholder="Materia" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+">';
    let materia = celdaNombre.querySelector('input');
    materia.addEventListener('blur', function(){
        revisarTexto(materia);
    });
    celdaNota.innerHTML = '<input type="number" placeholder="Nota" step="0.1" min="0">';
    let nota = celdaNota.querySelector('input');
    nota.addEventListener('blur', function(){
        revisarEntero(nota);
    });
    celdaCreditos.innerHTML = '<input type="number" placeholder="Creditos" step="1" min="1">';
    let credito = celdaCreditos.querySelector('input');
    credito.addEventListener('blur', function(){
        revisarCreditos(credito);
    });
});
botonCalcular.addEventListener("click", function(){
    
});

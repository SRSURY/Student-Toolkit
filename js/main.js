const botonAgregar = document.getElementById("btn-agregar");
const botonCalcular = document.getElementById("btn-calcular");
const tabla = document.querySelector("#tabla-materias tbody");
botonAgregar.addEventListener("click", function(){
    const nuevaFila = tabla.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaNota = nuevaFila.insertCell(1);
    const celdaCreditos = nuevaFila.insertCell(2);
    celdaNombre.innerHTML = '<input type="text" placeholder="Materia">';
    celdaNota.innerHTML = '<input type="number" placeholder="Nota">';
    celdaCreditos.innerHTML = '<input type="number" placeholder="Creditos">';
});
botonCalcular.addEventListener("click", function(){
    
});
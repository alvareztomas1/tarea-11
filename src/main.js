function agregarSalario(){
    const $div = document.createElement("div");
    const $input = document.createElement("input");
    const $salarios = document.querySelector("#salarios");

    $div.classList.add("salario");
    $input.classList.add("form-control");
    $input.type = "number";
    $input.placeholder = "Ingrese salario";
    $input.name = "salario";
    
    $div.appendChild($input);
    $salarios.appendChild($div);

}
function borrarSalario(){
    const $salarios = document.querySelectorAll(".salario");

    if($salarios.length > 1){
        $salarios[$salarios.length-1].remove();
    }



}
function mostrarResultados(){
    document.querySelector("#resultados").className = "";
}
function obtenerSalarios(){
    const $salarios = document.querySelectorAll(".salario input");
    let salarios = [];

    for(let i = 0; i < $salarios.length; i++){
        if($salarios[i].value >= 1000 && $salarios[i].value <= 100000){
            salarios.push(Number($salarios[i].value));
        }
    }


    return salarios;
}
function mostrarSalario(tipo, valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}
function ocultarResultados(){
    document.querySelector("#resultados").className = "oculto";

}
function mostrarCalculos(salarios){

    mostrarSalario("mayor", obtenerSalarioMayor(salarios));
    mostrarSalario("menor", obtenerMenorSalario(salarios));
    mostrarSalario("mensual", obtenerPromedioMensual(salarios));
    mostrarSalario("anual", obtenerPromedioAnual(salarios));
       
    mostrarResultados();
}

document.querySelector("#boton-agregar").onclick = function(event){
   
    agregarSalario();

    event.preventDefault();
}

document.querySelector("#boton-borrar").onclick = function(event){

    borrarSalario();
    ocultarResultados();

    event.preventDefault();
}

document.querySelector("#boton-calcular").onclick = function(event){

    let salarios = obtenerSalarios();

    detectarErrores();

    if(!$form.salario.length){

        let $salarios = [$form.salario];

        if($salarios.length === salarios.length){
            mostrarCalculos(salarios);
    
        }
    }

    else{

        if($form.salario.length === salarios.length){
            mostrarCalculos(salarios);
        }
    }
 
    event.preventDefault();
}
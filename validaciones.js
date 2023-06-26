function validarSalario(salario){
    if(salario < 1000){
        return "el salario debe ser mayor o igual a 1000";
    }
    if(salario > 100000){
        return "el salario debe ser menor o igual a 100000";
    }
    if(!/^\d+$/.test(salario)){
        return "el salario debe ser un número entero";
    }

    return "";
}

function detectarErrores(){
    let $salarios = $form.salario;

   
    if(!$salarios.length){

       
       
        let error = {
            error: validarSalario($salarios.value)
        }
        
        
        manejarErrores(error, $salarios);
    }
    else{

        

        $salarios.forEach(function(salario, index){
            let errores = {
                error: validarSalario(salario.value)
            }

            manejarErrores(errores, $form.salario[index]);
        });
       
    }

}

function manejarErrores(errores, elementoDelArray){
   
    let  llaves = Object.keys(errores);
    let tiposDeErrores = errores[llaves];
    

    
   


    if(tiposDeErrores){
        
        elementoDelArray.classList.add("error");
    }else{
        elementoDelArray.classList.remove("error");
    }
    

}



let $form = document.querySelector("#formulario");
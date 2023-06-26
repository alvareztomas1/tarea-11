function obtenerSalarioMayor(salarios){
    let salarioMayor = salarios[0];

    for(let i = 0; i < salarios.length; i++){
        if(salarios[i] > salarioMayor){
            salarioMayor = salarios[i];
        }
    }

    return salarioMayor;
}


function obtenerMenorSalario(salarios){
    let salarioMenor = salarios[0];

    for(let i = 0; i < salarios.length; i++){
        if(salarios[i] < salarioMenor){
            salarioMenor = salarios[i];
        }
    }

    return salarioMenor;
}

function obtenerPromedioAnual(salarios){
    let sumaSalarios = 0;

    for(let i = 0; i < salarios.length; i++){
        sumaSalarios = sumaSalarios + salarios[i];
    }


    return sumaSalarios/salarios.length;
}

function obtenerPromedioMensual(){
    let salarios = obtenerSalarios(); 

    return obtenerPromedioAnual(salarios)/12;
}

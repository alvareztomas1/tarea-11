function probarValidarSalario(){
    console.assert(
        validarSalario("1") === "el salario debe ser mayor o igual a 1000", 
        "validar salario no funciona bien cuando el número es menor a 1000"
    );
    console.assert(
        validarSalario("150000") === "el salario debe ser menor o igual a 100000",
        "validar salario no funciona bien cuando el número es mayor a 100000"
    );
    console.assert(
        validarSalario("10000.5") === "el salario debe ser un número entero",
        "validar salario no funciona bien cuando el número no es entero"
    );
    console.assert(
        validarSalario("10500") === "",
        "validar salario no valida bien un valor correcto"
    );

}

probarValidarSalario();
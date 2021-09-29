var nombre = prompt("Ingrese su nombre:");

if(nombre != ""){
    var edad = prompt("Ingrese su edad (debe ser mayor de edad para ingresar):");

    if(edad != "" && edad>0){
        if(edad>=18){
            alert("Felicidades "+ nombre +"! Como tiene "+edad+" ha ingresado.");
        }
        else{
            alert(nombre +"! Como tiene "+edad+" no puede ingresar.");
        }
    }
    
    else{
        alert("Edad invalida");
    }
}

else{
    alert("Nombre invalido");
}

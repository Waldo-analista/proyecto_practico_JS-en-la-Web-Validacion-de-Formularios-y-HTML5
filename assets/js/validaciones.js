export function valida(input){
    const tipoDeInput=input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }


    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    }
    else{
        
        input.parentElement.classList.add("input-container--invalid");
        if(tipoDeInput){
            input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
        }
        
        
    }

}

const tipoDeErrores=[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje="";
    tipoDeErrores.forEach(error=>
        {
            if(input.validity[error]){
                mensaje=mensajesDeError[tipoDeInput][error];
            }

        }
    );

    return mensaje;
}

const mensajesDeError={
    nombre:{
        valueMissing:'Este campo NO puede estar vacío'
    },
    email:{
        valueMissing:'Este campo NO puede estar vacío',
        typeMismatch:'El correo no es valido'
    },
    password:{
        valueMissing:'Este campo NO puede estar vacío',
        patternMismatch:'Debes ingresar entre 6 y 12 caracteres, al menos un número, al menos una letra minuscula, al menos una letra mayuscula y sin caracteres especiales'
    },
    nacimiento:{
        valueMissing:'Este campo NO puede estar vacío',
        customError:'Debes tener al menos 18 años',
    },
    numero:{
        valueMissing:'Este campo NO puede estar vacío',
        patternMismatch:'Debes ingresar solo numeros y 10 numeros en total'
    },
    address:{
        valueMissing:'Este campo NO puede estar vacío',
        patternMismatch:'La direccion ingresada debe tener entre 10 a 40 caracteres (incluido el espacio)'
    },
    city:{
        valueMissing:'Este campo NO puede estar vacío',
        patternMismatch:'La ciudad ingresada debe tener entre 10 a 30 caracteres (incluido el espacio)'
    },
    state:{
        valueMissing:'Este campo NO puede estar vacío',
        patternMismatch:'El estado ingresado debe tener entre 10 a 30 caracteres (incluido el espacio)'
    }

}

const validadores = {
    nacimiento: input => validarNacimiento(input)
}

function validarNacimiento(input){
    const fechaNacimiento=new Date(input.value);
    
    let mensaje="";


    if(!mayorDeEdad(fechaNacimiento)){
        mensaje='Debes tener al menos 18 años';
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual=new Date();
    const diferenciaFechas=new Date(fecha.getUTCFullYear()+18,fecha.getUTCMonth(),fecha.getUTCDay())
    return (diferenciaFechas<=fechaActual);
}

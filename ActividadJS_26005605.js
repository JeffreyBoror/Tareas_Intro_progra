var  mensaje_mes; 
mensaje_mes = prompt("Ingresa tu mes de nacimiento en número (ej: 5 para Mayo):");

var mensaje_dia;
mensaje_dia = prompt("Ingresa tu día de nacimiento en número (ej: 11):");

mes = parseInt(mensaje_mes);
dia = parseInt(mensaje_dia);

signo = "";

if (!isNaN(mes) && !isNaN(dia)) {
    
    if (mes === 1) { // Enero
        if (dia >= 20) { signo = "Acuario"; } else { signo = "Capricornio"; }
    } 
    else if (mes === 2) { // Febrero
        if (dia >= 19) { signo = "Piscis"; } else { signo = "Acuario"; }
    } 
    else if (mes === 3) { // Marzo
        if (dia >= 21) { signo = "Aries"; } else { signo = "Piscis"; }
    } 
    else if (mes === 4) { // Abril
        if (dia >= 20) { signo = "Tauro"; } else { signo = "Aries"; }
    } 
    else if (mes === 5) { // Mayo
        if (dia >= 21) { signo = "Géminis"; } else { signo = "Tauro"; }
    } 
    else if (mes === 6) { // Junio
        if (dia >= 21) { signo = "Cáncer"; } else { signo = "Géminis"; }
    } 
    else if (mes === 7) { // Julio
        if (dia >= 23) { signo = "Leo"; } else { signo = "Cáncer"; }
    } 
    else if (mes === 8) { // Agosto
        if (dia >= 23) { signo = "Virgo"; } else { signo = "Leo"; }
    } 
    else if (mes === 9) { // Septiembre
        if (dia >= 23) { signo = "Libra"; } else { signo = "Virgo"; }
    } 
    else if (mes === 10) { // Octubre
        if (dia >= 23) { signo = "Escorpio"; } else { signo = "Libra"; }
    } 
    else if (mes === 11) { // Noviembre
        if (dia >= 22) { signo = "Sagitario"; } else { signo = "Escorpio"; }
    } 
    else if (mes === 12) { // Diciembre
        if (dia >= 22) { signo = "Capricornio"; } else { signo = "Sagitario"; }
    } 
    else {
        signo = "Fecha no válida (mes incorrecto)";
    }

    // 4. Mostramos el resultado con un alert
    if (signo !== "Fecha no válida (mes incorrecto)") {
        alert("Tu signo zodiacal es: " + signo);
    } else {
        alert("Por favor ingresa un mes válido entre 1 y 12.");
    }

} else {
    alert("Error: Por favor ingresa solo números.");
}

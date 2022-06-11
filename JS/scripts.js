function calcular() {
    if(validar()===true)
    {
        var estatura = parseFloat(document.getElementById("estatura").value);
        var peso = parseFloat(document.getElementById("peso").value);
        var BMI = (peso/((estatura/100)*(estatura/100))).toFixed(1);
        document.getElementById('resultado_BMI').innerHTML = BMI;
        actualiza_tabla(BMI);
    }
    else
    {
        document.getElementById('resultado_BMI').innerHTML =' ';
        actualiza_tabla(-1);
    }
}

function validar() {
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    if (isNaN(estatura) || isNaN(peso)) {
        alert("Estatura y peso deben ser números");
        return false;
    }
    else if (estatura == 0 || peso == 0) {
        alert("Estatura y peso no pueden ser 0");
        return false;
    }
    else if (estatura > 272 || estatura < 10 || peso < 2 || peso > 544) {
        alert("Estatura debe estar entre 10cm y 272cm, y el peso entre 2kg y 544kg");
        return false;
    }
    else {
        return true;
    }
}

function actualiza_tabla(BMI) {
    if (BMI == -1) {
        document.getElementById("tabla_titulos").classList.replace("muestra", "oculta");
        document.getElementById("tabla_inferior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_superior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_normal").classList.replace("muestra", "oculta");
        document.getElementById("tabla_obesidad").classList.replace("muestra", "oculta");

    }

    else if (BMI <= 18.5) {
        document.getElementById("tabla_titulos").classList.replace("oculta", "muestra");
        document.getElementById("tabla_inferior").classList.replace("oculta", "muestra");
        document.getElementById("tabla_superior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_normal").classList.replace("muestra", "oculta");
        document.getElementById("tabla_obesidad").classList.replace("muestra", "oculta");
    }
    else if (BMI <= 24.9) {
        document.getElementById("tabla_titulos").classList.replace("oculta", "muestra");
        document.getElementById("tabla_normal").classList.replace("oculta", "muestra");
        document.getElementById("tabla_superior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_inferior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_obesidad").classList.replace("muestra", "oculta");
    }
    else if (BMI <= 29.9) {
        document.getElementById("tabla_titulos").classList.replace("oculta", "muestra");
        document.getElementById("tabla_superior").classList.replace("oculta", "muestra");
        document.getElementById("tabla_normal").classList.replace("muestra", "oculta");
        document.getElementById("tabla_inferior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_obesidad").classList.replace("muestra", "oculta");
    }
    else if (BMI >= 30.0) {
        document.getElementById("tabla_titulos").classList.replace("oculta", "muestra");
        document.getElementById("tabla_obesidad").classList.replace("oculta", "muestra");
        document.getElementById("tabla_normal").classList.replace("muestra", "oculta");
        document.getElementById("tabla_inferior").classList.replace("muestra", "oculta");
        document.getElementById("tabla_superior").classList.replace("muestra", "oculta");
    }
}
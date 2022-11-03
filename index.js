function valida(){

    let xcedula = document.getElementById('cedula').value;
    let xape = document.getElementById('apellido').value;
    let xnom = document.getElementById('nombre').value;
    let xeda = document.getElementById('edad').value;
    let xchek = document.getElementById('chek').checked;
    let xcorreo = document.getElementById('correo').value;
    //Validar sitio
    let ligero = document.getElementById('ligero').checked;
    let medio = document.getElementById('medio').checked;
    let pesado = document.getElementById('pesado').checked;
    //Validar Select
    let formulario = document.forms["formulario"]["Sede"].selectedIndex;
    /*validacion para campos vacios*/
    let validacorreo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(xcedula ==" " || xape==" "|| xnom==" "|| xeda==" ")
    {
        alert('Todos los campos no pueden estar vacios');
        return false
    }
    /*validacion para que no mentan letras en la cedula*/
    if(isNaN(xcedula) || xcedula.length>8){
        alert("la cedula solo debe contener numeros y no debe tener mas de 8 digitos");
    }
    //Validar el tamaño del  nombre y del apellido
    if(xape.length>20 || xnom.length>30){
        alert("La cedula y el  nombre no deben de tener mas de 30 caracteres")
    }
    //validar si la edad no es un numero y si no es mayor a 110
    if(isNaN(xeda)||xeda>110){
        alert("La edad debe ser un numero y no puede ser mayor a 110 años.");
    }
    //validacion de correo electronico
    if(!validacorreo.test(xcorreo)){
        alert("El formato de correo no es valido.");
    }
    //Validacion de marcar el tipo de paquete
    if(!ligero && !medio && !pesado){
        alert("Tienes que llenar una casilla en tipo de paquete");
    }
    if(formulario==null || formulario==0){
        alert("Debe seleccionar una opción en el campo 'destino del paquete'");	
    }
}

function calcula(){
    valida();
    let form = document.getElementById('Sede');
    let selected=form.options[form.selectedIndex].value;

    let ligero = document.getElementById('ligero').checked;
    let medio = document.getElementById('medio').checked;
    let pesado = document.getElementById('pesado').checked;

    let margarita=22;
    let distrito=15;
    let lara=8; 

    let xlig=8;
    let xmed=15;
    let xpes=22;
    
    let resultado=0;

    if(selected == "0" && ligero == true){
        resultado=0;
        resultado=distrito*xlig;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "1" && ligero == true){
        resultado=0;
        resultado=margarita*xlig;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "2" && ligero == true){
        resultado=0;
        resultado=lara*xlig;
        alert("El costo del envio es de "+resultado+" dolares");
    }

    if(selected == "0" && medio == true){
        resultado=0;
        resultado=distrito*xmed;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "1" && medio == true){
        resultado=0;
        resultado=margarita*xmed;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "2" && medio == true){
        resultado=0;
        resultado=lara*xmed;
        alert("El costo del envio es de "+resultado+" dolares");
    }

    if(selected == "0" &&  pesado == true){
        resultado=0;
        resultado=distrito*xpes;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "1" &&  pesado == true){
        resultado=0;
        resultado=margarita*xpes;
        alert("El costo del envio es de "+resultado+" dolares");
    }else if(selected == "2" &&  pesado == true){
        resultado=0;
        resultado=lara*xpes;
        alert("El costo del envio es de "+resultado+" dolares");
    }
}

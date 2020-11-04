/* Validación formulario */



let contadorError = 1;

function mostrarError(msg) {

  let contenedor = document.getElementById('errorContainer')
   contenedor.innerHTML = contenedor.innerHTML + `
  <br>
  <div id="error${contadorError}"> ${msg} </div>
  <br>
  `;
  contenedor.style.display = 'block';
  window.setTimeout(function (){
    contenedor.style.display = 'none';
    contenedor.innerHTML = null;
  }, 6000)
}


let formularioOk = true;

function validacionFormulario(){

  let confirmar = window.confirm("¿Está seguro, pero esque recontra seguro de que desea enviar esta información?" +
    " Despues no me venga con que ahh no si no quería porque tiene que estar bien seguro si no No, pero si esta seguro, " +
    "dele mi Rei");
  if(confirmar){

  //Validación de selects
  let selectIds = ["region","comuna","tipo-mascota","esterilizado-mascota","vacunas-mascota"];
  for(let selectId of selectIds) {
    let selectValue = document.getElementById(selectId).value;
    if(selectValue === "vacio"){
      mostrarError("Debe seleccionar una opción valida en: " + selectId);
      formularioOk = false;
    }
  }
  // validación Tipo mascota otro
    let tipo = document.getElementById("tipo-mascota").value;
    if(tipo === "otro"){
      let otro = document.getElementById("otro").value;
      if(otro.length > 40){
         mostrarError("El tipo de mascota no debe exceder los 40 caractéres");
        formularioOk = false;
      }
    }

  //Validación de inputs tipo text
    let textos =[
      {"id":"calle","max":"250"},
      {"id":"numero","max":"20"},
      {"id":"sector","max":"100"},
      {"id":"nombre","max":"200"},
      {"id":"color-mascota","max":"30"},
      {"id":"raza-mascota","max":"30"}];

  for( let elemento of textos ) {
    /**@type {string}*/ let valor = document.getElementById(String(elemento.id)).value;
    if(!valor){
      mostrarError('El input ' + elemento.id + ' no puede ser vacío');
      formularioOk = false;
    }
    let regex = /^[a-zA-Z ]*$/;

    if (!regex.test(valor) && elemento.id !== "numero") {
      mostrarError('El input '+ elemento.id+' debe contener sólo letras');
      formularioOk = false;

    }
    if (valor.length < 0 || valor.length > elemento.max) {
      mostrarError('El input'+ elemento.id +'debe tener un largo entre 0 y' + elemento.max + ' caractéres');
      formularioOk = false;
    }
  }
  //validacion numero
    let num = document.getElementById("numero").value;
    var numbers = /^[0-9]+$/;
      if(!num.match(numbers)){
        mostrarError("Número de calle debe ser un número");
    formularioOk = false;
      }
  //Validacion E-mail
  let email = document.getElementById("email").value;
  if(!email){
    mostrarError("Debe proporcionar un email");
    formularioOk = false;
  }
  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
    mostrarError("El formato del Email es incorrecto");
    formularioOk = false;
  }

  //Validacion Celular
  let celu = document.getElementById("celular").value;
   var phoneno = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
  if(celu){
    if(!celu.match(phoneno)) {
      mostrarError("Formato de numero celular no válido")
      formularioOk = false;
    }
  }

  //validacion Edad Mascota
  let edad = document.getElementById("edad-mascota").value;
  if (parseInt(edad)){
    console.log("edad Ok");
  } else {
    mostrarError("La edad de su mascota debe ser un numero ")
        formularioOk = false;
  }
  if(!edad){
        mostrarError("Debe ingresar la edad de su mascota")
        formularioOk = false;
  }
  else if (!Number.isInteger(parseFloat(edad))){
        mostrarError("La edad de su mascota debe ser un numero entero")
        formularioOk = false;
  }
  else if(edad <= 0){
        mostrarError("La edad de su mascota debe ser un numero mayor a 0")
        formularioOk = false;
  }
    //Validación foto

  let archivo = document.getElementById('foto-mascota').files;
  if (archivo.length === 0){
    mostrarError("Debe elegir por lo menos una foto");
    formularioOk= false;
  }

 return formularioOk;

}
}
/****************************************************
 *Confirma formulario
 ****************************************************/

function confirmacionFormulario() {
  let confirmar = window.confirm("¿Está seguro que desea enviar esta información?");
  if(confirmar){
    alert("Hemos recibido su info, grax");
      window.scrollTo(0,0);
  }
  return true;
}




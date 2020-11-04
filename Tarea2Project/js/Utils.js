/* Funciones para PetBook */


/*******************************************
 * Muestra las ultimas 5 mascotas ingresadas al sistema
 ***********************************************/
var stateLista = true;
function verListadoMascotas() {

  let listado = document.getElementById("listadoContainer");
  listado.innerHTML =  `
    <div id="infoCenso"></div>
  <hr>
  <div class="main center">
  <div class="divTable center">
  <div class="divTableBody">
  <div class="divTableRow cabeceraTabla">
  <div class="divTableCell widerCell">Fecha Ingreso</div>
  <div class="divTableCell widerCell">Comuna</div>
  <div class="divTableCell widerCell">Nombre Calle</div>
  <div class="divTableCell widerCell">Nombre Contacto</div>
  <div class="divTableCell widerCell">Total Mascota</div>
  <div class="divTableCell widerCell">Total Fotos</div>
  </div>

  <div class="divTableRow clickeable" onclick="showCenso(0)" id="0">
    <div class="divTableCell widerCell">${listadoMascotas[0].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[0].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[0].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[0].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[0].totalMascotas}</div>
    <div class="divTableCell widerCell">${listadoMascotas[0].totalFotos}</div>
    </div>

    <div class="divTableRow clickeable" onclick="showCenso(1)" id="1">
    <div class="divTableCell widerCell">${listadoMascotas[1].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[1].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[1].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[1].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[1].totalMascotas}</div>
    <div class="divTableCell widerCell">${listadoMascotas[1].totalFotos}</div>
    </div>

    <div class="divTableRow clickeable" onclick="showCenso(2)" id="2">
    <div class="divTableCell widerCell">${listadoMascotas[2].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[2].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[2].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[2].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[2].totalMascotas}</div>
    <div class="divTableCell widerCell">${listadoMascotas[2].totalFotos}</div>
    </div>

    <div class="divTableRow clickeable" onclick="showCenso(3)" id="3">
    <div class="divTableCell widerCell">${listadoMascotas[3].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[3].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[3].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[3].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[3].totalMascotas}</div>
    <div class="divTableCell widerCell">${listadoMascotas[3].totalFotos}</div>
    </div>

    <div class="divTableRow clickeable" onclick="showCenso(4)" id="4">
    <div class="divTableCell widerCell">${listadoMascotas[4].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[4].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[4].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[4].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[4].totalMascotas}</div>
    <div class="divTableCell widerCell">${listadoMascotas[4].totalFotos}</div>
    </div>

  </div>
  </div>
  </div>
  `;
   if(stateLista === false){
    document.getElementById("listadoContainer").style.display = "none";
    stateLista = true
  }
  else{
    document.getElementById("listadoContainer").style.display = "block";
    stateLista = false
  }
/*
  for( let pet of listadoMascotas ){

    listado.innerHTML = listado.innerHTML + `
    <div class="divTable center">
    <div class="divTableBody">
    <div class="divTableRow">
    <div class="divTableCell">${pet.fechaIngreso}</div>
    <div class="divTableCell">${pet.comuna}</div>
    <div class="divTableCell">${pet.calle}</div>
    <div class="divTableCell">${pet.nombre}</div>
    <div class="divTableCell">${pet.totalMascotas}</div>
    <div class="divTableCell">${pet.totalFotos}</div>
    </div>
    </div>
    </div>



    `;
    listado.innerHTML = listado.innerHTML + `
                                        </div>
                                                </div>
                                                        </div>
        `;
  } */

}
/*******************************************************
 * Mustra la información del censo al ser clickada
 * una fila del listado de mascotas
 *******************************************************/

function showCenso(id){
  let ventana = document.getElementById("infoCenso" );
  ventana.style.display = 'block';
  ventana.innerHTML =  `

<hr>
<div class="titulo"> Información del Censo</div>
<div class="main center">
<div class="divTable center">
<div class="divTableBody">
<div class="divTableRow cabeceraTabla">
    <div class="divTableCell ">Nombre Contacto</div>
    <div class="divTableCell ">Email </div>
    <div class="divTableCell ">Celular</div>
</div>
<div class="divTableRow">
    <div class="divTableCell widerCell">${listadoMascotas[id].nombre}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].email}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].celular}</div>
</div>
<div class="divTableRow cabeceraTabla">
    <div class="divTableCell ">Fecha de Ingreso</div>
    <div class="divTableCell ">Region</div>
    <div class="divTableCell ">Comuna</div>
    <div class="divTableCell ">Calle</div>
    <div class="divTableCell ">Numero</div>
    <div class="divTableCell ">Sector</div>

</div>
<div class="divTableRow">
    <div class="divTableCell widerCell">${listadoMascotas[id].fechaIngreso}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].region}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].comuna}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].calle}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].numero}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].sector}</div>

</div>
</div>
<div class="divTableBody">
<div class="divTableRow cabeceraTabla">
    <div class="divTableCell">Tipos de Mascotas</div>
    <div class="divTableCell">Edad</div>
    <div class="divTableCell">Color</div>
    <div class="divTableCell">Raza</div>
    <div class="divTableCell">Esterilizado?</div>
    <div class="divTableCell">Vacunas al dia?</div>
</div>
<div class="divTableRow">
    <div class="divTableCell widerCell">${listadoMascotas[id].tipo}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].edad}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].color}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].raza}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].esterilizado}</div>
    <div class="divTableCell widerCell">${listadoMascotas[id].vacunas}</div>

</div>
</div>
</div>
 <div class="center" onclick="mostrarImagen()"><img id= "myImg"class="petImage center clearfix" src="img/gatino1.jpg" ></div>
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
</div>
<div id="outer">
  <div class="inner"><button id="cerrarVentana${id}" class="btn1" >Cerrar</button></div>
</div>
</div>
  `;

  let btn = document.getElementById("cerrarVentana"+id);
  btn.onclick= function (){ventana.style.display = 'none'}
}
/****************************************************
 * Muestra imagen en formato mas grande
 ****************************************************/
function mostrarImagen(){
  // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}
/****************************************************
 * Rellena los campos de selección de región y comuna
 * usando el objeto Chile que se encuentra al final del
 * script
 ****************************************************/
function selectRegionComuna() {

  let htmlRegion = '<option value="vacio">Seleccione región</option><option value="vacio">--</option>';
  let htmlComuna = '<option value="vacio">Seleccione comuna</option><option value="vacio">--</option>';

  for (let regiones of chile) {
    htmlRegion = htmlRegion + '<option value="' + regiones.region + '">' + regiones.region + '</option>';
  }
  document.getElementById("region").innerHTML = htmlRegion;
  document.getElementById("comuna").innerHTML = htmlComuna;

  document.getElementById("region").onchange = function () {
    var regionSelect = document.getElementById("region").value

    for (let region of chile) {
      if (region.region === regionSelect) {
        for (let comuna of region.comunas) {
          htmlComuna = htmlComuna + '<option value="' + comuna + '">' + comuna + '</option>';
        }
      }
    }
    document.getElementById("comuna").innerHTML = htmlComuna;
  };
}

/**
 * Genera un input tipo texto abajo del campo "tipo-mascota"
 * para ingresar manualmente otro tipo de mascota.
 */
function tipoMascotaOtro(){
  var tipoOtro = document.getElementById("tipo-mascota")
  if( tipoOtro.value === "otro"){
    document.getElementById("otroContainer").style.display = "block";
  }
}
/****************************************************
 * Agrega nuevo input para fotos
 ****************************************************/
var contadorMascota = 1;
var contadorFoto = 2;
function agregarFoto(){
  idElemento = "fotoContainer" + String(contadorMascota);
  let container = document.getElementById(idElemento);

  if(contadorFoto <= 5){
    container.innerHTML = container.innerHTML + `
    <div class="entrada">
    <div class="leyenda">Foto ${contadorFoto} </div>
    <input type="file" name="foto-mascota ${contadorFoto}" id="foto-mascota ${contadorFoto}" required="required" accept="image">
    </div>
    `;
  }
  contadorFoto++;
}


/****************************************************
 *Imprime 3 estadísticas con nombres en los ejes
 ****************************************************/
var stateEstadistica = true;
function estadisticas() {
  let estaditiContainer = document.getElementById("estadistiContainer");

  estaditiContainer.innerHTML = `

<div id="graficos" class="estadisticas">
   <img alt="graph1" class="grafico" id="graph1" src="../Tarea2Project/img/graph1.jpg">
   <img alt="graph1" class="grafico" id="graph1" src="../Tarea2Project/img/graph2.jpg">
   <img alt="graph1" class="grafico" id="graph1" src="../Tarea2Project/img/graph3.jpg">
</div>
  `;

  if(stateEstadistica === false){
    document.getElementById("estadistiContainer").style.display = "none";
    stateEstadistica = true
  }
  else{
    document.getElementById("estadistiContainer").style.display = "block";
    stateEstadistica = false
  }
}


/*********************************************
 * Genera el formulario para informar mascotas
 * @returns {boolean}
 *********************************************/
var state = true;
function informarMascota() {
    var cont = document.getElementById("informarContainer");
    cont.innerHTML = `
<form id=" informarMascotas" method="post" action="response.py" onsubmit="return validacionFormulario()" enctype="multipart/form-data">

  <div class="titulo"> Informar Mascotas </div>

  <div id="informarBody">

  <div class="subtitulo"> Domicilio </div>

  <div class="entrada">
      <div class="leyenda"> Región </div>
      <select type="text" name="region" id="region" required="required"></select>
  </div>

  <div class="entrada">
      <div class="leyenda"> Comuna </div>
      <select type="text" name="comuna" id="comuna" required="required"></select>
  </div>

  <div class="entrada">
      <div class="leyenda"> Nombre Calle </div>
      <input type="text" name="calle" id="calle" size="100" maxlength="250" required="required"/>
  </div>

  <div class="entrada">
      <div class="leyenda"> Número </div>
      <input type="text" name="numero" id="numero" size="20" maxlength="20" required="required" />
  </div>

  <div class="entrada">
      <div class="leyenda"> Sector </div>
      <input type="text" name="sector" id="sector"  size="100" maxlength="100" />
  </div>


<div class="subtitulo"> Datos de contacto </div>

  <div class="entrada">
      <div class="leyenda"> Nombre </div>
      <input type="text" name="nombre" id="nombre"  size="100" maxlength="200" required="required"/>
  </div>

  <div class="entrada">
      <div class="leyenda"> Email </div>
      <input type="text" name="email" id="email"  size="100" required="required"/>
  </div>

  <div class="entrada">
      <div class="leyenda"> celular </div>
      <input type="text" name="celular" id="celular"  size="15"/>
  </div>

    <div class="subtitulo"> Información de Mascota ${contadorMascota}</div>

  <div class="entrada">
  <label class="leyenda" for="tipo-mascota">Tipo de Mascota</label>
  <select name="tipo-mascota" id="tipo-mascota" required="required" onchange="tipoMascotaOtro();">
    <option value="vacio">Seleccione Tipo </option>
    <option value="vacio">--</option>
    <option value="perro">  Perro   </option>
    <option value="gato">   Gato    </option>
    <option value="pez">    Pez     </option>
    <option value="tortuga">Tortuga </option>
    <option value="hamster">Hámster </option>
    <option value="loro">   Loro    </option>
    <option value="iguana"> Iguana  </option>
    <option value="araña">  Araña   </option>
    <option value="otro">   otro    </option>
  </select>
  </div>

   <div id="otroContainer" style="display: None">
     <div class="entrada">
            <div class="leyenda"> Escriba su tipo de mascota </div>
            <input type="text" name="otra-mascota" id="otro"  size="40" />
        </div>
</div>



  <div class="entrada">
    <div class="leyenda"> Edad en años </div>
    <input type="text" name="edad-mascota" id="edad-mascota"  size="5" required="required"/>
  </div>

  <div class="entrada">
    <div class="leyenda"> Color </div>
    <input type="text" name="color-mascota" id="color-mascota"  size="30" maxlength="30" required="required"/>
  </div>

  <div class="entrada">
    <div class="leyenda"> Raza </div>
    <input type="text" name="raza-mascota" id="raza-mascota"  size="30" maxlength="30" required="required"/>
  </div>

  <div class="entrada">
  <label class="leyenda" for="esterilizado-mascota">Esterilizado?</label>
  <select name="esterilizado-mascota" id="esterilizado-mascota" required="required" >
    <option value="vacio">Seleccione </option>
    <option value="si">  Si   </option>
    <option value="no">   No   </option>
    <option value="noAplica">    No Aplica    </option>
  </select>
  </div>

  <div class="entrada">
  <label class="leyenda" for="vacunas-mascota">Vacunas al día?</label>
  <select name="vacunas-mascota" id="vacunas-mascota" required="required">
    <option value="vacio">Seleccione  </option>
    <option value="si">  Si   </option>
    <option value="no">   No   </option>
    <option value="noAplica">    No Aplica    </option>
  </select>
  </div>

  <div class="entrada">
    <div class="leyenda">Foto</div>
    <input type="file" name="foto-mascota" id="foto-mascota" required="required" accept="image">
    <button type="button" id="otraFoto" onclick="agregarFoto()">Agregar otra foto</button>
  </div>

  <div id="fotoContainer${contadorMascota}"></div>

  <div id="mascotaContainer"></div>


  <div class="entrada botones">
      <button id="otraMascotaBtn" type="button" onclick="informarOtraMascota()">Informar otra mascota en este domicilio</button>
      <button id="enviar" type="submit">Informar Mascota</button>
      </div>
</div>
</form>
  `;
      selectRegionComuna()


  if(state === false){
    document.getElementById("informarContainer").style.display = "none";
    state = true
  }
  else{
    document.getElementById("informarContainer").style.display = "block";
    state = false
  }


}
/****************************************************
 * Añade html para informar de otra mascota en el mismo
 * domicilio
 ****************************************************/

function informarOtraMascota(){
  contadorFoto = 2;
  contadorMascota++;

  let mascotaContainer = document.getElementById("mascotaContainer");

  mascotaContainer.innerHTML = mascotaContainer.innerHTML + `

<div id="newMascota">
  <div class="subtitulo"> Información de Mascota ${contadorMascota}</div>

  <div class="entrada">
  <label class="leyenda" for="tipo-mascota">Tipo de Mascota</label>
  <select name="tipo-mascota" id="tipo-mascota" required="required" onchange="tipoMascotaOtro();">
     <option value="vacio">Seleccione  </option>
    <option value="perro">  Perro   </option>
    <option value="gato">   Gato    </option>
    <option value="pez">    Pez     </option>
    <option value="tortuga">Tortuga </option>
    <option value="hamster">Hámster </option>
    <option value="loro">   Loro    </option>
    <option value="iguana"> Iguana  </option>
    <option value="araña">  Araña   </option>
    <option value="otro">   otro    </option>
  </select>
  </div>

   <div id="otroContainer"></div>



  <div class="entrada">
    <div class="leyenda"> Edad en años </div>
    <input type="text" name="edad-mascota" id="edad-mascota"  size="5" required="required"/>
  </div>

  <div class="entrada">
    <div class="leyenda"> Color </div>
    <input type="text" name="color-mascota" id="color-mascota"  size="30" maxlength="30" required="required"/>
  </div>

  <div class="entrada">
    <div class="leyenda"> Raza </div>
    <input type="text" name="raza-mascota" id="raza-mascota"  size="30" maxlength="30" required="required"/>
  </div>

  <div class="entrada">
  <label class="leyenda" for="esterilizado-mascota">Esterilizado?</label>
  <select name="esterilizado-mascota" id="esterilizado-mascota" required="required" >
     <option value="vacio">Seleccione  </option>
    <option value="si">  Si   </option>
    <option value="no">   No   </option>
    <option value="noAplica">    No Aplica    </option>
  </select>
  </div>

  <div class="entrada">
  <label class="leyenda" for="vacunas-mascota">Vacunas al día?</label>
  <select name="vacunas-mascota" id="vacunas-mascota" required="required">
     <option value="vacio">Seleccione  </option>
    <option value="si">  Si   </option>
    <option value="no">   No   </option>
    <option value="noAplica">    No Aplica    </option>
  </select>
  </div>

  <div class="entrada">
    <div class="leyenda">Foto</div>
    <input type="file" name="foto-mascota" id="foto-mascota" required="required" accept="image">
    <button type="button" id="otraFoto" onclick="agregarFoto()">Agregar otra foto</button>
  </div>

  <div id="fotoContainer${contadorMascota}"></div>
</div>
  `;

  document.getElementById("newMascota").scrollTo(0,0);

}



/**************************************************************************************
 * Listado de mascotas
 * @type {{nombre: string, fechaIngreso: string, comuna: string, totalFotos: number, totalMascotas: string, calle: string}[]}
 ****************************************************************************************/

var listadoMascotas = [
  {
    "fechaIngreso": "01/10/2020",
    "region": "Metropolitana",
    "comuna": "Santiago",
    "calle": "Dieciocho",
    "numero": "1234",
    "sector":"Belvedere",
    "nombre": "Almendra del Moral",
    "email":"usuario@dominio.com",
    "celular":"+56912345678",
    "tipo":["perro", "gato"],
    "edad":[1,2],
    "color":["cafe","blanco"],
    "raza":["quiltro","golden"],
    "esterilizado":["si","no"],
    "vacunas":["no","si"],
    "totalMascotas": 2,
    "totalFotos": 1,
  },
    {
    "fechaIngreso": "02/10/2020",
    "region": "Metropolitana",
    "comuna": "San Bernardo",
    "calle": "Doce de Febrero",
    "numero": "1234",
    "sector":"Belvedere",
    "nombre": "Jorge del Río",
    "email":"usuario@dominio.com",
      "celular":"+56912345678",
      "tipo":["perro","gato"],
      "edad":[1,2],
      "color":["cafe","blanco"],
      "raza":["quiltro","golden"],
      "esterilizado":["si","no"],
      "vacunas":["no","si"],
      "totalMascotas": 3,
    "totalFotos": 2,
  },
     {
    "fechaIngreso": "03/10/2020",
    "region": "Metropolitana",
    "comuna": "Iceland",
    "calle": "Canada",
    "numero": "1234",
    "sector":"Belvedere",
    "nombre": "Daniel Sigurdsson",
    "email":"usuario@dominio.com",
     "celular":"+56912345678",
     "tipo":["perro","gato"],
     "edad":[1,2],
       "colta":["cafe","blanco"],
       "rata":["quiltro","golden"],
       "esterilizado":["si","no"],
       "vacunas":["no","si"],
       "totalMascotas": 1,
    "totalFotos": 1,
  },
    {
    "fechaIngreso": "04/10/2020",
    "region": "Metropolitana",
    "comuna": "Santiago",
    "calle": "Portugal",
    "numero": "1234",
    "sector":"Belvedere",
    "nombre": "Marcelo",
    "email":"usuario@dominio.com",
      "celular":"+56912345678",
      "tipo":["perro","gato"],
      "edad":[1,2],
      "color":["cafe","blanco"],
      "raza":["quiltro","golden"],
      "esterilizado":["si","no"],
      "vacunas":["no","si"],
      "totalMascotas": 1,
    "totalFotos": 2,
  },
  {
    "fechaIngreso": "05/10/2020",
    "region": "Metropolitana",
    "comuna": "Puchuncavi",
    "calle": "Av del Mar",
    "numero": "1234",
    "sector":"Belvedere",
    "nombre": "Carla",
    "email":"usuario@dominio.com",
    "celular":"+56912345678",
    "tipo":["perro", "gato"],
    "edad":[1,2],
    "color":["cafe","blanco"],
    "raza":["quiltro","golden"],
    "esterilizado":["si","no"],
    "vacunas":["no","si"],
    "totalMascotas": 3,
    "totalFotos": 10,
  }
];


/*
 * Regiones y comunas de chile
 */

var chile = [
  {
    "region": "Arica y Parinacota",
    "numero": "XV",
    "comunas": [
      "Arica",
      "Camarones",
      "General Lagos",
      "Putre"
    ]
  },
  {
    "region": "Tarapacá",
    "numero": "I",
    "comunas": [
      "Alto Hospicio",
      "Camiña",
      "Colchane",
      "Huara",
      "Iquique",
      "Pica",
      "Pozo Almonte"
    ]
  },
  {
    "region": "Antofagasta",
    "numero": "II",
    "comunas": [
      "Antofagasta",
      "Calama",
      "María Elena",
      "Mejillones",
      "Ollagüe",
      "San Pedro de Atacama",
      "Sierra Gorda",
      "Taltal",
      "Tocopilla"
    ]
  },
  {
    "region": "Atacama",
    "numero": "III",
    "comunas": [
      "Alto del Carmen",
      "Caldera",
      "Chañaral",
      "Copiapó",
      "Diego de Almagro",
      "Freirina",
      "Huasco",
      "Tierra Amarilla",
      "Vallenar"
    ]
  },
  {
    "region": "Coquimbo",
    "numero": "IV",
    "comunas": [
      "Andacollo",
      "Canela",
      "Combarbalá",
      "Coquimbo",
      "Illapel",
      "La Higuera",
      "La Serena",
      "Los Vilos",
      "Monte Patria",
      "Ovalle",
      "Paiguano",
      "Punitaqui",
      "Río Hurtado",
      "Salamanca",
      "Vicuña"
    ]
  },
  {
    "region": "Valparaíso",
    "numero": "V",
    "comunas": [
      "Algarrobo",
      "Cabildo",
      "Calera",
      "Calle Larga",
      "Cartagena",
      "Casablanca",
      "Catemu",
      "Concón",
      "El Quisco",
      "El Tabo",
      "Hijuelas",
      "Isla de Pascua",
      "Juan Fernández",
      "La Cruz",
      "La Ligua",
      "Limache",
      "Llaillay",
      "Los Andes",
      "Nogales",
      "Olmué",
      "Panquehue",
      "Papudo",
      "Petorca",
      "Puchuncaví",
      "Putaendo",
      "Quillota",
      "Quilpué",
      "Quintero",
      "Rinconada",
      "San Antonio",
      "San Esteban",
      "San Felipe",
      "Santa María",
      "Santo Domingo",
      "Valparaíso",
      "Villa Alemana",
      "Viña del Mar",
      "Zapallar"
    ]
  },
  {
    "region": "Metropolitana de Santiago",
    "numero": "MET",
    "comunas": [
      "Alhué",
      "Buin",
      "Calera de Tango",
      "Cerrillos",
      "Cerro Navia",
      "Colina",
      "Conchalí",
      "Curacaví",
      "El Bosque",
      "El Monte",
      "Estación Central",
      "Huechuraba",
      "Independencia",
      "Isla de Maipo",
      "La Cisterna",
      "La Florida",
      "La Granja",
      "La Pintana",
      "La Reina",
      "Lampa",
      "Las Condes",
      "Lo Barnechea",
      "Lo Espejo",
      "Lo Prado",
      "Macul",
      "Maipú",
      "María Pinto",
      "Melipilla",
      "Ñuñoa",
      "Padre Hurtado",
      "Paine",
      "Pedro Aguirre Cerda",
      "Peñaflor",
      "Peñalolén",
      "Pirque",
      "Providencia",
      "Pudahuel",
      "Puente Alto",
      "Quilicura",
      "Quinta Normal",
      "Recoleta",
      "Renca",
      "San Bernardo",
      "San Joaquín",
      "San José de Maipo",
      "San Miguel",
      "San Pedro",
      "San Ramón",
      "Santiago",
      "Talagante",
      "Tiltil",
      "Vitacura"
    ]
  },
  {
    "region": "Libertador Gral. Bernardo O’Higgins",
    "numero": "VI",
    "comunas": [
      "Chimbarongo",
      "Chépica",
      "Codegua",
      "Coinco",
      "Coltauco",
      "Doñihue",
      "Graneros",
      "La Estrella",
      "Las Cabras",
      "Litueche",
      "Lolol",
      "Machalí",
      "Malloa",
      "Marchihue",
      "Nancagua",
      "Navidad",
      "Olivar",
      "Palmilla",
      "Paredones",
      "Peralillo",
      "Peumo",
      "Pichidegua",
      "Pichilemu",
      "Placilla",
      "Pumanque",
      "Quinta de Tilcoco",
      "Rancagua",
      "Rengo",
      "Requínoa",
      "San Fernando",
      "San Francisco de Mostazal",
      "San Vicente de Tagua Tagua",
      "Santa Cruz"
    ]
  },
  {
    "region": "Maule",
    "numero": "VII",
    "comunas": [
      "Cauquenes",
      "Chanco",
      "Colbún",
      "Constitución",
      "Curepto",
      "Curicó",
      "Empedrado",
      "Hualañé",
      "Licantén",
      "Linares",
      "Longaví",
      "Maule",
      "Molina",
      "Parral",
      "Pelarco",
      "Pelluhue",
      "Pencahue",
      "Rauco",
      "Retiro",
      "Romeral",
      "Río Claro",
      "Sagrada Familia",
      "San Clemente",
      "San Javier de Loncomilla",
      "San Rafael",
      "Talca",
      "Teno",
      "Vichuquén",
      "Villa Alegre",
      "Yerbas Buenas"
    ]
  },
  {
    "region": "Ñuble",
    "numero": "XVI",
    "comunas": [
      "Bulnes",
      "Chillán Viejo",
      "Chillán",
      "Cobquecura",
      "Coelemu",
      "Coihueco",
      "El Carmen",
      "Ninhue",
      "Ñiquén",
      "Pemuco",
      "Pinto",
      "Portezuelo",
      "Quillón",
      "Quirihue",
      "Ránquil",
      "San Carlos",
      "San Fabián",
      "San Ignacio",
      "San Nicolás",
      "Treguaco",
      "Yungay"
    ]
  },
  {
    "region": "Biobío",
    "numero": "VIII",
    "comunas": [
      "Alto Biobío",
      "Antuco",
      "Arauco",
      "Cabrero",
      "Cañete",
      "Chiguayante",
      "Concepción",
      "Contulmo",
      "Coronel",
      "Curanilahue",
      "Florida",
      "Hualpén",
      "Hualqui",
      "Laja",
      "Lebu",
      "Los Álamos",
      "Los Ángeles",
      "Lota",
      "Mulchén",
      "Nacimiento",
      "Negrete",
      "Penco",
      "Quilaco",
      "Quilleco",
      "San Pedro de la Paz",
      "San Rosendo",
      "Santa Bárbara",
      "Santa Juana",
      "Talcahuano",
      "Tirúa",
      "Tomé",
      "Tucapel",
      "Yumbel"
    ]
  },
  {
    "region": "Araucanía",
    "numero": "IX",
    "comunas": [
      "Angol",
      "Carahue",
      "Cholchol",
      "Collipulli",
      "Cunco",
      "Curacautín",
      "Curarrehue",
      "Ercilla",
      "Freire",
      "Galvarino",
      "Gorbea",
      "Lautaro",
      "Loncoche",
      "Lonquimay",
      "Los Sauces",
      "Lumaco",
      "Melipeuco",
      "Nueva Imperial",
      "Padre las Casas",
      "Perquenco",
      "Pitrufquén",
      "Pucón",
      "Purén",
      "Renaico",
      "Saavedra",
      "Temuco",
      "Teodoro Schmidt",
      "Toltén",
      "Traiguén",
      "Victoria",
      "Vilcún",
      "Villarrica"
    ]
  },
  {
    "region": "Los Ríos",
    "numero": "XIV",
    "comunas": [
      "Corral",
      "Futrono",
      "La Unión",
      "Lago Ranco",
      "Lanco",
      "Los Lagos",
      "Mariquina",
      "Máfil",
      "Paillaco",
      "Panguipulli",
      "Río Bueno",
      "Valdivia"
    ]
  },
  {
    "region": "Los Lagos",
    "numero": "X",
    "comunas": [
      "Ancud",
      "Calbuco",
      "Castro",
      "Chaitén",
      "Chonchi",
      "Cochamó",
      "Curaco de Vélez",
      "Dalcahue",
      "Fresia",
      "Frutillar",
      "Futaleufú",
      "Hualaihué",
      "Llanquihue",
      "Los Muermos",
      "Maullín",
      "Osorno",
      "Palena",
      "Puerto Montt",
      "Puerto Octay",
      "Puerto Varas",
      "Puqueldón",
      "Purranque",
      "Puyehue",
      "Queilén",
      "Quellón",
      "Quemchi",
      "Quinchao",
      "Río Negro",
      "San Juan de la Costa",
      "San Pablo"
    ]
  },
  {
    "region": "Aisén del Gral. Carlos Ibáñez del Campo",
    "numero": "XI",
    "comunas": [
      "Aisén",
      "Chile Chico",
      "Cisnes",
      "Cochrane",
      "Coihaique",
      "Guaitecas",
      "Lago Verde",
      "O’Higgins",
      "Río Ibáñez",
      "Tortel"
    ]
  },
  {
    "region": "Magallanes y de la Antártica Chilena",
    "numero": "XII",
    "comunas": [
      "Antártica",
      "Cabo de Hornos (Ex Navarino)",
      "Laguna Blanca",
      "Natales",
      "Porvenir",
      "Primavera",
      "Punta Arenas",
      "Río Verde",
      "San Gregorio",
      "Timaukel",
      "Torres del Paine"
    ]
  }
];



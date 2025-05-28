/*JAVASCRIPT PARA CREAR UNA GALERIA DINAMICA*/

//Array con las rutas de las imagenes
let imagenes = [
	"../img/theLastOfUsCaratula.jpg",
	"../img/jackAndDaxterCaratula.jpg",
	"../img/assasinsCreedValhallaCaratula.jpg",
	"../img/blackOps2Caratula.jpg",
	"../img/crashBandicootCaratula.jpg",
	"../img/godOfWarCaratula.jpg",
	"../img/gtaCaratula.jpg",
	"../img/theWitcherCaratula.jpg",
	"../img/residentEvilBiohazarCaratula.jpg",
	"../img/residentEvilVillageCaratula.jpg",
	"../img/assasinsCreedOriginsCaratula.jpg",
	"../img/coldWarCaratula.jpg",
	"../img/darkSoulsCaratula.jpg",
	"../img/darkSouls2Caratula.jpg",
	"../img/darkSouls3Caratula.jpg",
	"../img/bloodBorneCaratula.jpg",
	"../img/sekiroCaratula.jpg",
	"../img/eldenRingCaratula.jpg"
	];

//Ejecutamos el codigo cuando el DOM este totalmente cargado
document.addEventListener("DOMContentLoaded", function(){
	//Aqui guardaremos el nombre de la imagen para luego crear el ALT
	let nombre = 0;

	//Seleccionamos el contenedor
	let galeria = document.getElementById("galeria-dinamica");
	if (!galeria) return;  // Si no existe, no hacemos nada

	//Bucle para crear las imágenes
	imagenes.forEach(ruta => {
		let img = document.createElement("img");
		img.src = ruta;
		//Le añado la clase galery-item
		img.classList.add("galery-item");
		//Le añado el alt a la imagen 
		nombre = ruta.split("/").pop().split("."[0]);
		img.alt = "Carátula Videojuego" + nombre;
		galeria.appendChild(img);
	});

});
/*JAVASCRTIP PARA LEER UN ARCHIVO JSON Y CREAR UNA TABLA DINÁMICA */

//Para convertir la infomacion.json en un tabla creada en el INDEX.html
document.addEventListener("DOMContentLoaded", function(){
	fetch("../data/informacion.json")
		.then(response => response.json())
		.then(datos => {
			//Guardamos el elemeto tabla dinamica en un constante
			const tabla = document.getElementById("tabla-dinamica");
			//Recorro datos donde esta guardado la infomacion del JSON
			datos.forEach(juego => {
				//Creamos elemento fila y la guardamos en constante
				const fila = document.createElement("tr");	
				
				//Creamos celda para el top y la guardamos en una constante 
				const celdaTop = document.createElement("td");
				//Guardamos en la celda el primer campo del json
				celdaTop.textContent = juego.top;
				//Creamos celda para el top y la guardamos en una constante 
				const celdaTitulo = document.createElement("td");
				//Guardamos en la celda el primer campo del json
				celdaTitulo.textContent = juego.titulo;
				//Creamos celda para el top y la guardamos en una constante 
				const celdaGenero = document.createElement("td");
				//Guardamos en la celda el primer campo del json
				celdaGenero.textContent = juego.genero;
				//Creamos celda para el top y la guardamos en una constante 
				const celdaDesarrolladora = document.createElement("td");
				//Guardamos en la celda el primer campo del json
				celdaDesarrolladora.textContent = juego.desarrolladora;

				//Añadimos las columnas a la fila 
				fila.appendChild(celdaTop);
				fila.appendChild(celdaTitulo);
				fila.appendChild(celdaGenero);
				fila.appendChild(celdaDesarrolladora);

				//Añadimos la fila a la tabla
				tabla.appendChild(fila);
			});
		})
		.catch(error => console.error("Error al cargar el JSON",error));
});

/*                  VERIFICAR LOS DATOS INTRODUCIDOS EN EL FORMULARIO                 */

document.addEventListener("DOMContentLoaded", function() {
	const formulario = document.getElementById("Formulario");
	console.log("Entra en el formulario");
	if (formulario) {
		formulario.addEventListener("submit", function(e) {
			e.preventDefault();

			// Constantes con los valores del formulario
			const nombre = document.getElementById("NOMBRE").value.trim();
			const apellido = document.getElementById("APELLIDO").value.trim();
			const telefono = document.getElementById("TELEFONO").value.trim();
			const email = document.getElementById("E-MAIL").value.trim();
			const condiciones = document.getElementById("cbCondiciones").checked;

			// Validar nombre
			if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/.test(nombre)) {
				alert("El nombre debe tener solo letras y un máximo de 15 caracteres.");
				return;
			}

			// Validar apellidos
			if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/.test(apellido)) {
				alert("Los apellidos deben tener solo letras y un máximo de 40 caracteres.");
				return;
			}

			// Validar teléfono
			if (!/^\d{9}$/.test(telefono)) {
				alert("El teléfono debe tener exactamente 9 cifras numéricas.");
				return;
			}

			// Validar email
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				alert("Introduce un correo electrónico válido.");
				return;
			}

			// Validar aceptación de condiciones
			if (!condiciones) {
				alert("Debes aceptar las condiciones de privacidad.");
				return;
			}

			// Si todo es correcto
			alert("El formulario se envió correctamente.");
			//Reseteo el formulario a los valores iniciales
			formulario.reset()
			
		});
	}
});

//Para que cargue toda la pagina HTML antes de hacer cualquier funcion 
$(document).ready( function(){

	/* JAVASCRIPT PARA CALCULAR EL PRESUPUESTO  */

	//Si en nuetro formulario del HTML cambia algun elemto de la parte del presupuesto 
	//Se Debería volver a ejecutar la funcion CALCULARPRESUPUESTO()
	$('#selectProducto').change(function(){
	console.log("Selct producto a cambiado");
	calcularPresupuesto()
	});

	$('#selectTipoPlazo').change(function(){
		calcularPresupuesto()
	});

	$('#plazo').change(function(){
		calcularPresupuesto()
	});

	$('#cbDLC').change(function(){
		calcularPresupuesto()
	});

	$('#cbColeccionista').change(function(){
		calcularPresupuesto()
	});



	//Funcion para calcular el presupuesto 
	function calcularPresupuesto(){

		console.log("Entra en la funcion calcularPresupuesto")

		//Declaramos todas las varibles para calcular el presupuesto
		var presupuesto=0;
		var itemSelectProducto=0;
		var producto=0;
		var itemSelectPlazo=0;
		var tipoPlazo=0;
		var totalPlazos=0;

		//Cogemos del archivo HTML el elemento SELECT con el id que necesitamos
		//En nuestro html el id del select es "selectProducto"
		//Guardaremos el elemnto con ese id en la variable 
		itemSelectProducto = document.getElementById('selectProducto');

		//Vamos a guardar el producto selecionado en la variable producto
		producto = itemSelectProducto.options[itemSelectProducto.selectedIndex].value;

		//Segun producto elejido vamos a actualizar el presupuesto
		switch(Number(producto)){
			case 0:
				break;
			case 1:
				presupuesto = presupuesto + 60;
				break;
			case 2:
				presupuesto = presupuesto + 50;
				break;
			case 3:
				presupuesto = presupuesto + 55;
				break;
			case 4:
				presupuesto = presupuesto + 80;
				break;
		}

		//hacemos lo mismo para coger el valor selecionado, en el select de tipo de plazo
		itemSelectPlazo = document.getElementById('selectOption');
		tipoPlazo = itemSelectPlazo.options[itemSelectPlazo.selectedIndex].value;

		//Ademas cogemos el valor introducido en el input de total de plazos
		totalPlazos = document.getElementById('plazo').value;

		//Segun el tipo de plazo y la cantidad total de plazos actualizamos la variable presupuesto
		switch(Number(tipoPlazo)){
			case 0:
				break;
			case 1:
				//Cuando ya sabemos el tipo de plazo en el que estamos
				//El presupuesto cambia segun el numero de plazo elejido
				if(totalPlazos!=0){
					if(totalPlazos<2){
						presupuesto=presupuesto+10;
					} else if(totalPlazos<15){
						presupuesto=presupuesto+8;
					} else if(totalPlazos<30){
						presupuesto=presupuesto+5; 
					} else if(totalPlazos<60){
						presupuesto=presupuesto+4; 
					} else if(totalPlazos<90){
						presupuesto=presupuesto+3; 
					} else if(totalPlazos<120){
						presupuesto=presupuesto+2; 
					} else{
						presupuesto=presupuesto+1; 
					}
				}

				break;
			case 2:
				//Cuando ya sabemos el tipo de plazo en el que estamos
				//El presupuesto cambia segun el numero de plazo elejido
				if(totalPlazos!=0){
					if(totalPlazos==1){
						presupuesto=presupuesto+4;
					} else if(totalPlazos==2){
						presupuesto=presupuesto+3;
					} else if(totalPlazos==3){
						presupuesto=presupuesto+2; 
					} else{
						presupuesto=presupuesto+1;
					}
				}

				break;
		}

		//Lo ultimo que tenemos que tener en cuenta para el presupuesto 
		//Es si el cliente seleciona los checkbox de los extras

		//Si el CHECK BOX de DLC esta seleccionado
		if(document.getElementById('cbDLC').checked){
			presupuesto=presupuesto+50;
		}

		//Si el CHECK BOX de Coleccionista esta seleccionado
		if(document.getElementById('cbColeccionista').checked){
			presupuesto = presupuesto + 80;
		}

		//Ahora ya tenemos calculado el presupuesto 
		//Solo tenemos que devolver el valor al HTML
		//En la casilla que creamos y bloqueamos 
		document.getElementById('txtPresupuesto').value = presupuesto;
	}

});



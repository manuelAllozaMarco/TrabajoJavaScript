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
/*JAVASCRTIP PARA LEER UN ARCHIVO JSON Y CREAR UNA TABLA DINÁMICA */

//Para convertir la infomacion.json en un tabla creada en el INDEX.html
document.addEventListener("DOMContentLoaded", function(){
	fetch("data/informacion.json")
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
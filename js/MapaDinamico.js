/* JAVASCRIPT PARA CREAR EL MAPA DINÁMICO */

// Coordenadas del negocio
const negocio = { lat: 41.645789555785484, lng:-0.8822668374891014 };

function initMap() {
    // Creas un mapa centrado en el negocio
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 13,
        //Centro el mapa la localiación de mi negocio
        center: negocio,
    });

    // Marcador del negocio con las coordenadas introducidas en la constante negocio
    const markerNegocio = new google.maps.Marker({
        position: negocio,
        map: map,
        title: "Mi Negocio",
    });

    //Creo un servicio de direcciones que se encargará de calcular rutas 
    const directionsService = new google.maps.DirectionsService();  
    //Creo un renderizador de direcciones para dibujar las rutas en el mapa
    const directionsRenderer = new google.maps.DirectionsRenderer();
    //Enlazo el renderizador de direcciones al mapa
    directionsRenderer.setMap(map);

    // Intentamos obtener la ubicación del cliente
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const cliente = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Mostrar marcador cliente
                new google.maps.Marker({
                    position: cliente,
                    map: map,
                    title: "Tu ubicación",
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });

                // Calcular ruta del cliente al negocio
                directionsService.route(
                    {   
                        // Donde iniciamos la ruta 
                        origin: cliente,
                        // Donde finaliza la ruta 
                        destination: negocio,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (response, status) => {
                        if (status === "OK") {
                            directionsRenderer.setDirections(response);
                        } else {
                            alert("No se pudo calcular la ruta: " + status);
                        }
                    }
                );
            },
            () => {
                alert("No se pudo obtener la ubicación del cliente.");
            }
        );
    } else {
        alert("El navegador no soporta geolocalización.");
    }
}

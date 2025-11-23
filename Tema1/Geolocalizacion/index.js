//4



/*
function posicionn(posicion)
{
    var map = L.map('mapa').setView([posicion.coords.latitude,posicion.coords.longitude], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var marker = L.marker
    L.marker([posicion.coords.latitude,posicion.coords.longitude]).addTo(map)
    console.log(posicion.coords.accuracy);
    var latlngs = [];
    latlngs.push(navigator.geolocation.watchPosition)

var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
map.fitBounds(polyline.getBounds());
}

if(navigator.geolocation){
    navigator.geolocation.watchPosition(posicionn);
}
else{
    console.log("no");
}

*/
// create a red polyline from an array of LatLng points
listadoPuntos =[];
var map,marker,polyline;
function succes(pos){
    const long = pos.coords.longitude;
    const lat = pos.coords.latitude;
    punto = [lat, long];
    listadoPuntos.push(punto);

    if (listadoPuntos.length == 1){

    map = L.map("mapa").setView(punto, 20);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    marker = L.marker(punto).addTo(map);
    polyline=L.polyline(listadoPuntos).addTo(map);
    }
    else
    {
        map.setView(punto,15);
        marker.setLatLng([punto]);
        polyline.setLatLngs(ListadoPuntos);
    }


}

navigator.geolocation.watchPosition(succes);

// zoom the map to the polyline

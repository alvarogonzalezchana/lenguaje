function initMap() {
    var toledoLocation = { lat: 39.8628, lng: -4.0273 }; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: toledoLocation
    });
    var marker = new google.maps.Marker({
        position: toledoLocation,
        map: map
    });
}

async function fetchWeather() {
    const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/45'); 
    const data = await response.json();
    document.getElementById('weather').innerHTML = `<h2>Información Meteorológica</h2><p>${data.nombre}: ${data.temperatura}°C</p>`;
}

window.onload = function() {
    initMap();
    fetchWeather();
};

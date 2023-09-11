// Coordenadas de Estocolmo
const stockholmLat = 59.3293;
const stockholmLng = 18.0686;

// Crie um mapa centrado em Estocolmo
const map = L.map('map').setView([stockholmLat, stockholmLng], 13);

// Adicione um provedor de mapa (usando OpenStreetMap neste exemplo)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Adicione um marcador para o centro de Estocolmo
const marker = L.marker([stockholmLat, stockholmLng]).addTo(map);
marker.bindPopup("Estocolmo, Suécia").openPopup();


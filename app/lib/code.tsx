export const code = (url: string): string => {
    return `<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" />

<!-- Leaflet JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>
<div id="map" style="height: 500px; width: 500px"></div>
<script>
    const coordinates = [48.8566, 2.3522];
    const zoom = 5;

    const mapContainer = document.getElementById('map');
    const map = L.map(mapContainer).setView(coordinates, zoom);

    L.tileLayer('${url}', {
        attribution: '© CARTO'
    }).addTo(map);
</script>`};
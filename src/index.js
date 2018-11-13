const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGxlZTMxNiIsImEiOiJjam9nN3J0OTcwYmNsM2t0N2o2eTN3bmJ4In0.fnk34rcOy_k5j9oRHp7fuQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

const marker = buildMarker('activity', [-74.009, 40.705]);
marker.addTo(map);

const marker2 = buildMarker('restaurant', [-74.009, 40.6]);

marker2.addTo(map);

module.exports = map;

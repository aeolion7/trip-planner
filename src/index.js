const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken =
  'pk.eyJ1IjoiZGxlZTMxNiIsImEiOiJjam9nN3J0OTcwYmNsM2t0N2o2eTN3bmJ4In0.fnk34rcOy_k5j9oRHp7fuQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

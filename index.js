import L from 'leaflet';
import './smoothscroll';
import 'leaflet/dist/leaflet.css';
import licenses from './licenses.json';
/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const map = L.map('map', {
  preferCanvas: true,
  scrollWheelZoom: false, // disable original zoom function
  smoothWheelZoom: true,  // enable smooth zoom 
  smoothSensitivity: 1,   // zoom speed. default is 1
});
const defaultCenter = [38.889269, -77.050176];
const defaultZoom = 15;
const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
// const marker = L.marker(defaultCenter);

map.setView(defaultCenter, defaultZoom);

basemap.addTo(map);
// marker.addTo(map);
L.geoJSON(licenses).addTo(map);
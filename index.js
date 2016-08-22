require('mapbox.js');
var config = require('./config.json');

console.log(L, config)

L.mapbox.accessToken = config.mapbox.APIToken;
var map = global.map = L.mapbox.map('map', config.mapbox.mapId)
    .setView([51.9215571, 4.5011478], 15),
    geocoder = L.mapbox.geocoder('mapbox.places-v1');

map._controlCorners.topright.appendChild(document.querySelector('.block'));

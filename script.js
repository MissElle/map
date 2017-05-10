// script.js - script for map project

//------------------------------------------------------------------------------------//

var geoOptions = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

//var mapCenter = document.getElementById('myLat').value, document.getElementById('myLng').value;

var mapZoom = document.getElementById('myZoom').value;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.618107, lng:-122.319391},
    zoom: 16
    });
  console.log("map is being read");
}

function getCenter() {
  
}

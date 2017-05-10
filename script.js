// script.js - script for map project

//------------------------------------------------------------------------------------//

//var geoOptions = {
//  enableHighAccuracy: true, 
//  maximumAge        : 30000, 
//  timeout           : 27000
//}; 

document.getElementById('myCoords').addEventListener("change", initMap);

function initMap() {
  var mapLat = parseFloat(document.getElementById('myLat').value);
  var mapLng = parseFloat(document.getElementById('myLng').value);
  var mapZoom = parseFloat(document.getElementById('myZoom').value);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: mapLat, lng: mapLng},
    zoom: mapZoom
    });
  console.log("map is being read");
}


// script.js - script for map project

//------------------------------------------------------------------------------------//

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('myMap'), {
  center: {lat: 47.618107, lng:-122.319391},
  zoom: 16
  });
  console.log("map is being read");
}


// script.js - script for map project

//------------------------------------------------------------------------------------//
//Event Listener to update form with any changes to the fields
//var geoOptions = {
//  enableHighAccuracy: true, 
//  maximumAge        : 30000, 
//  timeout           : 27000
//}; 

document.getElementById('myCoords').addEventListener("change", initMap);

//------------------------------------------------------------------------------------//
//Function for generating map below

function initMap() {
  var selForm = document.getElementById('favPlaces');
  var selOptions = selForm.options[selForm.selectedIndex].text;
  var mapLat = parseFloat(document.getElementById('myLat').value);
  var mapLng = parseFloat(document.getElementById('myLng').value);
  var mapZoom = parseFloat(document.getElementById('myZoom').value);

//These if/else statements determine coordinates depending which option is selected
  
  if(selOptions === "Enter Coordinates, or..."){
    mapLat = parseFloat(document.getElementById('myLat').value);
    mapLng = parseFloat(document.getElementById('myLng').value);    
  }else if(selOptions === "Cal Anderson Park"){
    mapLat = 47.618107;
    mapLng = -122.319391;
  }else if(selOptions === "Uwajimaya"){
    mapLat = 47.596772;
    mapLng = -122.326845;
  }else if(selOptions === "NYX"){
    mapLat = 47.620885;
    mapLng = -122.321206;
  }else if(selOptions === "UW Extension"){
    mapLat = 47.608419;
    mapLng = -122.3378477;
  }else if(selOptions === "Convention Center"){
    mapLat = 47.6117273;
    mapLng = -122.3351027;
  }else if(selOptions === "Kobe Terrace"){
    mapLat = 47.6002647;
    mapLng = -122.3264266;
  }else {
      mapLat = position.coords.latitude;
      mapLng = position.coords.longitude;
  }
 
//Map is generated with the code below
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: mapLat, lng: mapLng},
    zoom: mapZoom
    });
  console.log("map is being read");
}


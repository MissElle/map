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
  infoWindow = new google.maps.InfoWindow;
  var selForm = document.getElementById('favPlaces');
  var selOptions = selForm.options[selForm.selectedIndex].text;
  var mapLat = parseFloat(document.getElementById('myLat').value);
  var mapLng = parseFloat(document.getElementById('myLng').value);
  var mapZoom = parseFloat(document.getElementById('myZoom').value);

//These if/else statements determine coordinates depending which option is selected
  
  if(selOptions === "Enter Coordinates"){
    mapLat = parseFloat(document.getElementById('myLat').value);
    mapLng = parseFloat(document.getElementById('myLng').value);
    infoWindow.setContent('Here are your Custom Coordinates');
  }else if(selOptions === "Cal Anderson Park"){
    mapLat = 47.618107;
    mapLng = -122.319391;
    infoWindow.setContent('Cal Anderson Park');
  }else if(selOptions === "Uwajimaya"){
    mapLat = 47.596772;
    mapLng = -122.326845;
    infoWindow.setContent('Uwajimaya');
  }else if(selOptions === "NYX"){
    mapLat = 47.620885;
    mapLng = -122.321206;
    infoWindow.setContent('NYX');
  }else if(selOptions === "UW Extension"){
    mapLat = 47.608419;
    mapLng = -122.3378477;
    infoWindow.setContent('UW Extension');
  }else if(selOptions === "Convention Center"){
    mapLat = 47.6117273;
    mapLng = -122.3351027;
    infoWindow.setContent('Washington State Convention Center');
  }else if(selOptions === "Kobe Terrace"){
    mapLat = 47.6002647;
    mapLng = -122.3264266;
    infoWindow.setContent('Kobe Terrace');
  }else {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
        infoWindow.setPosition(pos);
        infoWindow.setContent('You are Here');
        infoWindow.open(map);
        map.setCenter(pos);
      },
                                           
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
 
//Map is generated with the code below
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: mapLat, lng: mapLng},
    zoom: mapZoom
    });
//------------------------------------------------------------------------------------//
//This function will get the coordinates


    console.log("map is being read");
}


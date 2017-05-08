// script.js - script for map project

//------------------------------------------------------------------------------------//

var navGeo = navigator.geolocation;

//if (navGeo) {
//  nav.GeoLoc.getCurrentPosition(
//    function successCallback(position){
//      console.log("great!")  
//    },
//    function errorCallback (error) {
//      var message;
//      switch (error.code) {
//        case error.PERMISSION_DENIED:
//          message = "Geolocation permission denied.";
//          break;
//          
//        case error.POSITION_UNAVAILABLE:
//          message = "Geolocation position unavailable."
//          break;
//          
//        case error.TIMEOUT:
//          message = "Geolocation timed out."
//          break;
//          
//        default:
//          message += '\n' + error.message;
//          document.getElementById('map').innerHTML(message);
//    }
//      enableHighAccuracy: false,
//      maximumAge: 60000,
//      timeout: 30000
//    });
//}else {
//  initMap();
//}

var geoOptions = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.618107, lng:-122.319391},
    zoom: 16
    });
  console.log("map is being read");
}

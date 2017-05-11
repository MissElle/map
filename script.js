// script.js - script for map project

//------------------------------------------------------------------------------------//
//Event Listener to update form with any changes to the fields 

document.getElementById('myCoords').addEventListener('change', initMap);

//------------------------------------------------------------------------------------//
//One function below, will generate the map, pull up current location coordinates and allow user's to pick favorite locations.

function initMap() {
  infoWindow = new google.maps.InfoWindow;
  var selForm = document.getElementById('favPlaces');
  var selOptions = selForm.options[selForm.selectedIndex].text;
  var mapLat = parseFloat(document.getElementById('myLat').value);
  var mapLng = parseFloat(document.getElementById('myLng').value);
  var mapZoom = parseFloat(document.getElementById('myZoom').value);
  var locName = "";
  var vidSrc = document.getElementById('movie');
  
//These if/else statements determine coordinates depending which option is selected
  
  if(selOptions === "Enter Coordinates"){
    mapLat = parseFloat(document.getElementById('myLat').value);
    mapLng = parseFloat(document.getElementById('myLng').value);
    locName = "Custom Coordinates";
    vidSrc.innerHTML = '<video controls><source src="videos/intro.mp4"></video>';
  }else if(selOptions === "The Mercury"){
    mapLat = 47.612839;
    mapLng = -122.318911;
    locName= "The Mercury<br>@MachineWorks";
    vidSrc.innerHTML = '<video controls><source src="videos/0-merc.mp4"></video>';
  }else if(selOptions === "Cal Anderson Park"){
    mapLat = 47.618107;
    mapLng = -122.318909;
    locName= "Cal Anderson<br>Park";
    vidSrc.innerHTML = '<video controls><source src="videos/1-cal.mp4"></video>';
  }else if(selOptions === "Dick's Burgers"){
    mapLat = 47.619316;
    mapLng = -122.321206;
    locName= "Dick's Burgers<br>Broadway Street";
    vidSrc.innerHTML = '<video controls><source src="videos/2-bro.mp4"></video>';
  }else if(selOptions === "Convention Center"){
    mapLat = 47.611831;
    mapLng = -122.332323;
    locName= "Washington State<br>Convention Center";
    vidSrc.innerHTML = '<video controls><source src="videos/3-con.mp4"></video>';
  }else if(selOptions === "UW Extension"){
    mapLat = 47.608813;
    mapLng = -122.335690;
    locName= "UW Extension<br>Continuing Education";
    vidSrc.innerHTML = '<video controls><source src="videos/4-uwex.mp4"></video>';
  }else if(selOptions === "Seattle Public Library") {
    mapLat = 47.606473;
    mapLng = -122.332990;
    locName= "Seattle Public<br>Library";
    vidSrc.innerHTML = '<video controls><source src="videos/5-lib.mp4"></video>';
  }else if(selOptions === "Kobe Terrace"){
    mapLat = 47.601000;
    mapLng = -122.324950;
    locName= "Kobe Terrace";
    vidSrc.innerHTML = '<video controls><source src="videos/6-kobe.mp4"></video>';
  }else if(selOptions === "Uwajimaya"){
    mapLat = 47.596772;
    mapLng = -122.326845;
    locName= "Uwajimaya<br>International District";
    vidSrc.innerHTML = '<video controls><source src="videos/7-uwa.mp4"></video>';
  }else {
  //-----------------------------------------------------------------------------------//
//This function will get the coordinates; altered from google's recommended coding at
//https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
    locName= "You are Here";
    vidSrc.innerHTML = '<video controls><source src="videos/intro.mp4"></video>';
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
    infoWindow.setPosition({lat: mapLat, lng: mapLng});
    infoWindow.setContent(locName);
    infoWindow.open(map);
    map.setCenter({lat: mapLat, lng: mapLng});
}


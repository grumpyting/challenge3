//4zZZS2w9bbRWXdUbcV0KSGqD9afgj4fxKb1e2naX API NASA
/*
	Momenteel zijn er een aantal sensoren van Insight weatherstation offline. 
	Hier meer info. https://mars.nasa.gov/insight/weather/ 
*/
function getAPIdataMars() {

	var requestMars = 'https://api.nasa.gov/insight_weather/?api_key=4zZZS2w9bbRWXdUbcV0KSGqD9afgj4fxKb1e2naX&feedtype=json&ver=1.0';
	fetch(requestMars)	

	.then(function(responseMars) {
		return responseMars.json();
	})

	.then(function(responseMars) {
		var sol = responseMars.sol_keys[0];
    // Momenteel zijn de sensoren offline. Deze code is wel correct toen het op een andere dag werd getest. 
/*
		document.getElementById('tempMars').innerHTML = responseMars[sol].AT.av + "&#176C";
		document.getElementById('seasonMars').innerHTML = responseMars[sol].Season;
		document.getElementById('windMars').innerHTML = responseMars.[sol].WD.most_common;
		document.getElementById('dateMars').innerHTML = responseMars[sol].Last_UTC + ' *';
		document.getElementById('pressureMars').innerHTML = responseMars[sol].PRE.av + ' Pa';
		*/
		console.log(responseMars);
		// test om de response te checken

	});
}

getAPIdataMars();


//  74a079d8f073aed89fe3791d4ba4d5a2 API WEATHER 
function getAPIdataEarth(){
	var requestEarth = 'https://api.openweathermap.org/data/2.5/weather?q=Cape%20Canaveral&units=metric&appid=74a079d8f073aed89fe3791d4ba4d5a2';

	fetch(requestEarth)

	.then(function(responseEarth) {
		return responseEarth.json();
	})

	.then(function(responseEarth){
		console.log(responseEarth);
		document.getElementById('tempEarth').innerHTML = responseEarth.main.temp +" °C";
		document.getElementById('weatherEarth').innerHTML = responseEarth.weather[0].main;
		document.getElementById('windEarth').innerHTML = responseEarth.wind.speed +" m/s";
		document.getElementById('pressureEarth').innerHTML = responseEarth.main.pressure /100+ " Pa";
	});
}	
	
getAPIdataEarth();

function setDate() {
var dateLZ = new Date()
document.getElementById('dateLZ').innerHTML = dateLZ.getFullYear() +'-' + (dateLZ.getMonth()+1) + '-' + dateLZ.getDate();
}
setInterval(setDate, 10);


// pk.eyJ1IjoiMTgwMDIzMzEiLCJhIjoiY2s4azMzcjU3MDFtMTNnbjV0cGQ5YXlobSJ9.CDu9p874B9t_iK5mvo7yrw API MAPBOX

      mapboxgl.accessToken = 'pk.eyJ1IjoiMTgwMDIzMzEiLCJhIjoiY2s4azMzcjU3MDFtMTNnbjV0cGQ5YXlobSJ9.CDu9p874B9t_iK5mvo7yrw';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/18002331/ckmqm2hms18is17o5cc04j7p9', // stylesheet location
        center: [-81.379234, 28.538336],
        zoom: 11.0
      });
      // Pak de style en API van MAPBOX, Center is de coordinaten van Orlando Florida



      map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['floridaFood']
        });

        if (!features.length) {
          return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h3>' +
              feature.properties.food + 
            '</h3>'	
          )
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });

      // Wanneer je klikt op een marker van FOOD, geef dan een popup met de info die in de dataset zit van MAPBOX. Dit geval naam van het restaurant.
    


      map.on('click', function (f) {
        var features = map.queryRenderedFeatures(f.point, {
          layers: ['floridaParks']
        });

        if (!features.length) {
          return;
        }

        var feature = features[0];

        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            '<h3>' +
              feature.properties.park + 
            '</h3>'	
          )
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });
    
          // Wanneer je klikt op een marker van Parks, geef dan een popup met de info die in de dataset zit van MAPBOX. Dit geval naam van het pretpark.

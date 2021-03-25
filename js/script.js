//4zZZS2w9bbRWXdUbcV0KSGqD9afgj4fxKb1e2naX API NASA

/*function getAPIdataMars() {

	// construct request
	var requestMars = 'https://api.nasa.gov/insight_weather/?api_key=4zZZS2w9bbRWXdUbcV0KSGqD9afgj4fxKb1e2naX&feedtype=json&ver=1.0';
	// get current weather
	fetch(requestMars)	
	//fetch(requestEarth)
	// parse response to JSON format
	.then(function(responseMars) {
		return responseMars.json();
	})
	
	// do something with response
	.then(function(responseMars) {
		document.getElementById('tempMars').innerHTML = responseMars.PRE.av;
		console.log(responseMars);
	});
}

getAPIdataMars();*/


//  74a079d8f073aed89fe3791d4ba4d5a2 API WEATHER 

function getAPIdataEarth(){
	var requestEarth = 'https://api.openweathermap.org/data/2.5/weather?q=Cape Canaveral&units=metric&appid=74a079d8f073aed89fe3791d4ba4d5a2';

	fetch(requestEarth)

	.then(function(responseEarth) {
		return responseEarth.json();
	})

	.then(function(responseEarth){
		console.log(responseEarth);
		document.getElementById('tempEarth').innerHTML = responseEarth.main.temp +" C°";
		document.getElementById('weatherEarth').innerHTML = responseEarth.weather[0].main;
		document.getElementById('windEarth').innerHTML = responseEarth.wind.speed +" m/s";
		document.getElementById('pressureEarth').innerHTML = responseEarth.main.pressure /100+ " Pa";
	});
}	
	
getAPIdataEarth();

function setDate() {
var dateLZ = new Date()
document.getElementById('dateLZ').innerHTML = dateLZ.getDate() + '/' + (dateLZ.getMonth()+1) +"/"+dateLZ.getFullYear();
}
setInterval(setDate, 10);


// pk.eyJ1IjoiMTgwMDIzMzEiLCJhIjoiY2s4azMzcjU3MDFtMTNnbjV0cGQ5YXlobSJ9.CDu9p874B9t_iK5mvo7yrw API MAPBOX

// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoiMTgwMDIzMzEiLCJhIjoiY2s4azMzcjU3MDFtMTNnbjV0cGQ5YXlobSJ9.CDu9p874B9t_iK5mvo7yrw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});